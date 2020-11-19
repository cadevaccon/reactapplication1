import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './component/Header.js';
import Form from './component/Form.js';


function App() {
  /* function aler() {

    return document.getElementById("changeme").style.color="green";


} */


  /* the submit button was supposed to change the color of the text used to  green but no matter where i put it it reads it cannot read proprity style of null */

  var x=(
    <div class="main" >
      <Header />    {/* the menu background should be the same as the entire Header without messing up the background
                      of the Form color BUT it is not working */}
      <Form />
      
      
        </div>
  );
/*  aler(); */
  return x;
}

export default App;
