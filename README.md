Paymill's Zapier  Integration
=============================

Paymill App
-----------

**Create new Service**

https://zapier.com/developer/app/create/

Title: Paymill

Description: Integration with Paymill Payments API

Image: <a square PNG, example 64x64>

**Setup Auth Field**

Label: Private Key
Key: private_key
Help text: Private key of your test or live account

# Editing "Paymill" App ("Edit your auth configuration" link)

Auth Type: Basic Auth

{
  "username": "{{private_key}}",
  "password": ""
}

# Configure webhooks ("Edit your REST hooks configuration")

REST Hook Subscribe URL: https://api.paymill.com/v2/webhooks
REST Hook Unsubscribe URL: https://api.paymill.com/v2/webhooks


# Add Trigger: New Transaction (transaction.created)

Label: New Transaction
Key: trigger_new_transaction
Help Text: Triggers when a new Payment Transaction is created.


pre_subscribe:



Hip CHat Zap
------------

Trigger Service 1: Paymill
Trigger: New Transaction

Trigger Service 2: Hipchat
Trigger: Create Message









