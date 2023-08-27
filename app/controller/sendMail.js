const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jeramy.kertzmann34@ethereal.email',
        pass: 'qD7gJreRu6dYVgsgkD'
    }
});


  let info = await transporter.sendMail({
    from: '"Hazrath ALi" <hazzu4789@gmail.com>', // sender address
    to: "hazzu4789@gmail.com", // list of receivers
    subject: "Hello Ali", // Subject line
    text: "Hello ali Coder", // plain text body
    html: "<b>Hello Ali Coder</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;