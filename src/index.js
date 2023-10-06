import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppBar  from './components/AppBar';
import ExploreMovie from './views/ExploreMovie';
import './styles/main.sass'
/**const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);**/
const RenderComponent  = {
  appBar(){
    const root = ReactDOM.createRoot(document.getElementById('appBar'));
    root.render(
    <React.StrictMode>
         <AppBar title="Movie Catalogue"/>
    </React.StrictMode>
    );
  },
  eploreMovie() {
    const root = ReactDOM.createRoot(document.getElementById('mainContent'));
    root.render(
    <React.StrictMode>
          <ExploreMovie/>
    </React.StrictMode>
    );
  },
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
window.addEventListener('DOMContentLoaded',(event)=>{
  RenderComponent.appBar();
  RenderComponent.eploreMovie();
  reportWebVitals();
})
