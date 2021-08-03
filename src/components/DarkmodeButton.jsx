

import React, { useState, useEffect } from 'react'
import Router from 'next/router';
import styles from '../styles/components/DarkmodeButton.module.css';


export default function DarkmodeButton(){

  //Funcao que cria o cookie com o modo sendo passado por parametro pelo setModeButton
  function setCookie(name,value){   
    var date = new Date();  
    date.setTime(date.getTime()+(365*24*60*60*1000));
    var expires = date.toUTCString();

    document.cookie = name+"="+value+"; expires="+expires+"; path=/";
  }

  //Função para obter o valor do cookie
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  //Funcao que aplica o modo com a acão do clique no checkbox
  function setModeButton(){
    //Variavel que contem o valor do relativo ao tema, 1=dark, 0=light
    const cookieMode = getCookie("theme")

    //Aplicando o valor do tema dark=1
    if(cookieMode == 0){
      setCookie('theme', 1);
      toggleMode();
      // console.log(cookieMode);
    }
    //Aplicando o valor do tema light=1
    else if(cookieMode == 1){
      setCookie('theme', 0);
      toggleMode();
      // console.log(cookieMode);
    } 
    return
  }

  
  //Funcao que modifica as cores das variáveis do sistema de acordo com o cookie 'theme'
  function toggleMode(){
    const cookieMode = getCookie('theme')
    const styleBody = document.body.style;
    
    //DARK
    if(cookieMode == 1){
      //Text
      styleBody.setProperty('--text', '#d8d8d8');
      //Objects
      styleBody.setProperty('--objects-2', '#fff');
      //Schemma
      styleBody.setProperty('--schemma', '#0d1117');
      //Schemma-weak
      styleBody.setProperty('--schemma-weak', '#0d1117');
      //Schemma-fade
      styleBody.setProperty('--schemma-fade', '#161b22');
      //Schemma-fade-1
      styleBody.setProperty('--schemma-fade-1', '#161b22e5');
      //Schemma-fade-2
      styleBody.setProperty('--schemma-fade-2', '#2299dd01');
      //Background
      styleBody.setProperty('--background', '#161b22');
      //Checkbox true
      document.querySelector('.DarkmodeButton_inputToggle__1Zuq_').checked = true;

      //Tratando o erro do banner, estava dando choque na troca de página

      if(!document.querySelector(".Home_banner__2xk5c")) return

      //Banner dark
      document.querySelector(".Home_banner__2xk5c").style = 'background-image: url(https://raw.githubusercontent.com/joseliosamy/seeclasses/master/public/images/banner1.jpg)'
      
      // console.log('executado')
    }   

    // ------------------------------------------------------------------------

    //LIGHT
    if(cookieMode == 0){
      //Text
      styleBody.setProperty('--text', '#4e4e4e');
      //Objects
      styleBody.setProperty('--objects-2', '#2e75e0');
      //Schemma
      styleBody.setProperty('--schemma', '#2e75e0');
      //Schemma-weak
      styleBody.setProperty('--schemma-weak', '#30a9f0');
      //Schemma-fade-1
      styleBody.setProperty('--schemma-fade', '#f3f3f3');
      //Schemma-fade-1
      styleBody.setProperty('--schemma-fade-1', '#f5f5f5e5');
      //Schemma-fade-2
      styleBody.setProperty('--schemma-fade-2', '#f8f8f800');
      //Background
      styleBody.setProperty('--background', '#f3f3f3');
      //Checkbox false
      document.querySelector('.DarkmodeButton_inputToggle__1Zuq_').checked = false;

      
      //Tratando o erro do banner, estava dando choque na troca de página
      if(!document.querySelector(".Home_banner__2xk5c")) return

      //Banner light
      document.querySelector(".Home_banner__2xk5c").style = 'background-image: url(https://raw.githubusercontent.com/joseliosamy/seeclasses/4506a52360021bb2c541c27cf3ab0f25a0c9ca8c/public/images/banner.svg)'
      
      //Evitar que o banner já setado seja setado novamente
      if(cookieMode == 0) return

    }
  }
  Router.events.on("routeChangeComplete", (url)=> {
    if(url == '/'){
      //Banner dark
      if( getCookie('theme') == 1 ){
        document.querySelector(".Home_banner__2xk5c").style = 'background-image: url(https://raw.githubusercontent.com/joseliosamy/seeclasses/master/public/images/banner1.jpg)'
      }
      else if( getCookie('theme') == 0 ){
        document.querySelector(".Home_banner__2xk5c").style = 'background-image: url(https://raw.githubusercontent.com/joseliosamy/seeclasses/4506a52360021bb2c541c27cf3ab0f25a0c9ca8c/public/images/banner.svg)'
      }
    }
  })
  
  useEffect(toggleMode, []);
  
  return (
    <div className={styles.toggleMode}>
      <span>Mode</span>
      <input type="checkbox" className={styles.inputToggle} onClick={setModeButton}/>
    </div>
  )
}