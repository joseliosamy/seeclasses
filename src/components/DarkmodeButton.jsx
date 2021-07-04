


import styles from '../styles/components/DarkmodeButton.module.css';


export default function DarkmodeButton(){
  var toggleButtonCounter = 0;

  function setCookie(name,value){   

    var date = new Date();
    date.setTime(date.getTime()+(40*24*60*60*1000));

    var expires = date.toUTCString();

    document.cookie = name+"="+value+"; expires="+expires+"; path=/";
  }

  function setModeButton(){
    if(document.cookie.substring(8) == 0){
      toggleButtonCounter = 1;
      setCookie('Schemma',1);
      console.log(toggleButtonCounter);
      toggleMode()
    }
   
    else if(document.cookie.substring(8) == 1){
      toggleButtonCounter = 0;
      setCookie('Schemma',0);
      console.log(toggleButtonCounter);
    } 

  }

  function toggleMode(){
    const headerBack = document.querySelector('.Header_nav__3t45C');
    if(toggleButtonCounter == 1){
      headerBack.style.background = 'var(--schemma-dark-weak)'
    }
    
    if(toggleButtonCounter == 0){
      
      input.style.background = '#000'; 
    }
  }

  return (
    <div className="toggleMode">
      <span>Mode</span>
      <input type="checkbox" className="inputToggle" onClick={setModeButton}/>
    </div>
  )
}