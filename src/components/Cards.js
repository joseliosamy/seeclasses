
import NProgress from 'nprogress';
import Openvideo from './Openvideo'

export default function Cards() {
  //IR NA API E TRAZER O CONTEUDO E TRANFORMA-LO EM JSON
  async function consumeCards() {
    try {
      const response = await fetch('https://api-seeclasses.vercel.app/');
      const data = await response.json();
      show(data)
    } catch (error) {
      console.log(error);
    }
  }
  consumeCards();

  //MOSTRAR O CONTEUDO JÁ TRANSFORMADO
  function show(items){
    let output = "";
    var materia = items[0];
    //CONSEGUINDO O NOME DA MATERIA VIA GET
    const convertPath = ()=>{
      let pathname = window.location.pathname;
      return pathname = pathname.substring(9);
    }
    const matter = convertPath()

    function scrollTop(){
      window.scroll({
        top: 60,
        behavior: 'smooth'
      })
    }
    //CALCULO
    //VERIFICAR A PATHNAME, E INSERIR O CONTEUDO DE ACORDO
    if(window.location.pathname == `/materias/calculo`){
      //VERIFICAR SE A QUANTIDADE DE CARDS EXISTENTES NA PÁGINA É IGUAL AO DA API, SE NÃO FOR, RETURN
      if(document.querySelectorAll(".card").length === materia.calculo.length){
        return
      }
      for(let i=0; i <= materia.calculo.length;i++){
        // console.log(materia.calculo[i].card.cardHeader.title)
        // console.log(matter)
        output += `
            <div class="card">

            <div class="cardHeader">
              <img src="https://github.com/joseliosamy/seeclasses/blob/master/public/images/thumbl/${matter}/aula${i+1}.jpg?raw=true" alt=""/>
            </div>

            <div class="cardBody">
              <div class="descrip">
                <p>${materia.calculo[i].card.cardHeader.title.substring(0, materia.calculo[i].card.cardHeader.title.length - 8)}</p>
                <p>Descrição que abrange todo o conteudo relacionado a aula subsquente</p>
              </div>
              <div class="bar">
                <div class="info">
                  <p>${materia.calculo[i].card.cardBody.date.substring(0,5)}</p> 
                  <p>Fred</p>
                </div>
                <div class="see">
                  <p data-id="${i + 1}">       
                    
                    <svg version="1.1" id="Capa_1"    
                    x="0px" y="0px"
                      viewBox="0 0 511.999 511.999" enableBackground="new 0 0 511.999 511.999;">
                    <g>
                      <g>
                        <path d="M443.86,196.919L141.46,10.514C119.582-2.955,93.131-3.515,70.702,9.016c-22.429,12.529-35.819,35.35-35.819,61.041
                          v371.112c0,38.846,31.3,70.619,69.77,70.829c0.105,0,0.21,0.001,0.313,0.001c12.022-0.001,24.55-3.769,36.251-10.909
                          c9.413-5.743,12.388-18.029,6.645-27.441c-5.743-9.414-18.031-12.388-27.441-6.645c-5.473,3.338-10.818,5.065-15.553,5.064
                          c-14.515-0.079-30.056-12.513-30.056-30.898V70.058c0-11.021,5.744-20.808,15.364-26.183c9.621-5.375,20.966-5.135,30.339,0.636
                          l302.401,186.405c9.089,5.596,14.29,14.927,14.268,25.601c-0.022,10.673-5.261,19.983-14.4,25.56L204.147,415.945
                          c-9.404,5.758-12.36,18.049-6.602,27.452c5.757,9.404,18.048,12.36,27.452,6.602l218.611-133.852
                          c20.931-12.769,33.457-35.029,33.507-59.55C477.165,232.079,464.729,209.767,443.86,196.919z"/>
                      </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    </svg>
                    Assistir 
                  </p>
                </div>
              </div>
            </div>
          </div>
        `
        if(i == materia.calculo.length - 1){
          break
        }//CONTROLE PARA NAO BUGAR O FOR. AQUELE MENOS 1 ALI SALVOU A VIDA
      }
      document.querySelector('.cardsWrapper').insertAdjacentHTML("afterbegin", output);


    setTimeout(() => {
      const openVideo = document.querySelectorAll('.see p');
      const divWindowName =  document.querySelector('.windowName');
      const videoFull = document.querySelector('.videoFull');
    
      openVideo.forEach(e => {
        e.addEventListener('click', ()=>{
          const pageVideoId = e.getAttribute("data-id");

          // BUSCA O TAMANHO DO ARRAY QUE CONTEM OS CARDS
          for(let i = 0; i < materia.calculo.length; i++){
            const apiVideoId = materia.calculo[i].card.id;

            if(pageVideoId == apiVideoId){
              if(document.querySelector('.videoFull')){ 
                scrollTop()
                document.querySelector('.video').parentElement.removeChild(document.querySelector('.video'));
                document.querySelector('.videoFull').insertAdjacentHTML('afterbegin', `
                  <div class="video">
                    <iframe src="https://www.youtube.com/embed/${materia.calculo[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                `)
                return
              }else{
                scrollTop()
                divWindowName.insertAdjacentHTML('afterend', `
                  <div class="videoFull">
                    <div class="video">
                      <iframe src="https://www.youtube.com/embed/${materia.calculo[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                `)
              }

            }
          } // for
        }) // addevent
      }); // for each
    }, 400); // settimeout
    }



    //FISICA
    //VERIFICAR A PATHNAME, E INSERIR O CONTEUDO DE ACORDO
    else if(window.location.pathname == `/materias/fisica`){
      materia = items[1];
      //VERIFICAR SE A QUANTIDADE DE CARDS EXISTENTES NA PÁGINA É IGUAL AO DA API, SE NÃO FOR, RETURN
      if(document.querySelectorAll(".card").length === materia.fisica.length){
        return
      }
      for(let i=0; i <= materia.fisica.length;i++){
        // console.log(materia.fisica[i].card.cardHeader.title)
        // console.log(matter)
        output += `
            <div class="card">

            <div class="cardHeader">
              <img src="https://github.com/joseliosamy/seeclasses/blob/master/public/images/thumbl/${matter}/aula${i+1}.jpg?raw=true" alt=""/>
            </div>

            <div class="cardBody">
              <div class="descrip">
                <p>${materia.fisica[i].card.cardHeader.title.substring(0, materia.fisica[i].card.cardHeader.title.length - 8)}</p>
                <p>Descrição que abrange todo o conteudo relacionado a aula subsquente</p>
              </div>
              <div class="bar">
                <div class="info">
                  <p>${materia.fisica[i].card.cardBody.date.substring(0,5)}</p> 
                  <p>Paulo Cesar</p>
                </div>
                <div class="see">
                  <p data-id="${i + 1}">       
                    
                    <svg version="1.1" id="Capa_1"    
                    x="0px" y="0px"
                      viewBox="0 0 511.999 511.999" enableBackground="new 0 0 511.999 511.999;">
                    <g>
                      <g>
                        <path d="M443.86,196.919L141.46,10.514C119.582-2.955,93.131-3.515,70.702,9.016c-22.429,12.529-35.819,35.35-35.819,61.041
                          v371.112c0,38.846,31.3,70.619,69.77,70.829c0.105,0,0.21,0.001,0.313,0.001c12.022-0.001,24.55-3.769,36.251-10.909
                          c9.413-5.743,12.388-18.029,6.645-27.441c-5.743-9.414-18.031-12.388-27.441-6.645c-5.473,3.338-10.818,5.065-15.553,5.064
                          c-14.515-0.079-30.056-12.513-30.056-30.898V70.058c0-11.021,5.744-20.808,15.364-26.183c9.621-5.375,20.966-5.135,30.339,0.636
                          l302.401,186.405c9.089,5.596,14.29,14.927,14.268,25.601c-0.022,10.673-5.261,19.983-14.4,25.56L204.147,415.945
                          c-9.404,5.758-12.36,18.049-6.602,27.452c5.757,9.404,18.048,12.36,27.452,6.602l218.611-133.852
                          c20.931-12.769,33.457-35.029,33.507-59.55C477.165,232.079,464.729,209.767,443.86,196.919z"/>
                      </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    </svg>
                    Assistir 
                  </p>
                </div>
              </div>
            </div>
          </div>
        `
        if(i == materia.fisica.length - 1){
          break
        }//CONTROLE PARA NAO BUGAR O FOR. AQUELE MENOS 1 ALI SALVOU A VIDA
      }
      document.querySelector('.cardsWrapper').insertAdjacentHTML("afterbegin", output);

      setTimeout(() => {
        const openVideo = document.querySelectorAll('.see p');
        const divWindowName =  document.querySelector('.windowName');
        const videoFull = document.querySelector('.videoFull');
      
        openVideo.forEach(e => {
          e.addEventListener('click', ()=>{
            const pageVideoId = e.getAttribute("data-id");
  
            // BUSCA O TAMANHO DO ARRAY QUE CONTEM OS CARDS
            for(let i = 0; i < materia.fisica.length; i++){
              const apiVideoId = materia.fisica[i].card.id;
  
              if(pageVideoId == apiVideoId){
                if(document.querySelector('.videoFull')){
                  scrollTop()
                  document.querySelector('.video').parentElement.removeChild(document.querySelector('.video'));
                  document.querySelector('.videoFull').insertAdjacentHTML('afterbegin', `
                    <div class="video">
                      <iframe src="https://www.youtube.com/embed/${materia.fisica[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  `)
                  return
                }else{
                  scrollTop()
                  divWindowName.insertAdjacentHTML('afterend', `
                    <div class="videoFull">
                      <div class="video">
                        <iframe src="https://www.youtube.com/embed/${materia.fisica[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                  `)
                }
  
              }
            } // for
          }) // addevent
        }); // for each
      }, 400); // settimeout
    }



    //VETORIAL
    //VERIFICAR A PATHNAME, E INSERIR O CONTEUDO DE ACORDO
    else if(window.location.pathname == `/materias/calculo-vetorial`){
      materia = items[2 ];
      //VERIFICAR SE A QUANTIDADE DE CARDS EXISTENTES NA PÁGINA É IGUAL AO DA API, SE NÃO FOR, RETURN
      if(document.querySelectorAll(".card").length === materia.vetorial.length){
        return
      }
      for(let i=0; i <= materia.vetorial.length;i++){
        // console.log(materia.fisica[i].card.cardHeader.title)
        // console.log(matter)
        output += `
            <div class="card">

            <div class="cardHeader">
              <img src="https://github.com/joseliosamy/seeclasses/blob/master/public/images/thumbl/vetorial/aula${i+1}.jpg?raw=true" alt=""/>
            </div>

            <div class="cardBody">
              <div class="descrip">
                <p>${materia.vetorial[i].card.cardHeader.title.substring(0, materia.vetorial[i].card.cardHeader.title.length - 8)}</p>
                <p>Descrição que abrange todo o conteudo relacionado a aula subsquente</p>
              </div>
              <div class="bar">
                <div class="info">
                  <p>${materia.vetorial[i].card.cardBody.date.substring(0,5)}</p> 
                  <p>Valdeniza</p>
                </div>
                <div class="see">
                  <p data-id="${i + 1}">       
                    
                    <svg version="1.1" id="Capa_1"    
                    x="0px" y="0px"
                      viewBox="0 0 511.999 511.999" enableBackground="new 0 0 511.999 511.999;">
                    <g>
                      <g>
                        <path d="M443.86,196.919L141.46,10.514C119.582-2.955,93.131-3.515,70.702,9.016c-22.429,12.529-35.819,35.35-35.819,61.041
                          v371.112c0,38.846,31.3,70.619,69.77,70.829c0.105,0,0.21,0.001,0.313,0.001c12.022-0.001,24.55-3.769,36.251-10.909
                          c9.413-5.743,12.388-18.029,6.645-27.441c-5.743-9.414-18.031-12.388-27.441-6.645c-5.473,3.338-10.818,5.065-15.553,5.064
                          c-14.515-0.079-30.056-12.513-30.056-30.898V70.058c0-11.021,5.744-20.808,15.364-26.183c9.621-5.375,20.966-5.135,30.339,0.636
                          l302.401,186.405c9.089,5.596,14.29,14.927,14.268,25.601c-0.022,10.673-5.261,19.983-14.4,25.56L204.147,415.945
                          c-9.404,5.758-12.36,18.049-6.602,27.452c5.757,9.404,18.048,12.36,27.452,6.602l218.611-133.852
                          c20.931-12.769,33.457-35.029,33.507-59.55C477.165,232.079,464.729,209.767,443.86,196.919z"/>
                      </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    </svg>
                    Assistir 
                  </p>
                </div>
              </div>
            </div>
          </div>
        `
        if(i == materia.vetorial.length - 1){
          break
        }//CONTROLE PARA NAO BUGAR O FOR. AQUELE MENOS 1 ALI SALVOU A VIDA
      }
      document.querySelector('.cardsWrapper').insertAdjacentHTML("afterbegin", output);

      setTimeout(() => {
        const openVideo = document.querySelectorAll('.see p');
        const divWindowName =  document.querySelector('.windowName');
        const videoFull = document.querySelector('.videoFull');
      
        openVideo.forEach(e => {
          e.addEventListener('click', ()=>{
            const pageVideoId = e.getAttribute("data-id");
  
            // BUSCA O TAMANHO DO ARRAY QUE CONTEM OS CARDS
            for(let i = 0; i < materia.vetorial.length; i++){
              const apiVideoId = materia.vetorial[i].card.id;
  
              if(pageVideoId == apiVideoId){
                if(document.querySelector('.videoFull')){
                  scrollTop()
                  document.querySelector('.video').parentElement.removeChild(document.querySelector('.video'));
                  document.querySelector('.videoFull').insertAdjacentHTML('afterbegin', `
                    <div class="video">
                      <iframe src="https://www.youtube.com/embed/${materia.vetorial[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  `)
                  return
                }else{
                  scrollTop()
                  divWindowName.insertAdjacentHTML('afterend', `
                    <div class="videoFull">
                      <div class="video">
                        <iframe src="https://www.youtube.com/embed/${materia.vetorial[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                  `)
                }
  
              }
            } // for
          }) // addevent
        }); // for each
      }, 400); // settimeout
    }



    //INTRO PROG
    else if(window.location.pathname == `/materias/intro-programacao`){
      materia = items[3];
      //VERIFICAR SE A QUANTIDADE DE CARDS EXISTENTES NA PÁGINA É IGUAL AO DA API, SE NÃO FOR, RETURN
      if(document.querySelectorAll(".card").length === materia.introProg.length){
        return
      }
      for(let i=0; i <= materia.introProg.length;i++){
        // console.log(materia.fisica[i].card.cardHeader.title)
        // console.log(matter)
        output += `
            <div class="card">

            <div class="cardHeader">
              <img src="https://github.com/joseliosamy/seeclasses/blob/master/public/images/thumbl/introProg/aula${i+1}.jpg?raw=true" alt=""/>
            </div>

            <div class="cardBody">
              <div class="descrip">
                <p>${materia.introProg[i].card.cardHeader.title.substring(0, materia.introProg[i].card.cardHeader.title.length - 8)}</p>
                <p>Descrição que abrange todo o conteudo relacionado a aula subsquente</p>
              </div>
              <div class="bar">
                <div class="info">
                  <p>${materia.introProg[i].card.cardBody.date.substring(0,5)}</p> 
                  <p>Carlos</p>
                </div>
                <div class="see">
                  <p data-id="${i + 1}">       
                    
                    <svg version="1.1" id="Capa_1"    
                    x="0px" y="0px"
                      viewBox="0 0 511.999 511.999" enableBackground="new 0 0 511.999 511.999;">
                    <g>
                      <g>
                        <path d="M443.86,196.919L141.46,10.514C119.582-2.955,93.131-3.515,70.702,9.016c-22.429,12.529-35.819,35.35-35.819,61.041
                          v371.112c0,38.846,31.3,70.619,69.77,70.829c0.105,0,0.21,0.001,0.313,0.001c12.022-0.001,24.55-3.769,36.251-10.909
                          c9.413-5.743,12.388-18.029,6.645-27.441c-5.743-9.414-18.031-12.388-27.441-6.645c-5.473,3.338-10.818,5.065-15.553,5.064
                          c-14.515-0.079-30.056-12.513-30.056-30.898V70.058c0-11.021,5.744-20.808,15.364-26.183c9.621-5.375,20.966-5.135,30.339,0.636
                          l302.401,186.405c9.089,5.596,14.29,14.927,14.268,25.601c-0.022,10.673-5.261,19.983-14.4,25.56L204.147,415.945
                          c-9.404,5.758-12.36,18.049-6.602,27.452c5.757,9.404,18.048,12.36,27.452,6.602l218.611-133.852
                          c20.931-12.769,33.457-35.029,33.507-59.55C477.165,232.079,464.729,209.767,443.86,196.919z"/>
                      </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    </svg>
                    Assistir 
                  </p>
                </div>
              </div>
            </div>
          </div>
        `
        if(i == materia.introProg.length - 1){
          break
        }//CONTROLE PARA NAO BUGAR O FOR. AQUELE MENOS 1 ALI SALVOU A VIDA
      }
      document.querySelector('.cardsWrapper').insertAdjacentHTML("afterbegin", output);

      setTimeout(() => {
        const openVideo = document.querySelectorAll('.see p');
        const divWindowName =  document.querySelector('.windowName');
        const videoFull = document.querySelector('.videoFull');
      
        openVideo.forEach(e => {
          e.addEventListener('click', ()=>{
            const pageVideoId = e.getAttribute("data-id");
  
            // BUSCA O TAMANHO DO ARRAY QUE CONTEM OS CARDS
            for(let i = 0; i < materia.introProg.length; i++){
              const apiVideoId = materia.introProg[i].card.id;
  
              if(pageVideoId == apiVideoId){
                if(document.querySelector('.videoFull')){
                  scrollTop()
                  document.querySelector('.video').parentElement.removeChild(document.querySelector('.video'));
                  document.querySelector('.videoFull').insertAdjacentHTML('afterbegin', `
                    <div class="video">
                      <iframe src="https://www.youtube.com/embed/${materia.introProg[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  `)
                  return
                }else{
                  scrollTop()
                  divWindowName.insertAdjacentHTML('afterend', `
                    <div class="videoFull">
                      <div class="video">
                        <iframe src="https://www.youtube.com/embed/${materia.introProg[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                  `)
                }
  
              }
            } // for
          }) // addevent
        }); // for each
      }, 400); // settimeout
    }



    //INTRO PROG
    else if(window.location.pathname == `/materias/intro-computador`){
      materia = items[4];
      //VERIFICAR SE A QUANTIDADE DE CARDS EXISTENTES NA PÁGINA É IGUAL AO DA API, SE NÃO FOR, RETURN
      if(document.querySelectorAll(".card").length === materia.introComp.length){
        return
      }
      for(let i=0; i <= materia.introComp.length;i++){
        // console.log(materia.fisica[i].card.cardHeader.title)
        // console.log(matter)
        output += `
            <div class="card">

            <div class="cardHeader">
              <img src="https://github.com/joseliosamy/seeclasses/blob/master/public/images/thumbl/introComp/aula${i+1}.jpg?raw=true" alt=""/>
            </div>

            <div class="cardBody">
              <div class="descrip">
                <p>${materia.introComp[i].card.cardHeader.title.substring(0, materia.introComp[i].card.cardHeader.title.length - 8)}</p>
                <p>Descrição que abrange todo o conteudo relacionado a aula subsquente</p>
              </div>
              <div class="bar">
                <div class="info">
                  <p>${materia.introComp[i].card.cardBody.date.substring(0,5)}</p> 
                  <p>Hamilton</p>
                </div>
                <div class="see">
                  <p data-id="${i + 1}">       
                    
                    <svg version="1.1" id="Capa_1"    
                    x="0px" y="0px"
                      viewBox="0 0 511.999 511.999" enableBackground="new 0 0 511.999 511.999;">
                    <g>
                      <g>
                        <path d="M443.86,196.919L141.46,10.514C119.582-2.955,93.131-3.515,70.702,9.016c-22.429,12.529-35.819,35.35-35.819,61.041
                          v371.112c0,38.846,31.3,70.619,69.77,70.829c0.105,0,0.21,0.001,0.313,0.001c12.022-0.001,24.55-3.769,36.251-10.909
                          c9.413-5.743,12.388-18.029,6.645-27.441c-5.743-9.414-18.031-12.388-27.441-6.645c-5.473,3.338-10.818,5.065-15.553,5.064
                          c-14.515-0.079-30.056-12.513-30.056-30.898V70.058c0-11.021,5.744-20.808,15.364-26.183c9.621-5.375,20.966-5.135,30.339,0.636
                          l302.401,186.405c9.089,5.596,14.29,14.927,14.268,25.601c-0.022,10.673-5.261,19.983-14.4,25.56L204.147,415.945
                          c-9.404,5.758-12.36,18.049-6.602,27.452c5.757,9.404,18.048,12.36,27.452,6.602l218.611-133.852
                          c20.931-12.769,33.457-35.029,33.507-59.55C477.165,232.079,464.729,209.767,443.86,196.919z"/>
                      </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    </svg>
                    Assistir 
                  </p>
                </div>
              </div>
            </div>
          </div>
        `
        if(i == materia.introComp.length - 1){
          break
        }//CONTROLE PARA NAO BUGAR O FOR. AQUELE MENOS 1 ALI SALVOU A VIDA
      }
      document.querySelector('.cardsWrapper').insertAdjacentHTML("afterbegin", output);

      setTimeout(() => {
        const openVideo = document.querySelectorAll('.see p');
        const divWindowName =  document.querySelector('.windowName');
        const videoFull = document.querySelector('.videoFull');
      
        openVideo.forEach(e => {
          e.addEventListener('click', ()=>{
            const pageVideoId = e.getAttribute("data-id");
  
            // BUSCA O TAMANHO DO ARRAY QUE CONTEM OS CARDS
            for(let i = 0; i < materia.introComp.length; i++){
              const apiVideoId = materia.introComp[i].card.id;
  
              if(pageVideoId == apiVideoId){
                if(document.querySelector('.videoFull')){
                  scrollTop()
                  document.querySelector('.video').parentElement.removeChild(document.querySelector('.video'));
                  document.querySelector('.videoFull').insertAdjacentHTML('afterbegin', `
                    <div class="video">
                      <iframe src="https://www.youtube.com/embed/${materia.introComp[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  `)
                  return
                }else{
                  scrollTop()
                  divWindowName.insertAdjacentHTML('afterend', `
                    <div class="videoFull">
                      <div class="video">
                        <iframe src="https://www.youtube.com/embed/${materia.introComp[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                  `)
                }
  
              }
            } // for
          }) // addevent
        }); // for each
      }, 400); // settimeout
    }
  }
  

  return(
    <div className="cardsWrapper">

    </div>
  );
}