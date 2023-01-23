const accountSid = "AC7540dbe3d6e54bda9a643d243d06cd11";
const authToken = "20b030e592a55a11e4bebf376b7c4bd3";
const twilio = require("twilio");
const client = twilio(accountSid, authToken);

document.getElementById('sendinfo').addEventListener('click', submitForm);
function submitForm(e){
    client.messages
    .create({ body: "Hello from Twilio", from: "+14632209825", to: "+639983741908" })
    .then(message => console.log(message.sid));
}

