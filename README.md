android-gcm-nodejs-push-notification-demo
=========================================

android + node.js code for a push notification

All the work is in figuring out how to get an API key, certificates, and whatnot.

The actual code is dirt simple.

Resources
=========

  * [Google Cloud Messaging API Key](https://support.google.com/googleplay/android-developer/answer/2663268?hl=en#)
  * Create Client ID / Key: `https://console.developers.google.com/project/apps~<<YOUR_APP_NAME>>/apiui/credential`
  * [GCM Getting Started](http://developer.android.com/google/gcm/gs.html)
  * [GCM Overview](http://developer.android.com/google/gcm/gcm.html#senderid)
  * [GCM Server](http://developer.android.com/google/gcm/server.html#params)
  * `https://code.google.com/apis/console/?noredirect#project:<<PRODUCT_ID>>:access`
  * [GCM Message Lifetime & Details](http://developer.android.com/google/gcm/adv.html)
  * [howto create an https serever in node.js with self-signed certificate (done right)](https://github.com/coolaj86/nodejs-self-signed-certificate-example)
    * [SO post](http://stackoverflow.com/a/24749608/151312)
    * Converting Keys <http://greengeckodesign.com/blog/2013/06/15/creating-an-ssl-certificate-for-node-dot-js/>
