import { Provider } from 'react-redux';
import store from './redux/store';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import './App.css';

function App ()
{
  return (
    <Provider store={ store }>
      <div className="App">
        <h1>Book Library</h1>
        <AddBook />
        <BookList />
      </div>
    </Provider>
  );
}

export default App;
