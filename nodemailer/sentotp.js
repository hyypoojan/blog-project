const nodemailer = require('nodemailer');

module.exports.sendOTPEmail = async (toMailId,otp) => {
    
    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : 'poojanpatel461@gmail.com',  
            pass : 'dsoqnwzvilzsyonj'
        }
    })

    const mailoptions = {
        from : 'poojanpatel461@gmail.com',
        to : toMailId,
        subject : 'Test App',
        text : `Your OTP is : ${otp}`,
        
    }

    transporter.sendMail(mailoptions,(error,success) => {
        if(error){
            console.info( 'mailerrr',error)
        }
        console.info('success',success)
        return true
    })
}