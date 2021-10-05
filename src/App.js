import './App.css';
import NewsPage from './pages/NewsPage';
import FreeTalkPage from './pages/FreeTalkPage';
import { Route } from 'react-router';
import DetailPage from './pages/DetailPage';
import WrithPage from './pages/WritePage';
import NoPage from './components/common/NoPage';
import SearchPage from './pages/SearchPage';
import data from './Data';

function App() {
  // const findid = data.map(da => da);
  // const id = findid.map(id => id.id);
  // console.log(id, 'app.js에서의 data');
  return (
    <div className='App'>
      <Route path={'/'} exact>
        <NewsPage />
      </Route>
      <Route path={'/freetalk'}>
        <FreeTalkPage />
      </Route>
      <Route path={'/:id'}>
        <DetailPage />
      </Route>
      <Route path={'/write'}>
        <WrithPage />
      </Route>
      <Route path={'/none'}>
        <NoPage />
      </Route>
      <Route path={'/search'}>
        <SearchPage />
      </Route>
    </div>
  );
}

export default App;
