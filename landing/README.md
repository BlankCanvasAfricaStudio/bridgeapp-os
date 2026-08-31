# UniApply parent landing page

`uniapply-parents.html` is the campaign landing page for Matric parents. It is a
single self-contained file: the hero photograph is embedded, and the only thing
it fetches from the network is the Google Fonts stylesheet. Open it in a browser
and it works.

## Deploying it

Serve it at a real URL on the BridgeApp domain, for example
`bridgeapp.co.za/uniapply-parents`. It has no build step and no dependencies.

**It cannot be measured until it is deployed.** The page currently lives as a
Claude artifact for review, and artifacts block external scripts, so GA4 cannot
run there. Once it is on your own domain:

1. Paste the GA4 tag into `<head>`, from Admin, Data streams, Web, View tag
   instructions. It is the same measurement ID as the main site, because it is
   the same property.
2. Point campaign links at it using the UTM convention in the link builder sheet.

## What still needs wiring

**Lead capture.** The readiness tracker collects a name, email address and
WhatsApp number. Right now it posts nowhere. Set `window.BRIDGEAPP_LEAD_ENDPOINT`
to your `POST /api/leads` URL and the form starts writing real leads. Until then
the page says so on screen rather than pretending to have saved something.

**Payment tracking.** Nothing on this page can report a sale until the GA4
purchase event is firing from the Peach callback. That work is specified
separately in the analytics instrumentation brief.

## Editing it

The whole page is one file: styles in a `<style>` block at the top, markup in the
middle, behaviour in a `<script>` at the bottom. Design tokens are the `:root`
custom properties at the very top, so colours and spacing change in one place.

The palette follows bridgeapp.co.za rather than the editorial design system in
`design-system/`. Those two disagree: the site runs a cool grey ground with
`#2196F3`, the design system specifies cream with `#4A90D9`. That conflict is
open and needs a decision before either is treated as canonical.
