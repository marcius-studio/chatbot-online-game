import sgMail from '@sendgrid/mail'

sgMail.setApiKey(global.config.sendgrid)

const mail = ({ to, from = 'noreply@test.com', subject, text = "", html }) => sgMail.send({ to, from, subject, html: text })

export default mail