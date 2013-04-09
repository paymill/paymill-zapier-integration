var Zap = {

    /**
     * Executes before REST Hook subscription.
     *
     * @param  {Object} bundle Zapier bundle.
     * @return {Object}        Request Data.
     */
    pre_subscribe: function(bundle) {
        // Map Paymill web hook events to other keys since Zapier does not
        // support dots on Web Hook Event Name's
        var EVENTS = {
            'chargeback_executed' : 'chargeback.executed',

            'transaction_created' : 'transaction.created',
            'transaction_succeeded' : 'transaction.succeeded',
            'transaction_failed' : 'transaction.failed',

            'subscription_created' : 'subscription.created',
            'subscription_updated' : 'subscription.updated',
            'subscription_deleted' : 'subscription.deleted',

            'subscription_succeeded': 'subscription.succeeded',
            'subscription_failed' : 'subscription.failed',

            'refund_created' : 'refund.created',
            'refund_succeeded' : 'refund.succeeded',
            'refund_failed' : 'refund.failed'
        };
        var _evt = EVENTS[bundle.event];
        console.log('pre_subscribe: mapping bundle.event ', bundle.event,
         ' to ', _evt);
        bundle.request.data = JSON.stringify({
            'url': bundle.target_url,
            // set in 'Webhook: Event Name' trigger definition
            'event_types[]': [_evt]
        });
        return bundle.request;
    },
    /**
     * Store response to be accessible in pre_unsubscribe via subscribe_data.
     *
     * @param  {Object} bundle Zapier bundle.
     * @return {Object}        Response Data.
     */
    post_subscribe: function(bundle) {
        subscribe_data = JSON.parse(bundle.response.content);
        return subscribe_data;
    },
    /**
     * Unsubscribe REST Hook based on it's id, stored in post_subscribe.
     * Change request URL to:
     *     https://api.paymill.com/v2/webhooks/<web hook id>
     * @param  {Object} bundle Zapier bundle.
     * @return {Object}        Response Data.
     */
    pre_unsubscribe: function(bundle) {
        bundle.request.url = bundle.request.url + '/' +
         bundle.subscribe_data.id;
        bundle.request.method = 'DELETE';
        return bundle.request;
    }
};
