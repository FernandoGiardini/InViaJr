import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './routes/home';
import { Membros} from './routes/membros';
import { Login } from './routes/login';
import { Loading } from './routes/loading';
import WebFont from 'webfontloader';
import Admin from './routes/admDashboard';

const fontsLoaded = WebFont.load({
  google: {
    families: ['Amatic SC','Abel']
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
      <Route exact path='/' element={fontsLoaded ? <Loading/> : <App/>}/> 
      <Route path='home' element={fontsLoaded ? <Loading/> : <Home/>} />
      <Route path='membros' element={fontsLoaded ? <Loading/> : <Membros/>} />
      <Route path='login' element={fontsLoaded ? <Loading/> : <Login/>} />
      <Route path='Admin' element={fontsLoaded ? <Loading/> : <Admin/>} />
      <Route path="*" element={<Loading/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
