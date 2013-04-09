var Zap = {
    /**
     * Executes before REST Hook subscription.
     *
     * @param  {Object} bundle Zapier bundle.
     * @return {Object}        Request Data.
     */
    pre_subscribe: function(bundle) {
        bundle.request.data = JSON.stringify({
            'url': bundle.target_url,
            // set in 'Webhook: Event Name' trigger definition
            'event_types': [bundle.event]
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
