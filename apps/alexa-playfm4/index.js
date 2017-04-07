module.change_code = 1;
'use strict';

var alexa = require('alexa-app');
var app = new alexa.app('playfm4');


app.launch(function(request, response) {
    response.say('Wilkommen!').reprompt('Bitte?').shouldEndSession(false);
});


app.error = function(exception, request, response) {
    console.log(exception)
    console.log(request);
    console.log(response);
    response.say('Sorry an error occured ' + error.message);
};


app.intent('PlayMusic', {
    "slots": {
      "" : ""
    },
    "utterances": [
      ""
    ]
}, function(request, response) {


});

app.intent('AMAZON.StopIntent', {
    "slots": {}
}, function(request, response) {
    response.say("Good bye. See you soon!").shouldEndSession(true);
   });


module.exports = app;
