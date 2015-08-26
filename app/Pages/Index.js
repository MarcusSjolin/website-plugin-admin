var React = require("react")

module.exports = React.createClass({
  render: function() {
    return (
        <div className="container">
            <div className="page-header">
                <h1>Dashboard <small>Your summary of your application.</small></h1>
            </div>

            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Stats</h3>
                </div>
                <div className="panel-body">
                    <div className="col-md-3">Stats1</div>
                    <div className="col-md-3">Stats2</div>
                    <div className="col-md-3">Stats3</div>
                    <div className="col-md-3">Stats4</div>
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
