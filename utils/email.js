const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');


module.exports = class Email{
    newTransport(){
        
        //sendgrid
        return nodemailer.createTransport({
            service:'SendGrid',
            auth:{
                user:"<SENGRID_USERNAME>",
                pass:"<SENDGRID_PASSWORD>"
            }
        });
    }

    async send(template,subject,name,otp,from,to){
        // 1) Render Html template on a pug template
        const html = pug.renderFile(`./views/emails/${template}.pug`,
        {
            name:name,
            otp:otp,
            subject
        });

        // 2) Define email options
        const mailOptions = {
            from:from,
            to:to,
            subject:subject,
            html:html,
            // text:htmlToText.convert(html)
        }
        // 3) create a transport and send email
        await this.newTransport().sendMail(mailOptions);
    };

    async sendWelcome(name,otp,from,to){
        await this.send('welcome','Welcome to the This web page',name,otp,from,to);
    }
};