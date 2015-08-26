var React = require("react/addons")
var Router = require("react-router")

var {Route, RouteHandler, DefaultRoute, NotFoundRoute} = Router;

var App = React.createClass({
    render () {
        return (
            <div>
                <RouteHandler/>
            </div>
        )
    }
});

var Home = require('./Pages/Index');


var routes = (
    <Route handler={App} path="/admin/?">
        <Route name="Home" path="/" handler={Home} />
        <DefaultRoute handler={Home} />
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('main-container'));
});
