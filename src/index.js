import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let sourse = {HomePage: '/#home', BuyPage: '/#buy', ContactPage: '/#contact',}
let contactArray = {Moscow: '+7-777-77-77', StPeterburg: '+7-888-88-88', Vladivostok: '+7-999-99-99',}
let addresArray = {
  Moscow: {
    city: 'Москва',
    street: 'Первая улица',
    numberOfHouse : '20, офис 3',
  },
  StPeterburg: {
    city: 'Санкт-Петербург',
    street: 'Центральная улица',
    numberOfHouse : '40, офис 6',
  },
  Vladivostok: {
    city: 'Владивосток',
    street: 'Крайняя улица',
    numberOfHouse : '60, офис 9',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <App sourse = {sourse} contactArray = {contactArray} addresArray = {addresArray}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
