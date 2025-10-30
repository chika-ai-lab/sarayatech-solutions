# SarayaTech Solutions - Deployment Guide

Complete guide for deploying the SarayaTech Solutions website to production.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Prerequisites](#prerequisites)
3. [Frontend Deployment (Vercel)](#frontend-deployment-vercel)
4. [Backend Deployment (Railway/Render)](#backend-deployment-railwayrender)
5. [Docker Deployment](#docker-deployment)
6. [Email Configuration](#email-configuration)
7. [Environment Variables](#environment-variables)
8. [Custom Domain Setup](#custom-domain-setup)
9. [Post-Deployment Checklist](#post-deployment-checklist)
10. [Troubleshooting](#troubleshooting)

---

## Architecture Overview

The application consists of two separate deployments:

- **Frontend**: React + Vite → Deploy to **Vercel** or **Netlify**
- **Backend**: Node.js + Express + Nodemailer → Deploy to **Railway**, **Render**, or **Heroku**

```
┌─────────────────┐         ┌──────────────────┐         ┌─────────────┐
│   User Browser  │────────▶│  Frontend (Vite) │────────▶│   Backend   │
│                 │         │    Vercel/       │         │   Railway/  │
│                 │         │    Netlify       │         │   Render    │
└─────────────────┘         └──────────────────┘         └─────────────┘
                                                                  │
                                                                  ▼
                                                           ┌─────────────┐
                                                           │ SMTP Server │
                                                           │   (Gmail)   │
                                                           └─────────────┘
```

---

## Prerequisites

Before deployment, ensure you have:

- ✅ Git repository on GitHub/GitLab
- ✅ Node.js 18+ installed locally
- ✅ Email account for SMTP (Gmail recommended)
- ✅ Domain name (optional, but recommended)

---

## Frontend Deployment (Vercel)

Vercel is the recommended platform for deploying the Vite React frontend.

### Option 1: Deploy with Vercel CLI

#### 1. Install Vercel CLI
```bash
npm install -g vercel
```

#### 2. Login to Vercel
```bash
vercel login
```

#### 3. Deploy
```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No
- **Project name?** → sarayatech-solutions
- **Directory?** → `./` (root)
- **Build command?** → `npm run build`
- **Output directory?** → `dist`

#### 4. Deploy to Production
```bash
vercel --prod
```

### Option 2: Deploy via GitHub Integration (Recommended)

#### 1. Push Code to GitHub
```bash
git add .
git commit -m "feat: ready for deployment"
git push origin main
```

#### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

#### 3. Add Environment Variables
In Vercel dashboard → Settings → Environment Variables:

| Key | Value |
|-----|-------|
| `VITE_API_URL` | `https://your-backend.railway.app` |

#### 4. Deploy
Click **"Deploy"** - Vercel will automatically deploy on every push to `main`.

---

## Backend Deployment (Railway/Render)

### Option A: Deploy to Railway (Recommended)

Railway offers easy deployment with automatic HTTPS.

#### 1. Create Railway Account
Go to [railway.app](https://railway.app) and sign up with GitHub.

#### 2. Create New Project
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose your repository
4. Railway will detect Node.js automatically

#### 3. Configure Start Command
In Railway dashboard:
1. Go to **Settings** → **Deploy**
2. Set **Start Command**: `node server/index.js`
3. Set **Root Directory**: `/` (leave empty if server is in root)

#### 4. Add Environment Variables
In Railway → Variables tab:

```env
PORT=3001
NODE_ENV=production

# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Settings
SMTP_FROM=noreply@sarayatech.com
CONTACT_EMAIL=info@sarayatech.com

# Frontend URL (important for CORS)
CLIENT_URL=https://sarayatech.com
```

#### 5. Deploy
Railway will automatically deploy. Get your URL from the dashboard (e.g., `https://your-app.railway.app`).

---

### Option B: Deploy to Render

#### 1. Create Render Account
Go to [render.com](https://render.com) and sign up.

#### 2. Create New Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Configure:
   - **Name**: `sarayatech-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server/index.js`
   - **Plan**: Free

#### 3. Add Environment Variables
Same as Railway configuration above.

#### 4. Deploy
Click **"Create Web Service"** - deployment starts automatically.

---

## Docker Deployment

Deploy the backend using Docker for maximum portability and consistency.

### Why Docker?

- ✅ **Consistency**: Same environment everywhere (dev, staging, production)
- ✅ **Isolation**: No dependency conflicts
- ✅ **Portability**: Deploy anywhere Docker runs
- ✅ **Scalability**: Easy to scale horizontally
- ✅ **Security**: Non-root user, minimal attack surface

### Quick Start with Docker Compose

#### 1. Ensure Docker is Installed
```bash
docker --version
docker-compose --version
```

If not installed: [Get Docker](https://docs.docker.com/get-docker/)

#### 2. Configure Environment
```bash
cp .env.example .env
# Edit .env with your SMTP credentials
```

#### 3. Start Services
```bash
docker-compose up -d
```

Server runs at: `http://localhost:3001`

#### 4. View Logs
```bash
docker-compose logs -f backend
```

#### 5. Stop Services
```bash
docker-compose down
```

### Build Docker Image Manually

#### Build
```bash
docker build -t sarayatech-backend .
```

#### Run
```bash
docker run -d \
  --name sarayatech-backend \
  -p 3001:3001 \
  --env-file .env \
  sarayatech-backend
```

### Deploy to Production with Docker

#### Option 1: Railway with Dockerfile

Railway automatically detects and builds your Dockerfile:

1. Push code with Dockerfile to GitHub
2. Connect repo to Railway
3. Railway builds Docker image automatically
4. Add environment variables
5. Deploy!

#### Option 2: Render with Dockerfile

1. Create new Web Service on Render
2. Select your repository
3. Render detects Dockerfile
4. Configure environment variables
5. Deploy

#### Option 3: VPS with Docker

Deploy to any VPS (DigitalOcean, AWS EC2, etc.):

```bash
# SSH into VPS
ssh user@your-server.com

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Clone repository
git clone https://github.com/yourusername/sarayatech-solutions.git
cd sarayatech-solutions

# Configure environment
nano .env

# Start with Docker Compose
docker-compose up -d

# Optional: Setup Nginx reverse proxy
sudo apt install nginx -y
# Configure Nginx to proxy requests to localhost:3001
```

### Docker Image Features

Our Dockerfile includes:
- **Multi-stage build** - Optimized for production
- **Alpine Linux** - Minimal image size (~50MB)
- **Non-root user** - Enhanced security
- **Health checks** - Automatic monitoring
- **Production-ready** - Only production dependencies

### Useful Docker Commands

```bash
# View running containers
docker ps

# View logs
docker logs -f sarayatech-backend

# Enter container shell
docker exec -it sarayatech-backend sh

# Restart container
docker restart sarayatech-backend

# Stop and remove
docker stop sarayatech-backend
docker rm sarayatech-backend

# View resource usage
docker stats
```

### Docker Health Check

The container includes a health check endpoint:

```bash
# Check from inside container
docker exec sarayatech-backend wget -q -O- http://localhost:3001/api/health

# Check container health status
docker inspect sarayatech-backend | grep -A 10 Health
```

📘 **Full Docker Guide**: See [DOCKER.md](DOCKER.md) for comprehensive Docker documentation.

---

## Email Configuration

The contact form uses SMTP to send emails. Here's how to set it up:

### Gmail Setup (Recommended)

#### 1. Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification**

#### 2. Generate App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select **"Mail"** and **"Other (Custom name)"**
3. Enter: "SarayaTech Contact Form"
4. Click **Generate**
5. Copy the 16-character password

#### 3. Use App Password in Environment Variables
```env
SMTP_USER=your-email@gmail.com
SMTP_PASS=abcd efgh ijkl mnop  # Your generated app password
```

### Alternative: SendGrid (for high volume)

#### 1. Create SendGrid Account
Sign up at [sendgrid.com](https://sendgrid.com)

#### 2. Create API Key
1. Settings → API Keys → Create API Key
2. Select **"Full Access"**
3. Copy the API key

#### 3. Configure Environment Variables
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.your-sendgrid-api-key
```

---

## Environment Variables

### Frontend (.env for Vercel)

Create in Vercel dashboard:

```env
VITE_API_URL=https://your-backend.railway.app
```

### Backend (.env for Railway/Render)

```env
# Server Configuration
PORT=3001
NODE_ENV=production

# SMTP Email Settings
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Addresses
SMTP_FROM=noreply@sarayatech.com
CONTACT_EMAIL=info@sarayatech.com

# Frontend URL (for CORS)
CLIENT_URL=https://sarayatech.com
```

---

## Custom Domain Setup

### For Frontend (Vercel)

#### 1. Add Domain in Vercel
1. Go to Project Settings → Domains
2. Add your domain: `sarayatech.com`
3. Add `www.sarayatech.com` (optional)

#### 2. Configure DNS Records
In your domain registrar (GoDaddy, Namecheap, etc.):

**For root domain:**
```
Type: A
Name: @
Value: 76.76.19.19 (Vercel's IP)
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### 3. Wait for DNS Propagation
Usually takes 5-30 minutes. Vercel will automatically provision SSL.

### For Backend (Railway)

#### 1. Add Custom Domain
1. Go to Railway project → Settings
2. Click **"Generate Domain"** or add custom domain
3. Get the CNAME value

#### 2. Create DNS Record
```
Type: CNAME
Name: api
Value: your-app.up.railway.app
```

Result: `api.sarayatech.com` → Backend

---

## Update Frontend API URL

After backend deployment, update frontend environment:

### In Vercel:
1. Settings → Environment Variables
2. Update `VITE_API_URL` to your Railway/Render URL
3. Redeploy: Deployments → Click "..." → Redeploy

### In Code:
Remove the Vite proxy (only for development) and use environment variable:

**src/pages/Contact.tsx:**
```tsx
const API_URL = import.meta.env.VITE_API_URL || '';

const response = await fetch(`${API_URL}/api/contact`, {
  method: 'POST',
  // ...
});
```

**vite.config.ts** (Update for production):
```ts
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    // Only proxy in development
    proxy: process.env.NODE_ENV !== 'production' ? {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    } : undefined,
  },
  // ...
}));
```

---

## Post-Deployment Checklist

After deployment, verify everything works:

- [ ] Frontend is accessible at your domain
- [ ] All pages load correctly (Home, About, Solutions, Contact, etc.)
- [ ] Images and assets load properly
- [ ] Contact form submits successfully
- [ ] Success modal appears after form submission
- [ ] You receive email notifications
- [ ] User receives auto-reply email
- [ ] Mobile responsiveness works
- [ ] All links work correctly
- [ ] SSL certificate is active (https://)
- [ ] No console errors
- [ ] Google Maps displays correctly

### Test Contact Form

1. Go to `/contact`
2. Fill out the form with test data
3. Submit
4. Check for success modal
5. Verify email received at `CONTACT_EMAIL`
6. Verify auto-reply received by form submitter

---

## Troubleshooting

### Issue: Contact Form Returns CORS Error

**Solution:**
1. Verify `CLIENT_URL` in backend matches your frontend domain
2. Update backend `server/index.js` allowed origins:
```js
const allowedOrigins = [
  'https://sarayatech.com',
  'https://www.sarayatech.com',
  'http://localhost:5173',
  'http://localhost:8080',
  process.env.CLIENT_URL
].filter(Boolean);
```

### Issue: Emails Not Sending

**Possible Causes:**
1. **Wrong SMTP credentials** → Check `SMTP_USER` and `SMTP_PASS`
2. **Gmail blocking** → Use App Password (not regular password)
3. **Firewall blocking port 587** → Try port 465 with `SMTP_SECURE=true`

**Debug Steps:**
```bash
# Check backend logs in Railway/Render
railway logs
# or
render logs
```

### Issue: Environment Variables Not Working

**Solution:**
1. Make sure variables are set in hosting platform (not just `.env` file)
2. Redeploy after adding variables
3. Check logs for missing variable errors

### Issue: Build Fails on Vercel

**Possible Causes:**
1. **Missing dependencies** → Run `npm install` locally first
2. **TypeScript errors** → Fix all TS errors before deploying
3. **Build command wrong** → Verify it's `npm run build` or `vite build`

**Solution:**
Check build logs in Vercel deployment details.

### Issue: Backend Crashes After Deployment

**Solution:**
1. Check logs for error messages
2. Verify `package.json` has all dependencies (not just devDependencies)
3. Ensure `server/index.js` path is correct in start command
4. Check `PORT` environment variable is set

---

## Monitoring & Maintenance

### Set Up Monitoring

**Backend (Railway/Render):**
- Enable health checks
- Set up email alerts for downtime
- Monitor CPU/Memory usage

**Frontend (Vercel):**
- Automatic uptime monitoring included
- Check Analytics dashboard

### Regular Maintenance

- **Monthly**: Check email delivery rates
- **Quarterly**: Update dependencies (`npm update`)
- **Yearly**: Review and update SSL certificates (auto-renewed)

---

## Deployment Commands Summary

### Development
```bash
# Frontend
npm run dev

# Backend
npm run server
```

### Production Build (Local Test)
```bash
# Frontend
npm run build
npm run preview

# Backend
NODE_ENV=production node server/index.js
```

### Deploy to Production
```bash
# Via Git (automatic deployment)
git add .
git commit -m "your message"
git push origin main

# Via Vercel CLI
vercel --prod

# Via Railway CLI
railway up
```

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [Render Documentation](https://render.com/docs)
- [Nodemailer Documentation](https://nodemailer.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

## Support

For deployment issues:
- Email: support@sarayatech.com
- GitHub Issues: [Repository Issues](https://github.com/yourusername/sarayatech-solutions/issues)

---

**Last Updated:** 2025-01-30
**Version:** 1.0.0
