#!/bin/bash

# Testing on two devices
REG_ID_0="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
REG_ID_1="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

AUTH="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
curl https://android.googleapis.com/gcm/send \
  -H 'Content-Type: application/json' \
  -H 'Authorization: key=${AUTH}' \
  -d '{ "registration_ids": ["'${REG_ID_0}'", "'${REG_ID_1}'"]
      , "data": { "foo": "bzawhahahawawaHAHA" }
      }'
