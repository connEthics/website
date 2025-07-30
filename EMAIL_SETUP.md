# Email Configuration for ConnEthics Website

## SMTP Setup

The contact form uses SMTP to send emails. You need to configure the following environment variables:

### Environment Variables

Create a `.env.local` file in the root directory with these variables:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@connethics.com
CONTACT_EMAIL=hello@connethics.com
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Gmail Configuration

If using Gmail:

1. Enable 2-factor authentication on your Google account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password as `SMTP_PASS`

### Vercel Deployment

For production deployment on Vercel:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add all the SMTP variables listed above
4. Update `NEXT_PUBLIC_BASE_URL` to your production domain

### Other SMTP Providers

You can use other SMTP providers by updating:
- `SMTP_HOST`: Your provider's SMTP server
- `SMTP_PORT`: Usually 587 for TLS or 465 for SSL
- `SMTP_USER` and `SMTP_PASS`: Your provider credentials

### Email Templates

The system sends two emails:
1. **Admin notification**: Sent to `CONTACT_EMAIL` with form details
2. **User confirmation**: Sent to the user confirming receipt

Both emails are styled with HTML and include all form information.

### Testing

To test the email functionality:
1. Configure your SMTP settings in `.env.local`
2. Start the development server: `npm run dev`
3. Visit `/contact` and submit the form
4. Check both the admin email and user confirmation email

### Security Notes

- Never commit `.env.local` to version control
- Use App Passwords instead of regular passwords for Gmail
- Consider using dedicated transactional email services for production (SendGrid, Mailgun, etc.)
