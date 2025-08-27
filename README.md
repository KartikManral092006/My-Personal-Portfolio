# 🌟 Personal Portfolio - Kartik Manral

A modern, responsive personal portfolio website built with React, Vite, and TailwindCSS, featuring an animated starfield background and smooth user interactions.

## 🚀 Features

- **Modern Design**: Clean and professional interface with cosmic theme
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between dark and light modes with persistent storage
- **Animated Background**: Dynamic starfield with shooting meteors
- **Smooth Navigation**: Responsive navigation bar with mobile menu
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Accessible**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: TailwindCSS 4.1.12
- **Routing**: React Router DOM 7.8.2
- **Icons**: Lucide React 0.542.0
- **UI Components**: Radix UI
- **Utilities**: Class Variance Authority, clsx, tailwind-merge
- **Linting**: ESLint 9.33.0

## 📁 Project Structure

```
Personal-Portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx      # Main landing section
│   │   ├── NavigationBar.jsx    # Responsive navigation
│   │   ├── StarBackGround.jsx   # Animated starfield
│   │   └── themeToggle.jsx      # Dark/light theme switcher
│   ├── pages/
│   │   ├── Home.jsx            # Main home page
│   │   └── NotFound.jsx        # 404 error page
│   ├── lib/
│   │   └── utils.js            # Utility functions
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx                 # Main app component
│   ├── index.css              # Global styles
│   └── main.jsx               # App entry point
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KartikManral092006/My-Personal-Portfolio.git
   cd Personal-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Customization

### Personal Information
Update the personal information in `src/components/HeroSection.jsx`:
```jsx
<span className="text-primary opacity-0 animate-fade-in-delay-1">Your Name</span>
<span className="text-gradient opacity-0 ml-2 animate-fade-in-delay-2">Your Title</span>
```

### Navigation Menu
Modify the navigation items in `src/components/NavigationBar.jsx`:
```jsx
const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]
```

### Theme Colors
Customize colors and styling in your TailwindCSS configuration and `src/index.css`

## 🌟 Features in Detail

### Animated Star Background
- Dynamically generated stars based on screen size
- Smooth pulsing animations
- Shooting meteor effects
- Responsive to window resize

### Theme Toggle
- Persistent theme storage in localStorage
- Smooth transitions between themes
- System preference detection

### Responsive Navigation
- Collapsible mobile menu
- Smooth scroll effects
- Background blur on scroll

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Build the project
2. Push the `dist` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Deploy to Vercel/Netlify
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

**Kartik Manral**
*Aspiring Software Developer*

- 🎓 Bachelor of Technology in Computer Science and Engineering
- 🏫 Graphic Era Hill University
- 🌟 Passionate about web development and modern technologies

## 📞 Contact

Feel free to reach out if you have any questions or suggestions!

---

⭐ **If you found this project helpful, please give it a star!** ⭐
