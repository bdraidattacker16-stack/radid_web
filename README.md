# radid.cyou — Official Welcome Website

A clean, modern, responsive single-page landing website configured for **[radid.cyou](https://radid.cyou)**.

---

## 📁 Project Structure

```
radid_web/
├── index.html        # Main landing page (HTML5, Tailwind CSS, dark/light theme, ambient canvas animation)
├── CNAME             # Domain definition for GitHub Pages / Cloudflare Pages
└── README.md         # Deployment & DNS setup guide
```

---

## 🚀 How to Preview Locally

Simply double-click `index.html` to open it in your web browser (Chrome, Edge, Firefox, Brave, etc.).

Alternatively, you can run a local test server:

```powershell
# Using Python
python -m http.server 8080

# Or using Node.js / npx
npx serve .
```
Then visit `http://localhost:8080` in your browser.

---

## 🌐 Connecting Your Domain (`radid.cyou`)

Since you already purchased the domain **`radid.cyou`**, here are the easiest ways to publish it for free with automatic SSL (HTTPS):

### Option 1: Cloudflare Pages (Recommended - 100% Free & Fast)
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages**.
2. Select **Upload Assets** and drag & drop the `radid_web` folder.
3. Once deployed, click **Custom Domains** > **Set up a domain**.
4. Enter `radid.cyou` and follow the 1-click DNS configuration.

---

### Option 2: Vercel (Super Fast Deployment)
1. Open PowerShell in `radid_web` directory.
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the CLI prompts. Once deployed, go to project settings on Vercel > **Domains** > Add `radid.cyou`.
4. Vercel will give you the DNS records (`A` record `76.76.21.21` or `CNAME`) to add at your domain registrar.

---

### Option 3: GitHub Pages (Free)
1. Create a GitHub repository named `radid_web`.
2. Push this folder to GitHub.
3. In GitHub repo **Settings** > **Pages**:
   - Source: Deploy from branch (`main` / root).
   - Custom domain: `radid.cyou`.
   - Check **Enforce HTTPS**.
4. At your domain registrar (where you bought `radid.cyou`):
   - Add **A Records** pointing `@` to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add a **CNAME Record** pointing `www` to your GitHub username (e.g. `yourname.github.io`).

---

## ✨ Features Included
- **Ultra-Modern Aesthetics**: Ambient neon glow blobs, glassmorphic cards, smooth typography.
- **Interactive Canvas**: Subtle floating particles responding to screen bounds.
- **Theme Switcher**: Dark mode (default) and Light mode toggle.
- **Lead Capture / Notification**: Interactive email notification form with toast confirmation.
- **Fast & Responsive**: Mobile-first responsive layout that looks great on any screen size.
