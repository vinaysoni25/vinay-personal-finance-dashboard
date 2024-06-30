import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';
import ExpenseTracker from './components/ExpenseTracker';
import BudgetPlanner from './components/BudgetPlanner';
import SavingsGoals from './components/SavingsGoals';
import Reports from './components/Reports';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/expenses" component={ExpenseTracker} />
          <Route path="/budget" component={BudgetPlanner} />
          <Route path="/savings" component={SavingsGoals} />
          <Route path="/reports" component={Reports} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
