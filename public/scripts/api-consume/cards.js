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

if(window.location.pathname == "/calculo"){
function show(items){
    let output = "";

    for(let card of cards){
        output += `
        <div class="card">
        <div class="card_name">
            <h2>${card.calculo.item.cardHeader.title}</h2>
        </div>
        <div class="card_body">
            <div class="thumbl">
                <img src="${card.calculo.item.cardBody.cardImage}" alt="${item.calculo.card.cardBody.imageAlt}">
            </div>
            <div class="date">
                <p>${card.calculo.item.cardBody.date}</p>
            </div>
            <div class="redirect">
                <a href="${card.calculo.item.cardBody.videoHref}" target="_blank"><i class='bx bx-play'></i>Assistir</a>
            </div>
        </div>
    </div><!-- CARD -->
        `
    }
    document.querySelector('.cards_wrapper').insertAdjacentHTML("afterbegin", output)
}
}
