var nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secureConnection: false,
    tls: {
        ciphers:'SSLv3'
    },
    auth:{
        user: 'mohammad_waris@live.com',
        pass: '@1234waris'
    }
    

})
var mailOptions={
 from: 'mohammad_waris@live.com',
 to: 'mohammad_waris@live.com',
 subject: 'Node Test',
 text: 'Hello From Node JS Again'
}
transport.sendMail(mailOptions, function(error, info){
if (error){
    console.warn('Error');

}
else{
    console.warn('Email Has Been sent!', info.response);
}
})