import './App.css';
import NewsTab from './pages/NewsTab';
import FreeTalkTab from './pages/FreeTalkTab';
import { Route } from 'react-router';
import Detail from './pages/Detail';

function App() {
  return (
    <div className='App'>
      <Route path={'/'} exact>
        <NewsTab />
      </Route>
      <Route path={'/freetalk'}>
        <FreeTalkTab />
      </Route>
      <Route path={'/detail'}>
        <Detail />
      </Route>
    </div>
  );
}

export default App;
