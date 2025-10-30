# Docker Deployment Guide - SarayaTech Solutions Backend

Complete guide for deploying the backend server using Docker.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Docker Build](#docker-build)
3. [Docker Compose](#docker-compose)
4. [Environment Variables](#environment-variables)
5. [Production Deployment](#production-deployment)
6. [Troubleshooting](#troubleshooting)

---

## Quick Start

### Prerequisites

- Docker installed ([Get Docker](https://docs.docker.com/get-docker/))
- Docker Compose installed (included with Docker Desktop)
- `.env` file configured (see below)

### 1. Configure Environment

Create `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` with your SMTP credentials:

```env
# Server Configuration
PORT=3001
NODE_ENV=production

# SMTP Email Settings
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@saraya.tech
SMTP_PASS=your-app-password

# Email Addresses
SMTP_FROM=noreply@sarayatech.com
CONTACT_EMAIL=info@sarayatech.com

# Frontend URL (for CORS)
CLIENT_URL=https://sarayatech.com
```

### 2. Start with Docker Compose

```bash
docker-compose up -d
```

That's it! The server is now running at `http://localhost:3001`

---

## Docker Build

### Build the Image

```bash
docker build -t sarayatech-backend .
```

### Run the Container

```bash
docker run -d \
  --name sarayatech-backend \
  -p 3001:3001 \
  --env-file .env \
  sarayatech-backend
```

### View Logs

```bash
docker logs -f sarayatech-backend
```

### Stop Container

```bash
docker stop sarayatech-backend
```

### Remove Container

```bash
docker rm sarayatech-backend
```

---

## Docker Compose

Docker Compose simplifies multi-container management.

### Available Commands

**Start services:**
```bash
docker-compose up -d
```

**Stop services:**
```bash
docker-compose down
```

**View logs:**
```bash
docker-compose logs -f backend
```

**Rebuild and restart:**
```bash
docker-compose up -d --build
```

**Check status:**
```bash
docker-compose ps
```

**Execute commands in container:**
```bash
docker-compose exec backend sh
```

---

## Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `3001` |
| `NODE_ENV` | Environment | `production` |
| `SMTP_HOST` | SMTP server | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port | `465` or `587` |
| `SMTP_SECURE` | Use SSL/TLS | `true` for 465, `false` for 587 |
| `SMTP_USER` | Email address | `info@saraya.tech` |
| `SMTP_PASS` | Email password | Your app password |
| `SMTP_FROM` | From address | `noreply@sarayatech.com` |
| `CONTACT_EMAIL` | Recipient email | `info@sarayatech.com` |
| `CLIENT_URL` | Frontend URL | `https://sarayatech.com` |

### Setting Environment Variables

**Option 1: Using .env file (Recommended)**
```bash
docker-compose up -d
```

**Option 2: Command line**
```bash
docker run -e SMTP_HOST=smtp.gmail.com -e SMTP_USER=user@example.com ...
```

**Option 3: Docker Compose override**
Create `docker-compose.override.yml`:
```yaml
version: '3.8'
services:
  backend:
    environment:
      - SMTP_HOST=smtp.sendgrid.net
      - SMTP_USER=apikey
```

---

## Production Deployment

### Deploy to Docker Hub

#### 1. Tag the Image

```bash
docker tag sarayatech-backend yourusername/sarayatech-backend:latest
```

#### 2. Push to Docker Hub

```bash
docker login
docker push yourusername/sarayatech-backend:latest
```

#### 3. Pull on Production Server

```bash
docker pull yourusername/sarayatech-backend:latest
docker run -d -p 3001:3001 --env-file .env yourusername/sarayatech-backend:latest
```

---

### Deploy to Railway with Docker

Railway can deploy directly from Dockerfile.

#### 1. Create Railway Account
Sign up at [railway.app](https://railway.app)

#### 2. Create New Project
- Click "New Project" → "Deploy from GitHub repo"
- Select your repository

#### 3. Railway Auto-Detection
Railway will automatically:
- Detect the Dockerfile
- Build the image
- Deploy the container

#### 4. Add Environment Variables
In Railway dashboard → Variables tab, add:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@saraya.tech
SMTP_PASS=your-app-password
SMTP_FROM=noreply@sarayatech.com
CONTACT_EMAIL=info@sarayatech.com
CLIENT_URL=https://sarayatech.com
```

#### 5. Get Your URL
Railway provides: `https://your-app.railway.app`

---

### Deploy to Render with Docker

#### 1. Create Render Account
Sign up at [render.com](https://render.com)

#### 2. Create Web Service
- New + → Web Service
- Connect your repository

#### 3. Configure Service
- **Name**: sarayatech-backend
- **Environment**: Docker
- **Dockerfile Path**: `./Dockerfile`
- **Plan**: Free or Starter

#### 4. Add Environment Variables
Same as Railway configuration above.

#### 5. Deploy
Click "Create Web Service" - Render will build and deploy.

---

### Deploy to VPS (Ubuntu)

#### 1. Install Docker on VPS

```bash
# Update packages
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose -y

# Add user to docker group
sudo usermod -aG docker $USER
newgrp docker
```

#### 2. Clone Repository

```bash
git clone https://github.com/yourusername/sarayatech-solutions.git
cd sarayatech-solutions
```

#### 3. Configure Environment

```bash
nano .env
# Add your configuration
```

#### 4. Start with Docker Compose

```bash
docker-compose up -d
```

#### 5. Setup Nginx Reverse Proxy (Optional)

**Install Nginx:**
```bash
sudo apt install nginx -y
```

**Configure Nginx:**
```bash
sudo nano /etc/nginx/sites-available/sarayatech
```

Add configuration:
```nginx
server {
    listen 80;
    server_name api.sarayatech.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**Enable site:**
```bash
sudo ln -s /etc/nginx/sites-available/sarayatech /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 6. Setup SSL with Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d api.sarayatech.com
```

#### 7. Auto-start on Boot

```bash
# Docker Compose will restart containers automatically
# If you want to ensure it runs on boot:
sudo nano /etc/systemd/system/sarayatech.service
```

Add:
```ini
[Unit]
Description=SarayaTech Backend
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/path/to/sarayatech-solutions
ExecStart=/usr/bin/docker-compose up -d
ExecStop=/usr/bin/docker-compose down
TimeoutStartSec=0

[Install]
WantedBy=multi-user.target
```

Enable:
```bash
sudo systemctl enable sarayatech
sudo systemctl start sarayatech
```

---

## Dockerfile Explained

Our multi-stage Dockerfile is optimized for production:

### Stage 1: Builder
```dockerfile
FROM node:18-alpine AS builder
```
- Uses lightweight Alpine Linux
- Installs all dependencies
- Prepares application files

### Stage 2: Production
```dockerfile
FROM node:18-alpine AS production
```
- Creates minimal production image
- Only includes production dependencies
- Runs as non-root user for security
- Includes health check

### Security Features
- ✅ Non-root user (`nodejs`)
- ✅ Minimal attack surface (Alpine)
- ✅ No dev dependencies in production
- ✅ Health checks enabled

---

## Troubleshooting

### Container Won't Start

**Check logs:**
```bash
docker logs sarayatech-backend
# or
docker-compose logs backend
```

**Common issues:**
- Missing environment variables
- Port already in use
- Invalid .env configuration

### Email Not Sending

**Exec into container:**
```bash
docker exec -it sarayatech-backend sh
```

**Check environment:**
```sh
env | grep SMTP
```

**Test SMTP connection:**
```bash
docker-compose exec backend node -e "
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
transporter.verify().then(console.log).catch(console.error);
"
```

### Port Already in Use

**Find process using port:**
```bash
# Linux/Mac
sudo lsof -i :3001

# Windows
netstat -ano | findstr :3001
```

**Use different port:**
```bash
docker-compose up -d --build -p 3002:3001
```

### Container Keeps Restarting

**Check health:**
```bash
docker inspect sarayatech-backend | grep -A 10 Health
```

**Disable health check temporarily:**
Edit `docker-compose.yml` and comment out `healthcheck` section.

### Build Fails

**Clear Docker cache:**
```bash
docker builder prune -a
docker-compose build --no-cache
```

### View Container Stats

```bash
docker stats sarayatech-backend
```

---

## Best Practices

### Development vs Production

**Development:**
```yaml
# docker-compose.dev.yml
services:
  backend:
    build:
      context: .
      target: builder  # Use builder stage
    volumes:
      - ./server:/app/server  # Live reload
    command: npm run server:dev
```

**Production:**
```yaml
# docker-compose.yml (default)
services:
  backend:
    build:
      target: production
    restart: unless-stopped
```

### Monitoring

**Container logs:**
```bash
docker logs -f --tail 100 sarayatech-backend
```

**Resource usage:**
```bash
docker stats
```

### Backup

**Export container:**
```bash
docker export sarayatech-backend > backend-backup.tar
```

**Save image:**
```bash
docker save sarayatech-backend > backend-image.tar
```

---

## Docker Commands Cheatsheet

| Command | Description |
|---------|-------------|
| `docker ps` | List running containers |
| `docker ps -a` | List all containers |
| `docker images` | List images |
| `docker logs <container>` | View logs |
| `docker exec -it <container> sh` | Enter container shell |
| `docker stop <container>` | Stop container |
| `docker start <container>` | Start container |
| `docker restart <container>` | Restart container |
| `docker rm <container>` | Remove container |
| `docker rmi <image>` | Remove image |
| `docker system prune -a` | Clean up everything |

---

## Additional Resources

- [Docker Documentation](https://docs.docker.com)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Node.js Docker Best Practices](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)
- [Railway Docker Deployment](https://docs.railway.app/deploy/dockerfiles)
- [Render Docker Deployment](https://render.com/docs/docker)

---

**Last Updated:** 2025-01-30
**Version:** 1.0.0
