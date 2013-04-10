# Utility Makefile
#
# Requires Google Linter
# 
all: lint

lint:
	gjslint ScriptingAPI.js

payment:
	curl https://api.paymill.com/v2/transactions \
  -u bae1848b2c862af70ff97d830fe71f5e: \
  -d "amount=$$(date +%H%M)" \
  -d "currency=EUR" \
  -d "token=098f6bcd4621d373cade4e832627b4f6" \
  -d "description=Transaction for Payment of $$(date +%H%M) EUR"
