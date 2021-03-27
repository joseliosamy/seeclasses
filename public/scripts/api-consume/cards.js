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
                <h2>${materia.fisica[i].card}</h2>
            </div>
            <div class="card_body"> 
                <div class="thumbl">
                    <img src="" alt="">
                </div>
                <div class="date">
                    <p></p>
                </div>
                <div class="redirect">
                    <a href="$" target="_blank"><i class='bx bx-play'></i>Assistir</a>
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
