var React = require("react/addons")
var Router = require("react-router")

var {Route, RouteHandler, DefaultRoute, NotFoundRoute} = Router;


var Header = require('./Partials/Header');
var App = React.createClass({
    render () {
        return (
            <div>
                <Header/>
                <RouteHandler/>
            </div>
        )
    }
});

var Home = require('./Pages/Index');
var Plugins = require('./Pages/Plugins');


var routes = (
    <Route handler={App} path="/">
        <Route name="Home" path="/admin" handler={Home} />
        <Route name="Plugins" path="/admin/plugins" handler={Plugins} />
        <DefaultRoute handler={Home} />
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('main-container'));
});
