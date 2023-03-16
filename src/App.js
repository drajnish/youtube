import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import './App.css';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
      <div className="font-Roboto">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
