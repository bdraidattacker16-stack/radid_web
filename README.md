# radid.cyou — Official Website & Instagram Explorer

A clean, modern, responsive website published live on **[radid.cyou](https://radid.cyou)** with HTTPS SSL enabled.

---

## 📁 Project Structure

```text
radid_web/
├── assets/
│   └── favicon.svg       # Glowing SVG Brand Favicon
├── .gitignore            # Git ignore configuration
├── CNAME                 # Custom domain configuration for GitHub Pages (radid.cyou)
├── index.html            # Main production landing page & real Instagram profile viewer
├── package.json          # Node.js project configuration & local server scripts
├── radid_web.html        # Synchronized backup copy
└── README.md             # Project documentation and guide
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser
Simply double-click [`index.html`](file:///f:/AndroidDev/Projects/radid_web/index.html) to open it directly in Chrome, Edge, Safari, or Firefox.

### Option 2: Local Dev Server (Node.js)
Open PowerShell / Terminal inside `radid_web`:
```powershell
# Start local preview server on http://localhost:3000
npm start
```

---

## 🌐 Live Deployment & SSL Status

- **Live URL**: [https://radid.cyou](https://radid.cyou)
- **Subdomain**: [https://www.radid.cyou](https://www.radid.cyou) (Auto 301 redirects to apex)
- **SSL**: Let's Encrypt TLS Certificate active and enforced
- **Hosting**: GitHub Pages (`main` branch root `/`)

---

## ✨ Features
- **Modern Glassmorphic Dark UI**: Ambient canvas animations and glowing neon effects.
- **Real Instagram Explorer**: RapidAPI Scraper integration directly loading real user profiles, photos, and Reels `.mp4` video playback with sound inside custom modal lightbox.
- **Privacy & Security**: `<meta name="referrer" content="no-referrer">` configured to avoid CDN 403 blocks.
- **Clean Initial State**: No dummy/example accounts preloaded on page open.
