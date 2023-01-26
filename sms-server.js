
/*
module.exports = {
  myFunction: function() {
    const accountSid = "AC7540dbe3d6e54bda9a643d243d06cd11";
    const authToken = "20b030e592a55a11e4bebf376b7c4bd3";
    const twilio = require('twilio');
    const client = twilio(accountSid, authToken);
    //for firebase call
    client.messages.create({
    body: 'TANGA',
    from: '+14632209825',  // Twilio phone number
    to: '+639983741908'  // Phone number to send the message to
  })
  .then(function(res) {console.log("message has sent!")})
  .catch(function(err)  {
  console.log(err);
  });
  }
}

*/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 5500;

app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const client = new twilio('AC7540dbe3d6e54bda9a643d243d06cd11', '20b030e592a55a11e4bebf376b7c4bd3');

app.post('/send-message', (req, res) => {
    const { toNumber, message } = req.body;

    client.messages.create({
        body: message,
        from: '+14632209825',
        to: toNumber
    }).then(() => {
        res.status(200).json({ message: 'Message sent successfully' });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ message: 'Failed to send message' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


