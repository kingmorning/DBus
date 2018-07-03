var React = require('react');
var Reflux = require('reflux');
var $ = require('jquery')
var utils = require('../common/utils');

var actions = Reflux.createActions([ 'geturl']);

var store = Reflux.createStore({
    state: {
       url:"",
    },
    initState: function() {
        return this.state;
    },
    listenables: [actions],
    onGeturl:function(){
        var self = this;
        $.get(utils.builPath("config/initialLoad"), function(result) {
            if(result.status !== 200) {
                console.info("加载失败");
                alert("加载失败");
                return;
            }
            result = result.data.global_config;
            self.state.url=result.collect_url+"?userName="+result.loginUser;
            self.trigger(self.state);
        });
    },
});

store.actions = actions;
module.exports = store;

