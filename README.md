# 🎮 YourServer - Professional Minecraft Server Website Template

A modern, responsive website template built with React, TypeScript, and cutting-edge web technologies for Minecraft server communities.

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg)
![Emotion](https://img.shields.io/badge/Emotion-CSS--in--JS-hotpink.svg)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-ff6584.svg)

## ✨ Features

### 🎨 **Modern Design**
- Clean, professional UI with Minecraft-themed aesthetics
- Responsive design that works seamlessly across all devices
- Dark theme with purple accents matching gaming aesthetics
- Smooth animations and micro-interactions using Framer Motion

### 🚀 **Performance Optimized**
- Built with Vite for lightning-fast development and builds
- Code splitting and lazy loading for optimal performance
- SEO optimized with react-helmet-async
- Efficient state management with React Query

### 🎯 **User Experience**
- Intuitive navigation with smooth scrolling
- Real-time player count display
- Interactive voting system
- Professional loading screens and error boundaries
- Accessibility-focused design

### 📱 **Features**
- **Server Information**: Display server IP, version, and key features
- **Rules System**: Expandable rules cards with categorization
- **Voting Integration**: Links to popular server listing sites
- **Player Count**: Real-time server statistics
- **Social Links**: Discord, Twitter, YouTube integration

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Emotion (CSS-in-JS) for component-scoped styles
- **Animations**: Framer Motion for smooth, performant animations
- **State Management**: React Query for server state
- **Icons**: React Icons for consistent iconography
- **Build Tool**: Vite for fast development and optimized builds
- **Font**: Custom Minecraft font with Roboto fallback

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ErrorBoundary/   # Error handling wrapper
│   ├── Hero/            # Landing section
│   ├── LoadingSpinner/  # Loading states
│   ├── Rules/           # Server rules display
│   ├── ServerInfo/      # Server information
│   ├── Toast/           # Notification system
│   ├── Voting/          # Voting integration
│   └── shared/          # Shared components
├── contexts/            # React contexts (Theme, Toast)
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── constants/           # App constants
├── animations/          # Animation definitions
└── app.css             # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/minecraft-server-template.git
   cd minecraft-server-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking

## ⚙️ Configuration

### Server Configuration
Update `src/constants/index.ts` to configure your server details:

```typescript
export const SERVER = {
  IP: 'your-server.com',
  VERSION: '1.20+',
  NAME: 'Your Server Name',
};
```

### Voting Sites
Add your voting sites in the same constants file:

```typescript
export const VOTING = {
  SITES: [
    { name: 'Site Name', url: 'voting-url' },
    // Add more voting sites
  ]
};
```

### Theme Customization
Modify the theme in `src/contexts/ThemeContext.tsx`:

```typescript
const theme = {
  colors: {
    primary: '#6B0197',    // Your primary color
    secondary: '#2D0157',  // Your secondary color
    // ... other colors
  }
};
```

### Social Links
Update social media links in `src/components/shared/Footer.tsx`:

```typescript
const socialLinks = [
  { icon: <FaDiscord />, url: 'https://discord.gg/yourserver', label: 'Discord' },
  { icon: <FaTwitter />, url: 'https://twitter.com/yourserver', label: 'Twitter' },
  // Add more social links
];
```

## 🎨 Design Principles

- **Consistent**: Unified design language throughout
- **Accessible**: WCAG compliant with proper ARIA labels
- **Responsive**: Mobile-first design approach
- **Performance**: Optimized for fast loading and smooth interactions
- **Maintainable**: Clean code structure with TypeScript safety

## 📦 Build & Deployment

The project is built using Vite and generates optimized static files:

```bash
npm run build
```

Deploy the `dist` folder to any static hosting service:
- **Vercel**: Perfect for React applications
- **Netlify**: Easy continuous deployment
- **GitHub Pages**: Free hosting for open source
- **Firebase Hosting**: Google's hosting solution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Minecraft** for the inspiration
- **React Team** for the amazing framework
- **Framer Motion** for beautiful animations
- **Emotion** for powerful CSS-in-JS

---

<div align="center">
  <strong>Built with ❤️ for the Minecraft community</strong>
</div> 