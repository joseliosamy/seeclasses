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

    for(let item of items){
        output += `
        <div class="card">
        <div class="card_name">
            <h2>${item.calculo.card.cardHeader.title}</h2>
        </div>
        <div class="card_body">
            <div class="thumbl">
                <img src="${item.calculo.card.cardBody.cardImage}" alt="${item.calculo.card.cardBody.imageAlt}">
            </div>
            <div class="date">
                <p>${item.calculo.card.cardBody.date}</p>
            </div>
            <div class="redirect">
                <a href="${item.calculo.card.cardBody.videoHref}" target="_blank"><i class='bx bx-play'></i>Assistir</a>
            </div>
        </div>
    </div><!-- CARD -->
        `
    }
    document.querySelector('.cards_wrapper').insertAdjacentHTML("afterbegin", output)
}
}
