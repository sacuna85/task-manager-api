const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'acunass85@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'acunass85@gmail.com',
        subject: "We're sad to see you go",
        text: `${name}, why are you canceling your account with us? Maybe we can help improve your experience with us.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}