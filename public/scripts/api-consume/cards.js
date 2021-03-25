async function consumeCards(){
    try{
        // FÍSICA -------------------------------

        if(window.location.pathname == "/fisica/"){
            var response = await fetch('https://api-seeclasses.vercel.app/fisica')
            
            const data = await response.json();
            show(data)
        }

        // END FÍSICA -------------------------------
        // CÁLCULO -------------------------------
        
        if(window.location.pathname == "/calculo/"){
            response = await fetch('https://api-seeclasses.vercel.app/calculo')
            
            const data = await response.json();
            show(data)
        }
        // END CÁLCULO -------------------------------
        // CÁLCULO VETORIAL -------------------------------
        
        if(window.location.pathname == "/calculo-vetorial/"){
            response = await fetch('https://api-seeclasses.vercel.app/calculo-vetorial')
            
            const data = await response.json();
            show(data)
        }
        // END CÁLCULO VETORIAL -------------------------------
        // INTRO COMPUTADOR -------------------------------
        
        if(window.location.pathname == "/intro-computador/"){
            response = await fetch('https://api-seeclasses.vercel.app/intro-computador')
            
            const data = await response.json();
            show(data)
        }
        // END INTRO COMPUTADOR -------------------------------
        // INTRO PROGRAMAÇÃO -------------------------------
        
        if(window.location.pathname == "/intro-programacao/"){
            response = await fetch('https://api-seeclasses.vercel.app/intro-programacao')
            
            const data = await response.json();
            show(data)
        }
        // END INTRO PROGRAMAÇÃO -------------------------------
    }

    catch(error){
        console.log(error)
    }
}
consumeCards();

function show(cards){
    let output = "";

    for(let card of cards){
        output += `
        <div class="card">
        <div class="card_name">
            <h2>${card.cardHeader.title}</h2>
        </div>
        <div class="card_body">
            <div class="thumbl">
                <img src="${card.cardBody.cardImage}" alt="${card.cardBody.imageAlt}">
            </div>
            <div class="date">
                <p>${card.cardBody.date}</p>
            </div>
            <div class="redirect">
                <a href="${card.cardBody.videoHref}" target="_blank"><i class='bx bx-play'></i>Assistir</a>
            </div>
        </div>
    </div><!-- CARD -->
        `
    }
    document.querySelector('.cards_wrapper').insertAdjacentHTML("afterbegin", output)
}