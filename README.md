android-gcm-nodejs-push-notification-demo
=========================================

android + node.js code for a push notification

NodeJS
======

The nodejs code is dirt simple - you just add your Sender ID and a device registration ID.

Android
=======

The Android gcm code requires the `SENDER_ID` to be updated in

`gcm-client/GcmClient/src/main/java/com/google/android/gcm/demo/app/DemoActivity.java`

All the work is in figuring out how to install Java 7,
the Android SDK, Android Studio, etc.

I would like to get step-by-step instructions for that,
but I don't have it yet. See the resources section.

I'd like to update the example to make an http request that pushes the
registration id to the server.

Right now, however, you can add lines in a few places to log it

`Log.i(TAG, "[GCM DEBUG] registration_id: " + regid);`

You'll want to use `adb logcat | grep 'GCM DEBUG'`
or  [`pidcat`](https://github.com/JakeWharton/pidcat).

GCM Setup
=========

This is perhaps the most difficult work - getting an API key,
setting up certificates, etc.

All of the web interfaces have changed since most of the tutorials
(including Google's help pages were written)

Sorry I don't have that in a step-by-step fashion yet, but here are the resources I used:

Resources
=========

  * [Google Cloud Messaging API Key](https://support.google.com/googleplay/android-developer/answer/2663268?hl=en#)
  * Create Client ID / Key: `https://console.developers.google.com/project/apps~<<APP_NAME_ID_THING>>/apiui/credential`
  * [GCM Getting Started](http://developer.android.com/google/gcm/gs.html)
  * [GCM Overview](http://developer.android.com/google/gcm/gcm.html#senderid)
  * [GCM Server](http://developer.android.com/google/gcm/server.html#params)
  * `https://code.google.com/apis/console/?noredirect#project:<<PROJECT_ID>>:access`
  * [GCM Message Lifetime & Details](http://developer.android.com/google/gcm/adv.html)
  * [howto create an https serever in node.js with self-signed certificate (done right)](https://github.com/coolaj86/nodejs-self-signed-certificate-example)
    * [SO post](http://stackoverflow.com/a/24749608/151312)
    * Converting Keys <http://greengeckodesign.com/blog/2013/06/15/creating-an-ssl-certificate-for-node-dot-js/>
