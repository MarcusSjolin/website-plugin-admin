var React = require("react")
var $ = require("jquery")

module.exports = React.createClass({
    getInitialState: function(){
        return {
            available: {},
            installed: [],
            activated: []
        };
    },
    componentWillMount () {
        $.ajax ({
            url: "/api/plugins"
        }).done(function (data) {
            this.setState({
                available: data.available,
                installed: data.installed,
                activated: data.activated
            })
        }.bind(this))
    },
    installPlugin (e) {
        var plugin = $(e.target).attr("data-plugin")
        var version = $(e.target).attr("data-version")
        
        $.ajax ({
            url: "/api/plugins/install",
            data: {
                plugin: plugin,
                version: version
            }
        }).done(function (data) {
            console.log(data)
        }.bind(this))
    },
    render () {
        return (
            <div className="container">
                <div className="page-header">
                    <h1>Plugins <small>Your summary of your plugins.</small></h1>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Activated</h3>
                    </div>
                    <div className="panel-body">
                        {this.state.activated.map(function(plugin) {
                            return (
                                <div className="col-md-3">
                                    <b>{plugin.name} ({plugin.version})</b>
                                </div>
                            )
                        }.bind(this))}
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Installed</h3>
                    </div>
                    <div className="panel-body">
                        {this.state.installed.map(function(plugin) {
                            return (
                                <div className="col-md-3">
                                    <b>{plugin}</b>
                                </div>
                            )
                        }.bind(this))}
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Available</h3>
                    </div>
                    <div className="panel-body">
                        {Object.keys(this.state.available).map(function(plugin) {
                            return (
                                <div className="col-md-3">
                                    <b>{plugin}</b>
                                    <ul>
                                        {Object.keys(this.state.available[plugin]).map(function(version) {
                                            return (
                                                <li>{version} <a data-plugin={plugin} data-version={version} onClick={this.installPlugin}>[Install]</a></li>
                                            )
                                        }.bind(this))}
                                    </ul>
                                </div>
                            )
                        }.bind(this))}
                    </div>
                </div>
            </div>
        );
  }
});
