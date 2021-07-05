


import styles from '../styles/components/DarkmodeButton.module.css';


export default function DarkmodeButton(){

  //Funcao que cria o cookie com o modo sendo passado por parametro pelo setModeButton
  function setCookie(name,value){   
    var date = new Date();  
    date.setTime(date.getTime()+(365*24*60*60*1000));
    var expires = date.toUTCString();

    document.cookie = name+"="+value+"; expires="+expires+"; path=/";
  }

  //Funcao que aplica o modo com a acão do clique no checkbox
  function setModeButton(){
    //Variavel que contem o valor do relativo ao tema, 1=dark, 0=light
    const cookieMode = document.cookie.substring(6);

    //Aplicando o valor do tema dark=1
    if(cookieMode == 0){
      setCookie('theme', 1);
      console.log(cookieMode);
      toggleMode();
    }
    //Aplicando o valor do tema light=1
    else if(cookieMode == 1){
      setCookie('theme', 0);
      console.log(cookieMode);
      toggleMode();
    } 
    return
  }
  
  //Funcao que lê o cookie e aplica o tema relativo ao valor de cookieModeState
  async function getModeExec(){
    if(document.cookie.substring(6) == 0 || document.cookie.substring(6) == 1){
      toggleMode();
    }
    return
  }
  getModeExec();
  
  //Funcao que modifica as cores das variáveis do sistema de acordo com o cookie 'theme'
  function toggleMode(){
    const cookieMode = document.cookie.substring(6);
    const styleBody = document.body.style;

    //DARK
    if(cookieMode == 1){
      //Schemma
      styleBody.setProperty('--schemma', '#0d1117');
      //Schemma-weak
      styleBody.setProperty('--schemma-weak', '#161b22');
      //Schemma-fade
      styleBody.setProperty('--schemma-fade', '#0d1117');
      document.querySelector(".Home_fade__3NAki").style.setProperty('background','linear-gradient(360deg, var(--schemma-fade) 0%, rgba(13, 17, 23, 0.897) 20%, rgba(34,153,221,0) 100%)');
      //Background
      styleBody.setProperty('--background', '#0d1117');

      //Checkbox true
      document.querySelector('.DarkmodeButton_inputToggle__1Zuq_').checked = true;

      //Tratando o erro do banner, estava dando choque na troca de página
      if(!document.querySelector(".Home_banner__2xk5c")) return
      //Banner dark
      document.querySelector(".Home_banner__2xk5c").style = 'background-image: url(https://github.com/joseliosamy/seeclasses/blob/master/public/images/banner1.jpg?raw=true)'

      return
    }   
    //LIGHT
    if(cookieMode == 0){
      //Schemma
      styleBody.setProperty('--schemma', '#02ff6c');
      //Schemma-weak
      styleBody.setProperty('--schemma-weak', '#55e08a');
      //Schemma-fade
      styleBody.setProperty('--schemma-fade', '#fff');
      document.querySelector(".Home_fade__3NAki").style.setProperty('background','linear-gradient(360deg, var(--schemma-fade) 0%, #f5f5f5e5 20%, #f5f5f500 100%)');
      //Background
      styleBody.setProperty('--background', '#fff');
      //Checkbox false
      document.querySelector('.DarkmodeButton_inputToggle__1Zuq_').checked = false;

      //Tratando o erro do banner, estava dando choque na troca de página
      if(!document.querySelector(".Home_banner__2xk5c")) return

      //Evitar que o banner já setado seja setado novamente
      if(cookieMode == 0) return
      //Banner light
      document.querySelector(".Home_banner__2xk5c").style = 'background-image: url(https://github.com/joseliosamy/seeclasses/blob/master/public/images/banner.jpg?raw=true)'

      return
    }
  }

  return (
    <div className={styles.toggleMode}>
      <span>Mode</span>
      <input type="checkbox" className={styles.inputToggle} onClick={setModeButton}/>
    </div>
  )
}