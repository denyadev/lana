import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.user || 'lana.kosogova@gmail.com',
      pass: process.env.pass || 'nzhhpubuhccnmzrb',
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'lana.kosogova@gmail.com',
      subject: `New message coming from Lana Kosogva Portfolio from ${name}`,
      html: `<p>You have a new contact form submission from: ${email}</p>
      <p><strong>Name: </strong> ${name} </p>
      <p><strong>Message: </strong> ${message} </p>

      `,
    });

    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};