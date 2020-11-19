import React from 'react'
import logo from './logo.svg';
import './Header.css';

function Header() {
    return (


        <div className="fixedtop">
            
    <div class="container" id="header-container">
      <div class="row">
        <div class="col-2">
          <img src={logo}></img>
        </div>
        <div class="col-6" >
Thoughs
        </div>
        <div class="col-2">
          
              <div class="container">
          <button type="button" class="btn btn-dark">Home </button>
          <button type="button" class="btn btn-info">More</button>
          <button type="button" class="btn btn-info">Info</button>
          </div>

          
        </div>
      </div>
    </div>
</div>
    )
}

export default Header
