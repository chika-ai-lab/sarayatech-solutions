import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware - Allow multiple origins for development
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:8080',
  'http://localhost:3000',
  'http://localhost:4173',
  process.env.CLIENT_URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Contact form server is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address'
      });
    }

    const transporter = createTransporter();

    // Email to company (you receive the contact form)
    const mailToCompany = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
          </div>

          <div style="background-color: #f9fafb; padding: 30px; border: 1px solid #e5e7eb;">
            <h2 style="color: #1e3a8a; margin-top: 0;">Contact Details</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Name:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="mailto:${email}" style="color: #3b82f6;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Phone:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${phone}</td>
              </tr>
              ` : ''}
              ${company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Company:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${company}</td>
              </tr>
              ` : ''}
              ${service ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Service Interest:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${service}</td>
              </tr>
              ` : ''}
            </table>

            <h3 style="color: #1e3a8a; margin-top: 30px;">Message:</h3>
            <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              ${message.replace(/\n/g, '<br>')}
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
              <p>This message was sent from the SarayaTech Solutions contact form</p>
              <p>Received on: ${new Date().toLocaleString('en-US', {
                dateStyle: 'full',
                timeStyle: 'short'
              })}</p>
            </div>
          </div>
        </div>
      `
    };

    // Auto-reply email to user
    const mailToUser = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting SarayaTech Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Thank You for Contacting Us!</h1>
          </div>

          <div style="background-color: #f9fafb; padding: 30px; border: 1px solid #e5e7eb;">
            <p style="font-size: 16px; color: #374151; line-height: 1.6;">
              Dear ${name},
            </p>

            <p style="font-size: 16px; color: #374151; line-height: 1.6;">
              Thank you for reaching out to SarayaTech Solutions! We've received your message and our team will review it carefully.
            </p>

            <p style="font-size: 16px; color: #374151; line-height: 1.6;">
              We typically respond within 24-48 hours during business days. One of our digital transformation experts will get back to you shortly to discuss how we can help with your project.
            </p>

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <h3 style="color: #1e3a8a; margin-top: 0;">Your Message Summary:</h3>
              <p style="color: #6b7280; margin: 0;"><strong>Service Interest:</strong> ${service || 'General Inquiry'}</p>
              <p style="color: #6b7280; margin: 10px 0 0 0;">${message.substring(0, 150)}${message.length > 150 ? '...' : ''}</p>
            </div>

            <p style="font-size: 16px; color: #374151; line-height: 1.6;">
              In the meantime, feel free to:
            </p>

            <ul style="font-size: 16px; color: #374151; line-height: 1.8;">
              <li>Explore our <a href="${process.env.CLIENT_URL}/solutions" style="color: #3b82f6; text-decoration: none;">digital services</a></li>
              <li>View our <a href="${process.env.CLIENT_URL}/realisation" style="color: #3b82f6; text-decoration: none;">case studies</a></li>
              <li>Learn more <a href="${process.env.CLIENT_URL}/about" style="color: #3b82f6; text-decoration: none;">about our team</a></li>
            </ul>

            <p style="font-size: 16px; color: #374151; line-height: 1.6; margin-top: 30px;">
              Best regards,<br>
              <strong style="color: #1e3a8a;">The SarayaTech Solutions Team</strong>
            </p>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
              <p style="margin: 5px 0;">
                <strong>SarayaTech Solutions</strong><br>
                Your Partner for Digital Transformation
              </p>
              <p style="margin: 5px 0;">
                <a href="${process.env.CLIENT_URL}" style="color: #3b82f6; text-decoration: none;">www.sarayatech.com</a>
              </p>
            </div>
          </div>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(mailToCompany);
    await transporter.sendMail(mailToUser);

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! We\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while sending your message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong on the server'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Contact form server running on port ${PORT}`);
  console.log(`📧 Ready to receive contact form submissions\n`);
});
