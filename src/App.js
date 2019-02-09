import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Loadable from "react-loadable";

import "./App.css";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import AsyncComponentLoader from "./components/AsyncComponentLoader/AsyncComponentLoader";
import MainPage from "./scenes/MainPage/MainPage";
import NotFound from "./scenes/NotFound/NotFound";

// export const LoadSomeContainer = Loadable({
//   loader: () => import(/* webpackChunkName: "SomeContainerChunk"*/ './containers/SomeContainer/SomeContainer'),
//   loading: AsyncComponentLoader,
//   delay: 400,
//   timeout: 10000, // 10 seconds
//   modules: ['SomeContainerChunk']
// });

// const PrivateRoutes = () => (
//   <Fragment>
//     <Navbar />

//     <Switch>
//       <Route exact path="/" component={SomePrivate} />
//       <Route path="/private" component={SomePrivate2} />
//       <Redirect to="/" />
//     </Switch>
//   </Fragment>
// );

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={MainPage} />
          {/* <PrivateRoute path="/private" component={PrivateRoutes} /> */}
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Fragment>
    );
  }
}

export default App;