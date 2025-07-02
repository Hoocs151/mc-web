# 🎮 YourServer - Professional Minecraft Server Website Template

[![English](https://img.shields.io/badge/Language-English-blue.svg)](#english) [![Vietnamese](https://img.shields.io/badge/Ngôn%20ngữ-Tiếng%20Việt-red.svg)](#vietnamese)

A modern, responsive website template built with React, TypeScript, and cutting-edge web technologies for Minecraft server communities.

*Một template website hiện đại, responsive được xây dựng bằng React, TypeScript và các công nghệ web tiên tiến cho cộng đồng Minecraft server.*

**Authors | Tác giả**: [@Hoocs151](https://github.com/Hoocs151/) & ChatGPT 🤖✨  
**Repository | Mã nguồn**: [https://github.com/Hoocs151/mc-web](https://github.com/Hoocs151/mc-web)  
**Live Demo**: [https://mc-web-blush.vercel.app](https://mc-web-blush.vercel.app)

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg)
![Emotion](https://img.shields.io/badge/Emotion-CSS--in--JS-hotpink.svg)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-ff6584.svg)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black.svg)
![AI](https://img.shields.io/badge/Powered%20by-AI%20%F0%9F%A4%96-brightgreen.svg)

## 🚀 Quick Start | Bắt đầu nhanh

```bash
# Clone the repository | Sao chép repository
git clone https://github.com/Hoocs151/mc-web.git
cd mc-web

# Install dependencies | Cài đặt dependencies
npm install

# Start development server | Chạy server phát triển
npm run dev

# Build for production | Build cho production
npm run build
```

---

## English

### 📸 Live Demo & Screenshots

🔗 **Live Demo**: [https://mc-web-blush.vercel.app](https://mc-web-blush.vercel.app)  
📁 **Source Code**: [https://github.com/Hoocs151/mc-web](https://github.com/Hoocs151/mc-web)

### ✨ Features

#### 🎨 **Modern Design**
- Clean, professional UI with Minecraft-themed aesthetics
- Responsive design that works seamlessly across all devices
- Dark theme with purple accents matching gaming aesthetics
- Smooth animations and micro-interactions using Framer Motion

#### 🚀 **Performance Optimized**
- Built with Vite for lightning-fast development and builds
- Code splitting and lazy loading for optimal performance
- SEO optimized with react-helmet-async
- Efficient state management with React Query

#### 🎯 **User Experience**
- Intuitive navigation with smooth scrolling
- Real-time server statistics display
- Interactive voting system
- Professional loading screens and error boundaries
- Accessibility-focused design (WCAG compliant)

#### 📱 **Core Features**
- **Server Information**: Display server IP, version, and key features
- **Rules System**: Expandable rules cards with categorization
- **Voting Integration**: Links to popular server listing sites
- **Image Gallery**: Showcase server builds and screenshots
- **Social Media Integration**: Discord, Twitter, YouTube links
- **Mobile Responsive**: Perfect on all screen sizes

### 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Emotion (CSS-in-JS) for component-scoped styles
- **Animations**: Framer Motion for smooth, performant animations
- **State Management**: React Query for server state
- **Icons**: React Icons for consistent iconography
- **Build Tool**: Vite for fast development and optimized builds
- **Font**: Custom Minecraft font with Roboto fallback
- **Deployment**: Optimized for Vercel/Netlify deployment

### 📁 Project Structure

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
│       ├── Gallery/     # Image gallery
│       ├── Navigation/  # Navigation component
│       ├── Footer/      # Footer component
│       └── LazyImage/   # Optimized image loading
├── contexts/            # React contexts (Theme, Toast)
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── constants/           # App constants
├── animations/          # Animation definitions
└── app.css             # Global styles
```

### 🚀 Getting Started

#### Prerequisites
- Node.js 18.0.0 or higher
- npm 8.0.0 or higher
- Git

#### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hoocs151/mc-web.git
   cd mc-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Your site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

#### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run lint:fix` - Auto-fix ESLint errors
- `npm run type-check` - Run TypeScript type checking

### ⚙️ Configuration

#### Server Configuration
Update `src/constants/index.ts`:

```typescript
export const SERVER = {
  IP: 'your-server.com',
  VERSION: '1.20+',
  NAME: 'Your Server Name',
  DESCRIPTION: 'Your server description',
  MAX_PLAYERS: 100,
};
```

#### Voting Sites Configuration
```typescript
export const VOTING = {
  SITES: [
    { name: 'MinecraftServers.org', url: 'https://minecraftservers.org/vote/123456' },
    { name: 'Planet Minecraft', url: 'https://planetminecraft.com/server/yourserver' },
    // Add more voting sites
  ]
};
```

#### Theme Customization
Modify `src/contexts/ThemeContext.tsx`:

```typescript
const theme = {
  colors: {
    primary: '#6B0197',    // Your brand color
    secondary: '#2D0157',  // Secondary color
    accent: '#9D4EDD',     // Accent color
    // ... customize other colors
  }
};
```

### 🎨 Customization Guide

#### Adding Your Server Images
1. Place your images in `public/images/`
2. Update gallery images in `src/components/shared/Gallery.tsx`
3. Replace logo in `public/images/logo.png`

#### Social Links
Update `src/components/shared/Footer.tsx`:

```typescript
const socialLinks = [
  { icon: <FaDiscord />, url: 'https://discord.gg/yourserver', label: 'Discord' },
  { icon: <FaTwitter />, url: 'https://twitter.com/yourserver', label: 'Twitter' },
  { icon: <FaYoutube />, url: 'https://youtube.com/yourserver', label: 'YouTube' },
];
```

### 📦 Deployment

#### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and import your repository
3. Vercel will automatically detect Vite and deploy

#### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to [netlify.com/drop](https://netlify.com/drop)

#### Deploy to GitHub Pages
```bash
npm run build
# Deploy the dist folder to your gh-pages branch
```

### 🤝 Contributing

1. Fork the repository: [https://github.com/Hoocs151/mc-web](https://github.com/Hoocs151/mc-web)
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Vietnamese

### 📸 Demo Trực Tiếp & Ảnh Chụp Màn Hình

🔗 **Demo Trực Tiếp**: [https://mc-web-blush.vercel.app](https://mc-web-blush.vercel.app)  
📁 **Mã Nguồn**: [https://github.com/Hoocs151/mc-web](https://github.com/Hoocs151/mc-web)

### ✨ Tính Năng

#### 🎨 **Thiết Kế Hiện Đại**
- Giao diện chuyên nghiệp, sạch sẽ với phong cách Minecraft
- Thiết kế responsive hoạt động mượt mà trên mọi thiết bị
- Chủ đề tối với điểm nhấn màu tím phù hợp với game
- Hiệu ứng mượt mà và micro-interactions sử dụng Framer Motion

#### 🚀 **Tối Ưu Hiệu Suất**
- Xây dựng với Vite cho phát triển và build siêu nhanh
- Code splitting và lazy loading để tối ưu hiệu suất
- SEO được tối ưu với react-helmet-async
- Quản lý state hiệu quả với React Query

#### 🎯 **Trải Nghiệm Người Dùng**
- Navigation trực quan với cuộn mượt
- Hiển thị thống kê server theo thời gian thực
- Hệ thống vote tương tác
- Màn hình loading chuyên nghiệp và error boundaries
- Thiết kế tập trung vào accessibility (tuân thủ WCAG)

#### 📱 **Tính Năng Cốt Lõi**
- **Thông Tin Server**: Hiển thị IP server, phiên bản và tính năng chính
- **Hệ Thống Luật**: Cards luật có thể mở rộng với phân loại
- **Tích Hợp Vote**: Liên kết đến các trang listing server phổ biến
- **Gallery Hình Ảnh**: Trưng bày các công trình và ảnh chụp server
- **Tích Hợp Mạng Xã Hội**: Liên kết Discord, Twitter, YouTube
- **Responsive Mobile**: Hoàn hảo trên mọi kích thước màn hình

### 🛠️ Công Nghệ Sử Dụng

- **Frontend**: React 18 với TypeScript
- **Styling**: Emotion (CSS-in-JS) cho styles phạm vi component
- **Animations**: Framer Motion cho hiệu ứng mượt mà, hiệu suất cao
- **Quản Lý State**: React Query cho server state
- **Icons**: React Icons cho iconography nhất quán
- **Build Tool**: Vite cho phát triển nhanh và builds được tối ưu
- **Font**: Font Minecraft tùy chỉnh với Roboto fallback
- **Deployment**: Tối ưu cho deploy Vercel/Netlify

### 📁 Cấu Trúc Dự Án

```
src/
├── components/           # Các UI component có thể tái sử dụng
│   ├── ErrorBoundary/   # Wrapper xử lý lỗi
│   ├── Hero/            # Phần landing
│   ├── LoadingSpinner/  # Trạng thái loading
│   ├── Rules/           # Hiển thị luật server
│   ├── ServerInfo/      # Thông tin server
│   ├── Toast/           # Hệ thống thông báo
│   ├── Voting/          # Tích hợp voting
│   └── shared/          # Components chia sẻ
│       ├── Gallery/     # Gallery hình ảnh
│       ├── Navigation/  # Component navigation
│       ├── Footer/      # Component footer
│       └── LazyImage/   # Loading hình ảnh tối ưu
├── contexts/            # React contexts (Theme, Toast)
├── hooks/               # Custom React hooks
├── types/               # Định nghĩa TypeScript types
├── utils/               # Các hàm tiện ích
├── constants/           # Hằng số ứng dụng
├── animations/          # Định nghĩa animations
└── app.css             # Styles toàn cục
```

### 🚀 Bắt Đầu

#### Yêu Cầu Hệ Thống
- Node.js 18.0.0 trở lên
- npm 8.0.0 trở lên
- Git

#### Các Bước Cài Đặt

1. **Clone repository**
   ```bash
   git clone https://github.com/Hoocs151/mc-web.git
   cd mc-web
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   ```

3. **Khởi động server phát triển**
   ```bash
   npm run dev
   ```
   Website sẽ có sẵn tại `http://localhost:5173`

4. **Build cho production**
   ```bash
   npm run build
   ```

#### Các Scripts Có Sẵn

- `npm run dev` - Khởi động server phát triển với hot reload
- `npm run build` - Build bundle production được tối ưu
- `npm run preview` - Xem trước build production locally
- `npm run lint` - Chạy ESLint để kiểm tra chất lượng code
- `npm run lint:fix` - Tự động sửa lỗi ESLint
- `npm run type-check` - Chạy TypeScript type checking

### ⚙️ Cấu Hình

#### Cấu Hình Server
Cập nhật `src/constants/index.ts`:

```typescript
export const SERVER = {
  IP: 'your-server.com',
  VERSION: '1.20+',
  NAME: 'Tên Server Của Bạn',
  DESCRIPTION: 'Mô tả server của bạn',
  MAX_PLAYERS: 100,
};
```

#### Cấu Hình Voting Sites
```typescript
export const VOTING = {
  SITES: [
    { name: 'MinecraftServers.org', url: 'https://minecraftservers.org/vote/123456' },
    { name: 'Planet Minecraft', url: 'https://planetminecraft.com/server/yourserver' },
    // Thêm các voting sites khác
  ]
};
```

#### Tùy Chỉnh Theme
Chỉnh sửa `src/contexts/ThemeContext.tsx`:

```typescript
const theme = {
  colors: {
    primary: '#6B0197',    // Màu thương hiệu của bạn
    secondary: '#2D0157',  // Màu phụ
    accent: '#9D4EDD',     // Màu nhấn
    // ... tùy chỉnh các màu khác
  }
};
```

### 🎨 Hướng Dẫn Tùy Chỉnh

#### Thêm Hình Ảnh Server
1. Đặt hình ảnh vào `public/images/`
2. Cập nhật gallery images trong `src/components/shared/Gallery.tsx`
3. Thay thế logo trong `public/images/logo.png`

#### Links Mạng Xã Hội
Cập nhật `src/components/shared/Footer.tsx`:

```typescript
const socialLinks = [
  { icon: <FaDiscord />, url: 'https://discord.gg/yourserver', label: 'Discord' },
  { icon: <FaTwitter />, url: 'https://twitter.com/yourserver', label: 'Twitter' },
  { icon: <FaYoutube />, url: 'https://youtube.com/yourserver', label: 'YouTube' },
];
```

### 📦 Triển Khai

#### Deploy lên Vercel (Khuyến nghị)
1. Push code lên GitHub
2. Truy cập [vercel.com](https://vercel.com) và import repository
3. Vercel sẽ tự động phát hiện Vite và deploy

#### Deploy lên Netlify
1. Build project: `npm run build`
2. Kéo thả thư mục `dist` vào [netlify.com/drop](https://netlify.com/drop)

#### Deploy lên GitHub Pages
```bash
npm run build
# Deploy thư mục dist lên gh-pages branch
```

### 🤝 Đóng Góp

1. Fork repository: [https://github.com/Hoocs151/mc-web](https://github.com/Hoocs151/mc-web)
2. Tạo feature branch (`git checkout -b feature/tinh-nang-tuyet-voi`)
3. Commit thay đổi (`git commit -m 'Thêm tính năng tuyệt vời'`)
4. Push lên branch (`git push origin feature/tinh-nang-tuyet-voi`)
5. Mở Pull Request

### 📄 Giấy Phép

Dự án này được cấp phép theo giấy phép MIT - xem file [LICENSE](LICENSE) để biết chi tiết.

### 🙏 Ghi Nhận

- **Minecraft** cho nguồn cảm hứng
- **React Team** cho framework tuyệt vời
- **Framer Motion** cho animations đẹp mắt
- **Emotion** cho CSS-in-JS mạnh mẽ
- **[@Hoocs151](https://github.com/Hoocs151/)** cho việc phát triển template này
- **ChatGPT** 🤖 - Người bạn siêu thân hỗ trợ nốt 99% mã nguồn 