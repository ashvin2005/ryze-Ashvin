# Ryze AI - Website RedesignA modern, responsive redesign of the Get-Ryze.ai website built with Next.js 15, TypeScript, and Tailwind CSS.## 🎯 Project OverviewThis project is a complete redesign of the Ryze AI marketing platform website, focusing on:- Modern, clean visual design- Improved user experience and navigation- Clear communication of value propositions- Mobile-first responsive design- Modular, reusable component architecture## ✨ Features### Design & User Experience- **Modern UI**: Clean, professional design with gradient accents and smooth animations- **Responsive**: Fully responsive design that works seamlessly on all devices- **Accessibility**: WCAG-compliant with proper semantic HTML and ARIA labels- **Performance**: Optimized for fast loading with Next.js 15 App Router### Pages Included1. **Homepage** - Complete landing page with all sections2. **Pricing** - Detailed pricing plans with FAQ3. **About** - Company story, values, and team information### Modular ComponentsAll components are designed to be reusable and easily maintainable:- **Header** - Responsive navigation with mobile menu- **Hero** - Eye-catching hero section with CTAs- **Features** - Grid of key features with icons- **HowItWorks** - Step-by-step process explanation- **Testimonials** - Customer testimonials with ratings- **Pricing** - Pricing tiers with feature comparison- **Contact** - Contact form with company information- **Footer** - Site links and social media

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ryze-redesign
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📁 Project Structure

```
ryze-redesign/
├── app/
│   ├── page.tsx          # Homepage
│   ├── pricing/
│   │   └── page.tsx      # Pricing page
│   ├── about/
│   │   └── page.tsx      # About page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features section
│   ├── HowItWorks.tsx    # Process section
│   ├── Testimonials.tsx  # Testimonials section
│   ├── Pricing.tsx       # Pricing component
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Site footer
└── public/               # Static assets
```

## 🎨 Design Decisions

### Color Scheme
- **Primary**: Purple (#7C3AED) to Blue (#2563EB) gradients
- **Accent**: Pink, Green, Yellow for feature highlights
- **Neutrals**: Gray scale for text and backgrounds

### Typography
- **Headings**: Geist Sans - Bold, large sizes for impact
- **Body**: Geist Sans - Regular weight for readability

### Layout
- **Container**: Max-width responsive containers
- **Grid**: CSS Grid and Flexbox for flexible layouts
- **Spacing**: Consistent padding/margin scale

### Animations
- Smooth hover transitions on interactive elements
- Subtle blob animations in hero background
- Scale transforms on CTAs for engagement

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ryze-redesign)

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## 📝 Design & Structural Decisions

### Why Next.js 15?
- Server-side rendering for better SEO
- App Router for improved routing and layouts
- Built-in optimization for images and fonts
- Easy deployment to Vercel

### Why Tailwind CSS?
- Utility-first approach for rapid development
- Consistent design system
- Smaller bundle sizes with purging
- Easy to customize and extend

### Component Architecture
Each component is:
- **Self-contained**: All logic and styles in one file
- **Reusable**: Can be used across different pages
- **Typed**: Full TypeScript support for type safety
- **Accessible**: Built with accessibility in mind

### Performance Optimizations
- Next.js Image component for optimized images
- Font optimization with next/font
- CSS-in-JS with Tailwind for minimal CSS
- Code splitting by page

## 🌐 Live Demo

[View Live Demo](https://your-deployment-url.vercel.app)

## 📸 Screenshots

### Homepage
![Homepage](./screenshots/homepage.png)

### Pricing Page
![Pricing](./screenshots/pricing.png)

### About Page
![About](./screenshots/about.png)

## 📄 License

This project is created for educational/assignment purposes.

## 🙏 Acknowledgments

- Original website: [Get-Ryze.ai](https://www.get-ryze.ai/)
- Icons: [Lucide Icons](https://lucide.dev/)
- Framework: [Next.js](https://nextjs.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
