import React, { createContext, setGlobal } from 'reactn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import IndexPage from './pages/IndexPage';
import SamplePage from './pages/SamplePage';

import logo from './logo.svg';
import './App.css';

export const BasicContext = createContext({
});

const App: React.FC = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact>
            <IndexPage />
          </Route>
          <Route path="/Sample/:arg" exact>
            <SamplePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
