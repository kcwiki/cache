# Cache

KanColle gadget server cache.

This cache can be used to bypass the gadget server block:

- as a CDN (GitHub [pages](https://kcwiki.github.io/cache/gadget_html5/js/kcs_const.js)/Fastly) by the [DMM extension](https://github.com/kcwiki/chrome-extension-dmm)
- [Redirector extension](https://github.com/einaregilsson/Redirector) (by importing [`redirector.json`](https://github.com/kcwiki/cache/blob/master/redirector.json))
- [KC3Kai extension](https://github.com/KC3Kai/KC3Kai) (by enabling it as a gadget cache in settings)
- or locally as [Poi](https://github.com/poooi/poi) [third party cache](https://github.com/kcwiki/cache/releases) (automatically with master/[nightly](https://nightly.poi.moe/) version of Poi and [poi-plugin-let-me-in](https://github.com/kcwiki/poi-plugin-let-me-in)).

## Updating

Continuously run `update.js` under Japanese network.
