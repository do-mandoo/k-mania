import logo from './logo.svg';
import './App.css';
import NewsTab from './pages/NewsTab';
import FreeTalkTab from './pages/FreeTalkTab';
import { Route } from 'react-router';

function App() {
  return (
    <div className='App'>
      <Route path={'/'} exact>
        <NewsTab />
      </Route>
      <Route path={'/freetalk'}>
        <FreeTalkTab />
      </Route>
    </div>
  );
}

export default App;
