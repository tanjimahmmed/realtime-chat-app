import {resendClient, sender} from '../lib/resend.js';
import {createWelcomeEmailTemplate} from '../emails/emailTemplates.js';

export const sendWelcomeEmail = async(email, name, clientURL) => {
    const {data, error} = await resendClient.emails.send({
        from: `${sender.email} <${sender.email}>`,
        to: email,
        subject: 'Welcome to Realtime Chat App',
        html: createWelcomeEmailTemplate(name, clientURL)
    });

    if(error){
        console.error('Error sending welcome email:', error);
        throw new Error('Failed to send welcome email');
    }

    console.log('Welcome email sent successfully', data);
}