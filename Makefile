# Utility Makefile
#
# Requires Google Linter

all: lint

lint:
	gjslint ScriptingAPI.js

test_payment_1:
	curl https://api.paymill.com/v2/transactions -u bae1848b2c862af70ff97d830fe71f5e: \
  -d "amount=$$(date +%H%M)" \
  -d "currency=EUR" \
  -d "token=098f6bcd4621d373cade4e832627b4f6" \
  -d "description=Transaction for Payment of $$(date +%H%M) EUR"

test_payment_2:
	curl https://api.paymill.com/v2/transactions -u 4bed9ec493753d1b7f8314b1c2d8f4ff: \
  -d "amount=$$(date +%H%M)" \
  -d "currency=EUR" \
  -d "token=098f6bcd4621d373cade4e832627b4f6" \
  -d "description=Payment on test account 2 of $$(date +%H%M) EUR"
