import React from 'react'
import './Form.css'

function Form() {
    
  const  aler=() =>alert (  `Submit succefull` ) ;
  
    var x= (
        <div>
            <div class="col">
    <div class="container">
    <form name="form1" action="aler()">
        
            
        <div class="row">
          <div class="col-2"></div>
         <div class="col-3" id="changeme"> First Name:<br></br>
         Last Name:<br></br>
         Email :<br></br>
         Gender : <br></br>
         Comments :
         </div>
         <div class="col-5" >
          <input type="text" defaultValue="" id="first-name"  ></input><br></br>
          
          <input type="text" defaultValue="" id="last-name"  ></input><br></br>
         
          <input type="text" defaultValue="" id="email"  ></input><br></br>
         
          <input type="radio" id="male" name="gender" value="male"></input>Male
          <input type="radio" id="female" name="gender" value="male"></input>Female<br></br>
          <textarea name="comment" defaultValue="" id="comment"  ></textarea><br></br>
                    
          </div>


          </div>
          <div class="row"><div class="col-2"></div>
            <div class="col-3">
            <span><input type="reset" value="Reset" class="btn btn-secondary"></input></span>
            </div>
            <div class="col-5">
            <input type="submit" value="Submit" onClick={aler} class="btn btn-primary"></input>
            </div>
            
          </div>
          </form>

    </div>
    </div>

        </div>
    );
    
    return x;
}

export default Form
