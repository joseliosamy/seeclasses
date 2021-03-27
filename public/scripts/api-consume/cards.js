async function consumeCards(){
    try{
        var response = await fetch('https://api-seeclasses.vercel.app/')
        
        const data = await response.json();
        show(data)
        
    }

    catch(error){
        console.log(error)
    }
}
consumeCards();

//CALCULO ------------------------------------------------

if(window.location.pathname == "/calculo"){
    function show(items){
        var output = "";
        var materia = items[0]

        for(i=0; i <= materia.calculo.length;i++){
            output += `
            <div class="card">
            <div class="card_name">
                <h2>${materia.calculo[i].card.cardHeader.title}</h2>
            </div>
            <div class="card_body"> 
                <div class="thumbl">
                    <img src="${materia.calculo[i].card.cardBody.imgSrc}" alt="${materia.calculo[i].card.cardBody.imgAlt}">
                </div>
                <div class="date">
                    <p>${materia.calculo[i].card.cardBody.date}</p>
                </div>
                <div class="redirect">
                    <a href="${materia.calculo[i].card.cardBody.aHref}" target="_blank"><i class='bx bx-play'></i>Assistir</a>
                </div>
            </div>
        </div><!-- CARD -->
            `
            if(i == materia.calculo.length - 1){
                break
            }//CONTROLE PARA NAO BUGAR O FOR. AQUELE MENOS 1 ALI SALVOU A VIDA
        }
        return document.querySelector('.cards_wrapper').insertAdjacentHTML("afterbegin", output)     
    } 
}

//FÍSICA ------------------------------------------------

else if(window.location.pathname == "/fisica"){
    function show(items){
        let output = "";
        var materia = items[1]
        for(i=0; i <= materia.fisica.length;i++){
            output += `
            <div class="card">
            <div class="card_name">
                <h2>${materia.fisica[i].card.cardHeader.title}</h2>
            </div>
            <div class="card_body"> 
                <div class="thumbl">
                    <img src="${materia.fisica[i].card.cardBody.imgSrc}" alt="${materia.fisica[i].card.cardBody.imgAlt}">
                </div>
                <div class="date">
                    <p>${materia.fisica[i].card.cardBody.date}</p>
                </div>
                <div class="redirect">
                    <a href="${materia.fisica[i].card.cardBody.aHref}" target="_blank"><i class='bx bx-play'></i>Assistir</a>
                </div>
            </div>
        </div><!-- CARD -->
            `
            if(i == materia.fisica.length - 1){
                break
            }//CONTROLE PARA NAO BUGAR O FOR. AQUELE MENOS 1 ALI SALVOU A VIDA
        }
        return document.querySelector('.cards_wrapper').insertAdjacentHTML("afterbegin", output)     
    } 
}

//VETORIAL ------------------------------------------------

else if(window.location.pathname == "/calculo-vetorial"){
    function show(items){
        let output = "";
        var materia = items[2]
        for(i=0; i <= materia.vetorial.length;i++){
            output += `
            <div class="card">
            <div class="card_name">
                <h2>${materia.vetorial[i].card.cardHeader.title}</h2>
            </div>
            <div class="card_body"> 
                <div class="thumbl">
                    <img src="${materia.vetorial[i].card.cardBody.imgSrc}" alt="${materia.vetorial[i].card.cardBody.imgAlt}">
                </div>
                <div class="date">
                    <p>${materia.vetorial[i].card.cardBody.date}</p>
                </div>
                <div class="redirect">
                    <a href="${materia.vetorial[i].card.cardBody.aHref}" target="_blank"><i class='bx bx-play'></i>Assistir</a>
                </div>
            </div>
        </div><!-- CARD -->
            `
            if(i == materia.vetorial.length - 1){
                break
            }//CONTROLE PARA NAO BUGAR O FOR. AQUELE MENOS 1 ALI SALVOU A VIDA
        }
        return document.querySelector('.cards_wrapper').insertAdjacentHTML("afterbegin", output)     
    } 
}

//INTRODUÇÃO A PROGRAMAÇÃO --------------------------------

else if(window.location.pathname == "/intro-programacao"){
    function show(items){
        let output = "";
        var materia = items[3]
        for(i=0; i <= materia.introProg.length;i++){
            output += `
            <div class="card">
            <div class="card_name">
                <h2>${materia.introProg[i].card.cardHeader.title}</h2>
            </div>
            <div class="card_body"> 
                <div class="thumbl">
                    <img src="${materia.introProg[i].card.cardBody.imgSrc}" alt="${materia.introProg[i].card.cardBody.imgAlt}">
                </div>
                <div class="date">
                    <p>${materia.introProg[i].card.cardBody.date}</p>
                </div>
                <div class="redirect">
                    <a href="${materia.introProg[i].card.cardBody.aHref}" target="_blank"><i class='bx bx-play'></i>Assistir</a>
                </div>
            </div>
        </div><!-- CARD -->
            `
            if(i == materia.introProg.length - 1){
                break
            }//CONTROLE PARA NAO BUGAR O FOR. AQUELE MENOS 1 ALI SALVOU A VIDA
        }
        return document.querySelector('.cards_wrapper').insertAdjacentHTML("afterbegin", output)     
    } 
}

//INTRODUÇÃO AO COMPUTADOR --------------------------------

else if(window.location.pathname == "/intro-computador"){
    function show(items){
        let output = "";
        var materia = items[4]
        for(i=0; i <= materia.introComp.length;i++){
            output += `
            <div class="card">
            <div class="card_name">
                <h2>${materia.introComp[i].card.cardHeader.title}</h2>
            </div>
            <div class="card_body"> 
                <div class="thumbl">
                    <img src="${materia.introComp[i].card.cardBody.imgSrc}" alt="${materia.introComp[i].card.cardBody.imgAlt}">
                </div>
                <div class="date">
                    <p>${materia.introComp[i].card.cardBody.date}</p>
                </div>
                <div class="redirect">
                    <a href="${materia.introComp[i].card.cardBody.aHref}" target="_blank"><i class='bx bx-play'></i>Assistir</a>
                </div>
            </div>
        </div><!-- CARD -->
            `
            if(i == materia.introComp.length - 1){
                break
            }//CONTROLE PARA NAO BUGAR O FOR. AQUELE MENOS 1 ALI SALVOU A VIDA
        }
        return document.querySelector('.cards_wrapper').insertAdjacentHTML("afterbegin", output)     
    } 
}