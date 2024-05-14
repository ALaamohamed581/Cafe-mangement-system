//

const nodemailer = require("nodemailer");

const sendEmail = async (opetions) => {
  //1)create trasporter

  const trasporet = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
      user: "c7a71301d0488e",
      pass: "8efa224339e745",
    },
    //Activate the less secure app object
  });
  //   2)Define email opetions
  const mailOptinos = {
    from: "alaa Mohamed  <ALaa@nodeProject.com>",
    to: opetions.email,
    subject: "password by cafe magenment ",
    html: `<p>Your logn deatails for cafe mang,emnt sysyem <br>Email:${opetions.email}</p> <p>${opetions.password}</p>
    <p><a href="http://localhost:4200/users/Login">Click Here to login </a></p>
    
    `,
  };
  //3) send the email
  await trasporet.sendMail(mailOptinos);
};
module.exports = { sendEmail };
