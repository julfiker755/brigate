import { Provider } from 'react-redux'
import './App.css';
import store from './Redux/store';
import {RouterProvider} from "react-router-dom";
import routes from './Components/routes/routes';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <RouterProvider router={routes} />
    </div>
    </Provider>
  );
}

export default App;
