
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import store from './Redux/Store';
import { router } from './Routes/Routes/Routes';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
      <Toaster />
    </div>
  );
}

export default App;
