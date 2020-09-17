# Cache

KanColle gadget server cache.

It can be used to bypass the gadget server block, as a CDN (GitHub pages/Fastly) by the [DMM extension](https://github.com/kcwiki/chrome-extension-dmm), [Redirector extension](https://chrome.google.com/webstore/detail/redirector/ocgpenflpmgnfapjedencafcfakcekcd) (by importing [`redirector.json`](https://github.com/kcwiki/cache/blob/master/redirector.json)), or locally as [Poi](https://poi.moe/) [third party cache](https://github.com/kcwiki/cache/releases).

## Updating

- `sh fetch.sh` on a Japanese server or VPN, fetches URLs listed in [`urls`](https://github.com/kcwiki/cache/blob/master/urls).
  - `sh fetch.sh -` to only fetch `kcs_const.js`.
- `sh release.sh` to make `MyCache` release for Poi.
- `sh commit.sh` to commit.
