# Blackbeard Software - Static Website

A modern, minimalistic, dark-themed static website for Blackbeard Software - professional remote software support services.

## 🚀 Features

- **Modern Design**: Dark premium theme with brand color accents
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Static Site**: No backend required, works on any static hosting
- **GitHub Pages Ready**: Deploy directly to GitHub Pages
- **Clean Code**: Semantic HTML, CSS custom properties, vanilla JavaScript
- **Accessible**: ARIA labels, keyboard navigation, proper focus states
- **Fast Loading**: No external dependencies except Google Fonts
- **Easy to Customize**: Well-commented code with clear editing instructions

## 📁 Project Structure

```
/blackbeard-site
├── index.html          # Main landing page
├── privacy.html        # Privacy policy page
├── terms.html          # Terms of service page
├── style.css           # Main stylesheet
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── /assets
    ├── logo.png        # Company logo
    └── favicon.png     # Favicon
```

## 🌐 Deploy to GitHub Pages

### Method 1: Direct Upload

1. Create a new repository on GitHub (e.g., `blackbeard-software`)
2. Upload all files from this folder to the repository
3. Go to repository **Settings** → **Pages**
4. Under "Source", select **Deploy from a branch**
5. Select **main** branch and **/ (root)** folder
6. Click **Save**
7. Your site will be live at `https://yourusername.github.io/blackbeard-software/`

### Method 2: Using Git Command Line

```bash
# Initialize git repository
cd blackbeard-site
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Blackbeard Software website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/blackbeard-software.git

# Push to GitHub
git push -u origin main
```

Then enable GitHub Pages in repository settings as described above.

## ✏️ Customization Guide

### 📍 Contact Information

Edit the following in **index.html**, **privacy.html**, and **terms.html**:

#### WhatsApp Number
Search for: `573150999272`
Replace with your WhatsApp number (without + sign)

#### Email Address
Search for: `blackbeardsoftware.oficial@gmail.com`
Replace with your email address

#### Phone Number
Search for: `+57 315 0999272`
Replace with your phone number

#### Address
Search for: `Cra. 8g #159b-49, Bogotá, Colombia, 110131`
Replace with your address

### 🔗 Social Media Links

#### Facebook
Search for: `https://www.facebook.com/profile.php?id=61583653584163`
Replace with your Facebook page URL

#### Instagram
Search for: `https://www.instagram.com/blackbeard.oficial.co/`
Replace with your Instagram profile URL

### 🖼️ Logo and Favicon

1. Replace `assets/logo.png` with your logo (recommended size: 200x50px or similar)
2. Replace `assets/favicon.png` with your favicon (recommended size: 32x32px or 64x64px)

### 💰 Service Prices

Search for: `$30.000 COP` or `$30,000 COP`
Replace with your pricing

### 📝 Legal Content

Edit the text in **privacy.html** and **terms.html** to match your specific policies.

### 🛠️ Services List

In **index.html**, find the services section and modify:

1. **Adobe Suite** - Look for `data-category="adobe"`
2. **Autodesk** - Look for `data-category="autodesk"`
3. **SketchUp** - Look for `data-category="sketchup"`
4. **Graphisoft** - Look for `data-category="graphisoft"`

Each software item follows this pattern:

```html
<div class="software-item">
  <h4 class="software-name">Software Name</h4>
  <p class="software-desc">Short description here.</p>
  <div class="software-price">
    <svg>...</svg>
    $30.000 COP
  </div>
  <a href="https://wa.me/573150999272?text=Your%20Message" class="btn btn-whatsapp btn-sm">
    Solicitar por WhatsApp
  </a>
</div>
```

## 🎨 Brand Colors

The website uses these brand colors as accents (defined in CSS variables):

- **Electric Blue**: `#00D4FF`
- **Cyan**: `#00FFFF`
- **Magenta**: `#FF00FF`
- **Orange**: `#FF6B35`
- **Yellow**: `#FFD700`

To change colors, edit the CSS custom properties in **style.css**:

```css
:root {
  --electric-blue: #00D4FF;
  --cyan: #00FFFF;
  --magenta: #FF00FF;
  --orange: #FF6B35;
  --yellow: #FFD700;
  /* ... other variables ... */
}
```

## 📱 WhatsApp Message Format

WhatsApp links use this format:
```
https://wa.me/[PHONE_NUMBER]?text=[ENCODED_MESSAGE]
```

Example for Photoshop inquiry:
```
https://wa.me/573150999272?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Photoshop
```

To create new WhatsApp links:
1. Use `encodeURIComponent()` in JavaScript to encode your message
2. Or use an online URL encoder tool

## 🔧 Technical Details

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

### Dependencies
- **Google Fonts**: Inter font family (loaded via CDN)
- No JavaScript frameworks
- No CSS preprocessors
- No build tools required

### Performance Tips
1. Optimize images before uploading
2. Consider using WebP format for images
3. Enable Gzip compression on your server
4. Consider adding a caching policy

## 📄 License

This website template is created for Blackbeard Software. All rights reserved.

## 🆘 Support

For questions about:
- **Website code**: Check the comments in each file
- **GitHub Pages**: Visit [GitHub Pages Documentation](https://docs.github.com/en/pages)
- **HTML/CSS/JS**: Refer to [MDN Web Docs](https://developer.mozilla.org/)

---

**Built with ❤️ for Blackbeard Software**
