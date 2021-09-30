import './App.css';
import NewsPage from './pages/NewsPage';
import FreeTalkPage from './pages/FreeTalkPage';
import { Route } from 'react-router';
import DetailPage from './pages/DetailPage';
import WrithPage from './pages/WritePage';

function App() {
  return (
    <div className='App'>
      <Route path={'/'} exact>
        <NewsPage />
      </Route>
      <Route path={'/freetalk'}>
        <FreeTalkPage />
      </Route>
      <Route path={'/detail'}>
        <DetailPage />
      </Route>
      <Route path={'/write'}>
        <WrithPage />
      </Route>
    </div>
  );
}

export default App;
