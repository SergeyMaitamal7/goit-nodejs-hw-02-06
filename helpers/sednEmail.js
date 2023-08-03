const sgMail = require('@sendgrid/mail');
require('dotenv').config(); 

const { SENDGRID_API_GEY } = process.env;

sgMail.setApiKey(SENDGRID_API_GEY);

const sendEmail = async (data) => {
  const email = { ...data, from: 'sergiimaytamal@gmail.com' };
  sgMail.send(email);
  return true;
};

module.exports = sendEmail;
