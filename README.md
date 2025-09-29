# That's Amore Catering Website

A professional catering website for That's Amore Pizza, featuring both Express.js (EJS) and Next.js (React) versions.

## 🏗️ Project Structure

This project contains both versions of the website:

- **Express.js Version**: Traditional server-side rendering with EJS templates
- **Next.js Version**: Modern React-based website with server-side rendering

## 🚀 Running the Express.js Version

The Express.js version runs on port 3001 and serves the EJS templates.

```bash
# Install dependencies
npm install

# Start the Express server
npm start

# Or run in development mode with auto-reload
npm run dev
```

Visit `http://localhost:3001` to see the Express.js version.

## ⚡ Running the Next.js Version

The Next.js version provides a modern React-based experience.

```bash
# Install dependencies (already done)
npm install

# Start Next.js development server
npm run next:dev

# Build for production
npm run next:build

# Start production server
npm run next:start
```

Visit `http://localhost:3000` to see the Next.js version.

## 📁 File Structure

```
catering-website/
├── app/                          # Next.js app directory
│   ├── components/               # React components
│   │   ├── HeroSection.js
│   │   ├── CateringServices.js
│   │   ├── CateringMenu.js
│   │   ├── CateringForm.js
│   │   ├── CallToAction.js
│   │   └── FloatingContact.js
│   ├── globals.css               # Global styles with Tailwind
│   ├── layout.js                 # Root layout component
│   └── page.js                   # Main page component
├── views/                        # EJS templates (Express version)
│   ├── catering-home.ejs         # Main catering homepage
│   └── catering-layout.ejs       # Layout template
├── public/                       # Static assets
│   ├── css/
│   ├── images/
│   ├── js/
│   ├── videos/
│   └── Logo/
├── catering-server.js            # Express.js server
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
└── package.json                  # Dependencies and scripts
```

## 🎨 Features

### Express.js Version
- Server-side rendering with EJS templates
- Traditional Express.js routing
- Static file serving
- Form handling (ready for backend integration)

### Next.js Version
- Modern React components
- Server-side rendering
- Optimized performance
- Responsive design with Tailwind CSS
- Interactive form handling
- Component-based architecture

## 🎯 Key Sections

1. **Hero Section** - Professional catering introduction with video background
2. **Catering Services** - Corporate events, private parties, special occasions
3. **Catering Menu** - Complete menu with pricing for all items
4. **Catering Form** - Interactive quote request form
5. **Call to Action** - Contact information and next steps
6. **Floating Contact** - Always-visible contact button

## 🛠️ Technologies Used

- **Express.js Version**: Node.js, Express, EJS, Tailwind CSS
- **Next.js Version**: React 19, Next.js 15, Tailwind CSS, PostCSS
- **Styling**: Tailwind CSS with custom color scheme
- **Fonts**: Playfair Display (headings), Inter (body text)

## 🔧 Customization

### Colors
The website uses a custom color scheme defined in `tailwind.config.js`:
- Primary: Maroon (#8B0000)
- Secondary: Cream (#F5F5DC)
- Accent: Goldenrod (#DAA520)

### Fonts
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

## 📱 Responsive Design

Both versions are fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop computers
- Large screens

## 🚀 Deployment

### Express.js Version
Can be deployed to any Node.js hosting platform (Heroku, DigitalOcean, etc.)

### Next.js Version
Can be deployed to Vercel, Netlify, or any platform supporting Next.js.

## 📞 Contact

For questions about the website or catering services, contact That's Amore Pizza:
- Phone: (504) 473-5384
- Website: [thatsamorepizzametairie.com](https://www.thatsamorepizzametairie.com)

## 📄 License

MIT License - see LICENSE file for details.
