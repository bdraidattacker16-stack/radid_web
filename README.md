# Deen Yeasin Radid — Official Profile Website (`radid.cyou`)

A fast, semantic, SEO-optimized personal profile website for **Deen Yeasin Radid (Frontend Developer)** published on **[https://radid.cyou](https://radid.cyou)**.

## Project Structure

```text
radid_web/
├── assets/
│   ├── apple-touch-icon.png   # 180x180 iOS touch icon
│   ├── favicon.svg            # Crisp SVG monogram favicon
│   ├── icon-512.png           # 512x512 PWA / manifest icon
│   └── og-image.png           # 1200x630 Open Graph & social preview card
├── 404.html                   # Custom not-found page with canonical redirect link
├── CNAME                      # GitHub Pages custom domain (radid.cyou)
├── index.html                 # Semantic HTML5 profile + JSON-LD structured data
├── package.json               # Local preview server & validation scripts
├── README.md                  # Documentation & Google Indexing checklist
├── robots.txt                 # Search crawler rules + sitemap pointer
├── script.js                  # Progressive enhancements (theme toggle, time, Telegram helper)
├── site.webmanifest           # Web app manifest
├── sitemap.xml                # XML sitemap for Google Search Console
└── styles.css                 # Responsive dark/light theme stylesheet
```

## Run Locally

```powershell
npm start
```
Then open `http://localhost:3000`.

## Google Search Indexing Checklist

1. **Push changes to GitHub** (`main` branch) so GitHub Pages serves the updated site at `https://radid.cyou/`.
2. **Verify domain ownership in Google Search Console** (`https://search.google.com/search-console`):
   - Add a **Domain** property (`radid.cyou`) via DNS TXT record, **or** add a **URL prefix** property (`https://radid.cyou/`) and paste the `google-site-verification` meta tag into `index.html`.
3. **Submit the sitemap**:
   - In Google Search Console → **Sitemaps**, submit `https://radid.cyou/sitemap.xml`.
4. **Request immediate indexing**:
   - Use **URL Inspection** on `https://radid.cyou/` and click **Request Indexing**.
5. **Strengthen entity recognition**:
   - Link `https://radid.cyou/` from your GitHub profile, LinkedIn, Telegram bio (`@radidy`), and any other public profiles so Google associates your name (**Deen Yeasin Radid**) directly with `radid.cyou`.
