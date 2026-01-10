# Deployment Guide

## Prerequisites
- Git repository (GitHub, GitLab, or Bitbucket)
- Account on deployment platform (Vercel or Netlify)

## Option 1: Deploy to Vercel (Recommended)

Vercel is the company behind Next.js and offers the best deployment experience.

### Steps:

1. **Push to GitHub**
   ```bash
   # Create a new repository on GitHub
   # Then run:
   git remote add origin https://github.com/yourusername/ryze-redesign.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ryze-redesign)

---

## Option 2: Deploy to Netlify

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to your Git provider
   - Select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add custom domain
   - Update DNS records

---

## Manual Deployment

If you want to deploy to your own server:

### Build the project
```bash
npm run build
```

### Start the production server
```bash
npm start
```

The server will run on port 3000 by default.

### Using PM2 (Recommended for production)
```bash
# Install PM2
npm install -g pm2

# Start the app
pm2 start npm --name "ryze-ai" -- start

# Save PM2 config
pm2 save

# Setup PM2 to start on system boot
pm2 startup
```

### Using Docker

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t ryze-ai .
docker run -p 3000:3000 ryze-ai
```

---

## Environment Variables

If you need environment variables:

1. Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@example.com
```

2. In Vercel/Netlify, add these in the Environment Variables section

---

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify mobile responsiveness
- [ ] Check all links work
- [ ] Test contact form submission
- [ ] Verify SEO meta tags
- [ ] Test page load speed (use PageSpeed Insights)
- [ ] Setup analytics (Google Analytics, Plausible, etc.)
- [ ] Configure custom domain
- [ ] Setup SSL certificate (automatic with Vercel/Netlify)
- [ ] Test across different browsers

---

## Troubleshooting

### Build fails
- Check Node.js version (should be 18+)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for TypeScript errors: `npm run build`

### Images not loading
- Ensure images are in the `public` folder
- Check image paths are correct
- Verify Image component is from `next/image`

### Styles not applying
- Clear browser cache
- Check Tailwind config
- Verify globals.css is imported in layout.tsx

---

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:

- **Push to main branch** → Automatically deploys to production
- **Push to other branches** → Creates preview deployments
- **Pull requests** → Creates preview URLs for testing

---

## Performance Optimization

After deployment:

1. **Enable compression** (automatic with Vercel/Netlify)
2. **Setup CDN** (automatic with Vercel/Netlify)
3. **Monitor Core Web Vitals**
4. **Use Lighthouse for auditing**
5. **Setup caching headers**

---

## Support

For deployment issues:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- Next.js: https://nextjs.org/docs/deployment

---

## Live URL

After deployment, your site will be available at:
- Vercel: `https://your-project.vercel.app`
- Netlify: `https://your-project.netlify.app`
- Custom domain: `https://yourdomain.com`
