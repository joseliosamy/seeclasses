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

if(window.location.pathname == "/calculo/"){
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
            console.log(materia.fisica[i].card)
            if(i == materia.fisica.length - 1){
                break
            }//CONTROLE PARA NAO BUGAR O FOR. AQUELE MENOS 1 ALI SALVOU A VIDA
        }
        document.querySelector('.cards_wrapper').insertAdjacentHTML("afterbegin", output)
    }
}
