var React = require("react")
var $ = require("jquery")

module.exports = React.createClass({
    getInitialState: function(){
        return {
            plugins: {}
        };
    },
    componentWillMount () {
        $.ajax ({
            url: "/api/plugins"
        }).done(function (data) {
            this.setState({
                plugins: data.data
            })
            console.log(this.state.plugins)
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
                        <h3 className="panel-title">Available</h3>
                    </div>
                    <div className="panel-body">
                        {Object.keys(this.state.plugins).map(function(plugin) {
                            return (
                                <div className="col-md-3">
                                    <b>{plugin}</b>
                                    <ul>
                                        {Object.keys(this.state.plugins[plugin]).map(function(version) {
                                            return (
                                                <li>{version}</li>
                                            )
                                        }.bind(this))}
                                    </ul>
                                </div>
                            )
                        }.bind(this))}
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Other</h3>
                    </div>
                    <div className="panel-body">
                        <div className="col-md-3">Other1</div>
                        <div className="col-md-3">Other2</div>
                        <div className="col-md-3">Other3</div>
                        <div className="col-md-3">Other4</div>
                    </div>
                </div>
            </div>
        );
  }
});
