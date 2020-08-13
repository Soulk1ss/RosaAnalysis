const nodemailer = require('nodemailer');

sendEmail = async (sendTo, nameFile) => {
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: '',
            pass: ''
        }
    });

    let mailOptions = {
        from: 'aliceindykub@hotmail.com',
        to: sendTo,
        subject: 'Hello from sender',
        text: 'คะแนนผู้ประเมิน',
        attachments: [
            { filename: `rosa_result_${nameFile}.pdf`, path: `${__dirname}/PDF/rosa_result_${nameFile}.pdf` }
        ]
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log('send success')
    });
}
module.exports = sendEmail 