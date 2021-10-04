import './App.css';
import NewsPage from './pages/NewsPage';
import FreeTalkPage from './pages/FreeTalkPage';
import { Route } from 'react-router';
import DetailPage from './pages/DetailPage';
import WrithPage from './pages/WritePage';
import NoPage from './components/common/NoPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className='App'>
      <Route path={['/news', '/']} exact>
        <NewsPage />
      </Route>
      <Route path={'/freeTalk'}>
        <FreeTalkPage />
      </Route>
      <Route path={'/@:postId'}>
        <DetailPage />
      </Route>
      <Route path={'/newsWrite'}>
        <WrithPage />
      </Route>
      <Route path={'/freeTalkWrite'}>
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
