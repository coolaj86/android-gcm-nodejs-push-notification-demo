'use strict';

var gcm = require('node-gcm')
  , gcmServerApiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  , gcmClientRegId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  , sender = new gcm.Sender(gcmServerApiKey)
  , message
  ;

message = new gcm.Message({
  data: { foo: 'bazwhahahahawahAHA!', dateLocaleString: new Date().toString() }
});

sender.send(message, [gcmClientRegId], 4, function (err, result) {
  if (err) {
    console.error('[ERROR]');
    console.error(err);
  }

  console.log(result);
});
