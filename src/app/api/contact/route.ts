import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    // Validation des champs requis
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true pour 465, false pour autres ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email à l'équipe ConnEthics
    const adminEmailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'hello@connethics.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${service ? `<p><strong>Service of Interest:</strong> ${service}</p>` : ''}
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #1e3a8a; color: white; border-radius: 8px;">
            <p style="margin: 0; text-align: center;">
              This message was sent from the ConnEthics website contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Email de confirmation à l'utilisateur
    const userEmailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting ConnEthics',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">Thank You for Reaching Out</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for your interest in ConnEthics. We have received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Your Message Summary</h3>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${service ? `<p><strong>Service of Interest:</strong> ${service}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
          
          <p>In the meantime, feel free to explore our <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'https://connethics.com'}/services" style="color: #1e3a8a;">services</a> or read our latest <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'https://connethics.com'}/insights" style="color: #1e3a8a;">insights</a>.</p>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #1e3a8a; color: white; border-radius: 8px;">
            <h3 style="margin-top: 0; color: white;">ConnEthics</h3>
            <p style="margin: 0;">Ethical connections in a competitive world</p>
            <p style="margin: 5px 0 0 0;">
              <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'https://connethics.com'}" style="color: #93c5fd;">www.connethics.com</a>
            </p>
          </div>
        </div>
      `,
    };

    // Envoi des emails
    await Promise.all([
      transporter.sendMail(adminEmailOptions),
      transporter.sendMail(userEmailOptions)
    ]);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
