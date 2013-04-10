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

# Add Trigger for New Client

Label: New Client
Key: trigger_new_client
Help Text: Triggers when a new Client is created.
Hide: CHECK

Data Source: Polling

## On Polling Data Source

Polling URL Route: https://api.paymill.com/v2/clients?order=created_at_desc
Polling: Make Test Trigger: CHECK !

# Add Trigger for New Transaction Succeeded

Label: New Transaction Success
Key: trigger_new_transaction
Help Text: Triggers when a new Payment Transaction is created.



## On Polling Data Source

Polling URL Route: https://api.paymill.com/v2/transactions?order=created_at_desc
Polling: Make Test Trigger: CHECK !
Webhook Event Name: transaction_succeeded

# Configure webhooks ("Edit your REST hooks configuration")

REST Hook Subscribe URL: https://api.paymill.com/v2/webhooks
REST Hook Unsubscribe URL: https://api.paymill.com/v2/webhooks


Hip Chat Zap
------------

Trigger Service 1: Paymill
Trigger: New Transaction

Trigger Service 2: Hipchat
Trigger: Create Message

From: Paymill
Message: New payment! ID: {{id}}, {{amount}} {{currency}}, using {{payment__card_type}} {{payment__type}}.

Title: HipChat Alert for New Transaction

Campfire Zap
------------











