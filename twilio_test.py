# -*- coding: utf-8 -*-
# 
# Download the twilio-python library from http://twilio.com/docs/libraries
from twilio.rest import TwilioRestClient
client = TwilioRestClient(account_sid, auth_token)
message = client.sms.messages.create(to="+13477676683", from_="+13477676683", body="Hello from Python!")


