import { Provider } from 'react-redux'
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Book Library</h1>
      </div>
    </Provider>
  );
}

export default App;
