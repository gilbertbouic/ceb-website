# CEB Rodrigues Field — marketing site

Product page for **CEB Rodrigues Field**.

- **Live preview:** https://gilbertbouic.github.io/ceb-website/
- **Custom domain (after DNS):** https://ceb.mkweli.tech

## Hostinger DNS (required)

Domains → mkweli.tech → DNS — add:

| Type  | Name | Value                   | TTL  |
|-------|------|-------------------------|------|
| CNAME | `ceb`| `gilbertbouic.github.io`| 3600 |

Same pattern as `aml` and `lakazagri`.

After DNS propagates, GitHub Pages will issue HTTPS for `ceb.mkweli.tech` (repo already has `CNAME` file).

## Stack

Static HTML/CSS/JS on GitHub Pages.
