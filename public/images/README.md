# 📸 Image Assets Guide

This directory contains all image assets for the Minecraft server website.

## 🗂️ **Directory Structure**

```
public/images/
├── hero-bg.jpg          # Hero section background (1920x1080)
├── logo.png             # Server logo (existing)
├── favicon.ico          # Website favicon
├── og-image.jpg         # Social media sharing image (1200x630)
├── gallery/             # Server screenshots for gallery
│   ├── spawn.jpg        # Spawn area screenshot
│   ├── castle.jpg       # Medieval builds
│   ├── city.jpg         # Modern city builds
│   ├── landscape.jpg    # Natural landscapes
│   ├── market.jpg       # Trading areas
│   └── arena.jpg        # PvP arenas
└── features/            # Feature icons/illustrations
    ├── community.png    # Community features
    ├── protection.png   # Anti-grief protection
    ├── custom.png       # Custom features
    └── performance.png  # High performance
```

## 📏 **Recommended Image Sizes**

### **Hero Background**
- **File**: `hero-bg.jpg`
- **Size**: 1920x1080px (16:9 ratio)
- **Format**: JPG (optimized for web)
- **Description**: Beautiful Minecraft landscape or server overview

### **Gallery Images**
- **Size**: 1600x900px (16:9 ratio)
- **Format**: JPG (optimized for web)
- **Quality**: High quality but web-optimized
- **Content**: Server screenshots, builds, landscapes

### **Logo**
- **File**: `logo.png` (already exists)
- **Size**: 512x512px or higher
- **Format**: PNG with transparency
- **Usage**: Navigation, loading screen, footer

### **Social Sharing**
- **File**: `og-image.jpg`
- **Size**: 1200x630px
- **Format**: JPG
- **Content**: Server logo + attractive background

## 🎨 **Image Guidelines**

1. **Quality**: Use high-quality screenshots with good lighting
2. **Consistency**: Maintain similar style and quality across all images
3. **Optimization**: Compress images for web while maintaining quality
4. **Naming**: Use descriptive, lowercase filenames with hyphens
5. **Formats**: 
   - JPG for photographs/screenshots
   - PNG for logos/graphics with transparency
   - WebP for better compression (optional)

## 📝 **How to Add Your Images**

1. **Replace placeholder paths** in `Gallery.tsx` with your actual images
2. **Update the `defaultImages` array** with your server screenshots
3. **Add hero background** as `hero-bg.jpg` for the homepage
4. **Create favicon** and place as `favicon.ico` in the root public folder

## 🔧 **Current Placeholder Images**

The gallery currently references these placeholder images:
- `/images/gallery/spawn.jpg`
- `/images/gallery/castle.jpg`
- `/images/gallery/city.jpg`
- `/images/gallery/landscape.jpg`
- `/images/gallery/market.jpg`
- `/images/gallery/arena.jpg`

Replace these with your actual server screenshots!

## 💡 **Tips for Great Server Screenshots**

1. **Use shaders** for enhanced visual appeal
2. **Capture during golden hour** (sunrise/sunset) for best lighting
3. **Show different areas**: spawn, builds, landscapes, activities
4. **Include players** to show community activity
5. **Use creative camera angles** for dynamic compositions
6. **Ensure good weather** (clear skies) in screenshots 