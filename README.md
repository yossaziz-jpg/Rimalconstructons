# Rimal Al-Ard Website Package

This version is designed to be easy to maintain.

## Quick edits

For most future changes, open:

`assets/js/config.js`

You can change:
- primary phone / WhatsApp number
- secondary phone
- both emails
- Facebook link
- head office
- branches
- commercial registration number
- company name and slogan
- sand-source names and descriptions

The website automatically updates those values wherever they appear.

## Replace photos

Open:

`assets/images/`

Replace an existing image with another image using the same filename.

Examples:
- `truck.jpeg`
- `stockyard.jpeg`
- `quarry-01.jpeg`
- `quarry-02.jpeg`
- `quarry-03.jpeg`
- `quarry-04.jpeg`
- `quarry-05.jpeg`
- `quarry-06.jpeg`
- `quarry-07.jpeg`
- `logo.jpeg`

## Change design

Open:

`assets/css/style.css`

Main colours are at the top of the file:

```css
:root {
  --navy:#071522;
  --gold:#c8973c;
}
```

## Change page text or sections

Open:

`index.html`

Arabic text is usually inside:
`<span data-lang="ar">...</span>`

English text is usually inside:
`<span data-lang="en">...</span>`

## Open the website

Double-click `index.html`.

## Upload to hosting

Upload the entire folder, not only `index.html`.

The folder structure must remain:

rimal_al_ard_website_package/
- index.html
- assets/
  - css/style.css
  - js/config.js
  - js/app.js
  - images/...

## Changes already made in this version

- Primary phone / WhatsApp changed to: 0941 335 624
- International telephone / WhatsApp link uses: +963 941 335 624
- Replaced “فليطة” with “المشرفة”
- English equivalent changed to “Al-Musharrafah”


## Netlify-ready version

This package now includes:
- `netlify.toml` with security and caching headers
- `robots.txt`
- `sitemap.xml`
- favicon files
- canonical URL and social-sharing metadata
- structured business data for search engines

### Upload to Netlify

1. Log in to Netlify.
2. Choose **Add new project** → **Deploy manually**.
3. Drag this entire unzipped folder into the deployment area.
4. Netlify will give you a temporary `.netlify.app` address.
5. Add your custom domain in Netlify's **Domain management** section.
6. Keep HTTPS enabled.

The SEO files currently use:

`https://rimalconstructions.com`

If your final domain is different, replace this URL in:
- `index.html`
- `robots.txt`
- `sitemap.xml`

### Security reminder

Never store passwords, private API keys, card details, or other secrets in `config.js`.
All files deployed as part of a static website are public.

For the Netlify account itself, enable two-factor authentication.


## Latest contact update
- WhatsApp: +963 944 606 618
- Main Contact Us email: rimalalard22@gmail.com
- Business email remains available: info@rimalconstructions.com
