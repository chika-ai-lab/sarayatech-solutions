# Contact Form Server

Node.js/Express server with Nodemailer for handling contact form submissions.

## Features

- ✉️ Send emails using SMTP (Gmail, SendGrid, Mailgun, etc.)
- 🔄 Auto-reply to users
- ✅ Email validation
- 🛡️ CORS protection
- 📝 Detailed email templates
- 🚀 Easy to deploy

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your SMTP credentials:

```bash
cp .env.example .env
```

### 3. Configure SMTP

#### Using Gmail

1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated password
3. Update `.env`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-digit-app-password
   CONTACT_EMAIL=your-email@gmail.com
   ```

#### Using SendGrid

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your_sendgrid_api_key
CONTACT_EMAIL=your-email@example.com
```

#### Using Mailgun

```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASS=your_mailgun_smtp_password
CONTACT_EMAIL=your-email@example.com
```

### 4. Start the Server

**Development mode** (with auto-reload):
```bash
npm run server:dev
```

**Production mode**:
```bash
npm run server
```

The server will start on `http://localhost:3001`

## API Endpoints

### Health Check
```
GET /api/health
```

Response:
```json
{
  "status": "ok",
  "message": "Contact form server is running"
}
```

### Submit Contact Form
```
POST /api/contact
```

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",  // optional
  "company": "Acme Inc",   // optional
  "service": "Web Development",  // optional
  "message": "I'm interested in your services..."
}
```

Success response:
```json
{
  "success": true,
  "message": "Your message has been sent successfully! We'll get back to you soon."
}
```

Error response:
```json
{
  "success": false,
  "message": "Error description"
}
```

## Email Templates

The server sends two emails:

1. **To Company** - Notification of new contact form submission
   - Contains all form data
   - Professional formatting with company branding
   - Timestamp of submission

2. **To User** - Auto-reply confirmation
   - Thanks the user for contacting
   - Confirms message receipt
   - Provides estimated response time
   - Includes links to website resources

## Frontend Integration

### Example with Fetch API

```javascript
async function sendContactForm(data) {
  try {
    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      console.log('Email sent successfully!');
    } else {
      console.error('Failed to send email:', result.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage
sendContactForm({
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello, I would like to discuss a project...'
});
```

### Example with Axios

```javascript
import axios from 'axios';

const sendContactForm = async (data) => {
  try {
    const response = await axios.post('http://localhost:3001/api/contact', data);
    console.log('Success:', response.data.message);
  } catch (error) {
    console.error('Error:', error.response?.data?.message || error.message);
  }
};
```

## Deployment

### Environment Variables for Production

Make sure to set these environment variables in your production environment:

- `NODE_ENV=production`
- `PORT=3001` (or your preferred port)
- `CLIENT_URL` - Your production frontend URL
- All SMTP credentials

### Deploy to Heroku

```bash
# Create Heroku app
heroku create your-app-name

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set SMTP_HOST=smtp.gmail.com
heroku config:set SMTP_USER=your-email@gmail.com
# ... set all other variables

# Deploy
git push heroku main
```

### Deploy to Vercel/Netlify

Create a `vercel.json` or `netlify.toml` file to configure serverless functions.

### Deploy to VPS (Ubuntu)

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Start server
pm2 start server/index.js --name contact-server

# Save PM2 process list
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

## Security Best Practices

1. **Never commit `.env` file** - It contains sensitive credentials
2. **Use environment variables** - Always use `.env` for configuration
3. **Enable CORS properly** - Only allow requests from your frontend domain in production
4. **Rate limiting** - Consider adding rate limiting to prevent spam
5. **Email validation** - The server validates email format before sending
6. **HTTPS in production** - Always use HTTPS for production deployment

## Troubleshooting

### Gmail "Less secure app" error

Gmail no longer supports "less secure apps". You must:
1. Enable 2-Factor Authentication
2. Generate an App Password
3. Use the App Password in your `.env`

### Email not sending

1. Check your SMTP credentials in `.env`
2. Verify the SMTP host and port
3. Check server logs for detailed error messages
4. Test with a different email provider

### CORS errors

Make sure `CLIENT_URL` in `.env` matches your frontend URL exactly.

## Support

For issues or questions, please open an issue on GitHub or contact support.
