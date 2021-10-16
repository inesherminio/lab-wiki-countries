import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route
              path="/:cca3"
              render={(routeProps) => <CountryDetails {...routeProps} />}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
