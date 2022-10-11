import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Index2 from './Index2';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const Root2 = ()=>{
//   return (
//     <GlobalConsumer>
//       {
        
//       }
//     </GlobalConsumer>
//   );
// }

root.render(
  <Index2 />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
