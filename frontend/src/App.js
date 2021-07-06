
import './App.css';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware } from 'redux';
function App() {
  const store =createStore(reducer,applyMiddleware(thunk));
  return (
    <Provider store={store}>
    <div className="container">
        <ProductForm />
        <ProductList />
    </div>
    </Provider>
  );
}
export default App;
