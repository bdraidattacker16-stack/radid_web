# Project Rules: radid_web

## Bangla Typography & Numerals Standard
- **Never use `Hind Siliguri`**: In `Hind Siliguri`, the Bengali digit `১` (one, U+09E7) renders like Hindi (`१`). Native Bengali readers strictly reject this.
- **Always use `Noto Sans Bengali`**:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  ```
  ```css
  font-family: 'Noto Sans Bengali', 'SolaimanLipi', 'Kalpurush', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  ```
- **Numerals**: Always use standard Bengali Unicode digits (০, ১, ২, ৩, ৪, ৫, ৬, ৭, ৮, ৯; U+09E6–U+09EF). Never use Hindi/Devanagari numerals.
