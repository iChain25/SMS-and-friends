const accountSid = "AC7540dbe3d6e54bda9a643d243d06cd11";
const authToken = "20b030e592a55a11e4bebf376b7c4bd3";
const twilio = require('twilio');
const client = twilio(accountSid, authToken);
//for firebase call
client.messages.create({
  body: 'TANGA',
  from: '+14632209825',  // Twilio phone number
  to: '+639457957526'  // Phone number to send the message to
})
.then(function(res) {console.log("message has sent!")})
.catch(function(err)  {
  console.log(err);
});