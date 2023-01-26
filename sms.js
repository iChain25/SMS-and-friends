
var accountSid = "AC7540dbe3d6e54bda9a643d243d06cd11";
var authToken = "20b030e592a55a11e4bebf376b7c4bd3";

var twilio = Twilio.require("twilio")(accountSid, authToken);


twilio.messages
  .create({
    from: "+14632209825",
    to: "+639983741908",
    body: "PUTANGINA",
  })
  .then(function(res) {console.log("message has sent!")})
  .catch(function(err)  {
    console.log(err);
  });
