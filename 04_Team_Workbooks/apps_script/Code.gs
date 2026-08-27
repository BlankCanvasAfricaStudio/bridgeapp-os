/**
 * GRADESMATCH TEAM WORKBOOKS — shared store
 * Blank Canvas Agency
 *
 * This turns one Google Sheet into the brain behind the Team Workbooks.
 * The workbook page reads and writes through here, so everyone on the team
 * sees the same board and the OS dashboard shows the same numbers.
 *
 * ── SETUP (once, about five minutes) ────────────────────────────────────
 *  1. Make a new Google Sheet. Call it "Gradesmatch Team Workbooks".
 *  2. In that Sheet: Extensions → Apps Script.
 *  3. Delete whatever is in the editor, paste this whole file in, and Save.
 *  4. Deploy → New deployment → gear icon → Web app.
 *       Execute as:      Me
 *       Who has access:  Anyone
 *     Click Deploy, then Authorize access and allow it.
 *  5. Copy the Web app URL it gives you (ends in /exec).
 *  6. Open the workbook, press "Connect to the team Sheet", paste the URL.
 *     Send that same link to the team and they each paste it once.
 *
 * Treat the URL like a key: anyone who has it can write to the Sheet.
 * Share it in WhatsApp or email, never in the public repo.
 * If it ever leaks: Deploy → Manage deployments → Archive, then deploy
 * again for a fresh URL.
 * ────────────────────────────────────────────────────────────────────── */

var TABS = ['content', 'schools', 'events', 'leads'];

/* Human-readable columns, so the Sheet is worth opening on its own. The
   app itself round-trips through the _json column, which is the truth. */
var COLUMNS = {
  content: ['id', 'date', 'time', 'channel', 'format', 'title', 'caption', 'hashtags',
            'cta', 'asset', 'engine', 'owner', 'status', 'approvedBy', 'approvedAt',
            'notes', 'postedUrl', 'results', 'updatedBy', 'updatedAt'],
  schools: ['id', 'name', 'type', 'province', 'city', 'website', 'learners', 'contact',
            'role', 'email', 'phone', 'lastVisit', 'visitType', 'visitedBy', 'stage',
            'fee', 'followUp', 'followOwner', 'followDue', 'followDone', 'notes',
            'updatedBy', 'updatedAt'],
  events:  ['id', 'name', 'type', 'audience', 'startDate', 'endDate', 'venue', 'city',
            'province', 'contact', 'status', 'decidedBy', 'decidedAt', 'team', 'cost',
            'motivation', 'nextAction', 'expected', 'actual', 'conversations',
            'outcome', 'notes', 'worked', 'didnt', 'updatedBy', 'updatedAt'],
  leads:   ['id', 'name', 'org', 'role', 'type', 'email', 'phone', 'eventId', 'interest',
            'want', 'owner', 'followDue', 'follow', 'outcome', 'value', 'notes',
            'updatedBy', 'updatedAt']
};

function doGet(e) {
  return respond(withLock(function () {
    return { ok: true, state: readAll() };
  }));
}

function doPost(e) {
  return respond(withLock(function () {
    var body = {};
    try { body = JSON.parse(e.postData.contents); } catch (err) {
      return { ok: false, error: 'Body was not valid JSON.' };
    }
    /* Merge rather than overwrite: two people saving at once must not wipe
       each other's work, so only the records that actually changed move. */
    TABS.forEach(function (tab) {
      var ups = (body.upserts && body.upserts[tab]) || [];
      var dels = (body.deletes && body.deletes[tab]) || [];
      if (ups.length || dels.length) applyChanges(tab, ups, dels);
    });
    return { ok: true, state: readAll() };
  }));
}

/* One writer at a time. Anyone else waits their turn rather than clobbering. */
function withLock(fn) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(25000);
  } catch (err) {
    return { ok: false, error: 'The Sheet was busy. Try again in a moment.' };
  }
  try {
    return fn();
  } catch (err) {
    return { ok: false, error: String(err) };
  } finally {
    lock.releaseLock();
  }
}

function respond(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function sheetFor(tab) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(tab);
  if (!sh) {
    sh = ss.insertSheet(tab);
    sh.appendRow(COLUMNS[tab].concat(['_json']));
    sh.setFrozenRows(1);
  }
  if (sh.getLastRow() === 0) {
    sh.appendRow(COLUMNS[tab].concat(['_json']));
    sh.setFrozenRows(1);
  }
  return sh;
}

function readAll() {
  var state = { v: 1, kind: 'bridgeapp_team_workbooks' };
  var newest = '';
  var newestBy = '';
  TABS.forEach(function (tab) {
    var rows = readTab(tab);
    state[tab] = rows;
    rows.forEach(function (r) {
      if (r.updatedAt && r.updatedAt > newest) { newest = r.updatedAt; newestBy = r.updatedBy || ''; }
    });
  });
  state.updatedAt = newest || null;
  state.updatedBy = newestBy || null;
  return state;
}

function readTab(tab) {
  var sh = sheetFor(tab);
  var last = sh.getLastRow();
  if (last < 2) return [];
  var jsonCol = COLUMNS[tab].length + 1;
  var values = sh.getRange(2, jsonCol, last - 1, 1).getValues();
  var out = [];
  values.forEach(function (row) {
    var raw = row[0];
    if (!raw) return;
    try { out.push(JSON.parse(raw)); } catch (err) { /* skip a corrupt row rather than fail the whole read */ }
  });
  return out;
}

function applyChanges(tab, upserts, deletes) {
  var sh = sheetFor(tab);
  var cols = COLUMNS[tab];
  var jsonCol = cols.length + 1;
  var last = sh.getLastRow();

  var index = {};
  if (last >= 2) {
    var ids = sh.getRange(2, 1, last - 1, 1).getValues();
    for (var i = 0; i < ids.length; i++) {
      if (ids[i][0]) index[String(ids[i][0])] = i + 2;
    }
  }

  /* Deletes go bottom-up so the row numbers above stay valid. */
  var rowsToDelete = [];
  deletes.forEach(function (id) {
    var row = index[String(id)];
    if (row) rowsToDelete.push(row);
  });
  rowsToDelete.sort(function (a, b) { return b - a; });
  rowsToDelete.forEach(function (row) { sh.deleteRow(row); });
  if (rowsToDelete.length) {
    index = {};
    last = sh.getLastRow();
    if (last >= 2) {
      var ids2 = sh.getRange(2, 1, last - 1, 1).getValues();
      for (var j = 0; j < ids2.length; j++) {
        if (ids2[j][0]) index[String(ids2[j][0])] = j + 2;
      }
    }
  }

  var appends = [];
  upserts.forEach(function (rec) {
    if (!rec || !rec.id) return;
    var row = cols.map(function (c) {
      var v = rec[c];
      if (v === undefined || v === null) return '';
      if (typeof v === 'boolean') return v ? 'Yes' : 'No';
      return v;
    });
    row.push(JSON.stringify(rec));
    var at = index[String(rec.id)];
    if (at) sh.getRange(at, 1, 1, row.length).setValues([row]);
    else appends.push(row);
  });
  if (appends.length) {
    sh.getRange(sh.getLastRow() + 1, 1, appends.length, appends[0].length).setValues(appends);
  }
}
