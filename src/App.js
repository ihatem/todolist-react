import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/main.sass";
import { TodoProvider } from "./todosContext";

import Nav from "./components/nav";
import TodosPage from "./components/TodosPage";
import AddTodoItem from "./components/addTodoItem";

const App = () => {
  return (
    <div className="App">
      <TodoProvider>
        <Router>
          <Route component={Nav} />
          <Route component={AddTodoItem} />
          <div className="routesWrap">
            <div className="routes">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={props => (
                    <TodosPage {...props} pageName="undone" />
                  )}
                />
                <Route
                  exact
                  path="/done"
                  component={props => <TodosPage {...props} pageName="done" />}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </TodoProvider>
    </div>
  );
};

export default App;
