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

if(window.location.pathname == "/calculo/"){
    function show(items){
        let output = "";
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
                    <a class="open_video" data-id="${i + 1}"><i class='bx bx-play'></i>Assistir</a>
                </div>
            </div>
        </div><!-- CARD -->
            `
            if(i == materia.calculo.length - 1){
                break
            }//CONTROLE PARA NAO BUGAR O FOR. AQUELE MENOS 1 ALI SALVOU A VIDA
        }
        document.querySelector('.cards_wrapper').innerHTML = output

        setTimeout(() => {
            var videos_wrapper = document.querySelector("#videos_wrapper");
            const open_video = document.querySelectorAll(".open_video")
    
            
            open_video.forEach(e => {
                e.addEventListener("click", ()=>{
                    window.scroll({
                        top:0,
                        behavior:'smooth'
                    })//a cada clique ele redireciona a página para o topo
                    for(i=0; i<=materia.calculo.length; i++){
                        var video_id = materia.calculo[i].card.id // id na api
                       
                        if(e.getAttribute('data-id') == video_id){
                            if(document.querySelector(".video_full")){

                                document.querySelector(".video").parentElement.removeChild(document.querySelector(".video"))//remove o video

                                document.querySelector(".video_full").insertAdjacentHTML("afterbegin", 
                                `
                                    <div class="video">
                                        <iframe src="https://www.youtube.com/embed/${materia.calculo[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" frameborder="none" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                `)//coloca de novo

                                if((e.getAttribute('data-id') == video_id)){
                                    return // SE JÁ TIVER UM VIDEO_FULL NA PÁGINA ELE SÓ FAZ UM RETURN
                                }//if                    
                            }/*if*/else{
                                videos_wrapper.insertAdjacentHTML("afterbegin", 
                                `
                                    <div class="video_full">
                                        <div class="video">
                                            <iframe src="https://www.youtube.com/embed/${materia.calculo[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" frameborder="none" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                `
                                )//insertadjacent
                            }//else, SE NÃO TIVER UM VIDEO_FULL ELE INJETA 1
                            // console.log(video_id + " api")
                            // console.log(e.getAttribute('data-id') + " html")
                            break
                        }//if, CONSEGUIR O ID DO CARD E DA API
                        if(i == materia.calculo.length - 1){
                            break
                        }// PARAR O LOOPING 2
                    }//for 1
                })//eventlistener
            })//foreach
        }, 800);//settimeout
    }//show
}//if

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
                    <a class="open_video" data-id="${i + 1}"><i class='bx bx-play'></i>Assistir</a>
                </div>
            </div>
        </div><!-- CARD -->
            `
            if(i == materia.fisica.length - 1){
                break
            }//CONTROLE PARA NAO BUGAR O FOR. AQUELE MENOS 1 ALI SALVOU A VIDA
        }
        document.querySelector('.cards_wrapper').innerHTML = output

        setTimeout(() => {
            var videos_wrapper = document.querySelector("#videos_wrapper");
            const open_video = document.querySelectorAll(".open_video")
    
            
            open_video.forEach(e => {
                e.addEventListener("click", ()=>{
                    for(i=0; i<=materia.fisica.length; i++){
                        var video_id = materia.fisica[i].card.id // id na api
                       
                        if(e.getAttribute('data-id') == video_id){
                            if(document.querySelector(".video_full")){

                                document.querySelector(".video").parentElement.removeChild(document.querySelector(".video"))//remove o video

                                document.querySelector(".video_full").insertAdjacentHTML("afterbegin", 
                                `
                                    <div class="video">
                                        <iframe src="https://www.youtube.com/embed/${materia.fisica[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" frameborder="none" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                `)//coloca de novo

                                if((e.getAttribute('data-id') == video_id)){
                                    return // SE JÁ TIVER UM VIDEO_FULL NA PÁGINA ELE SÓ FAZ UM RETURN
                                }//if                    
                            }/*if*/else{
                                videos_wrapper.insertAdjacentHTML("afterbegin", 
                                `
                                    <div class="video_full">
                                        <div class="video">
                                            <iframe src="https://www.youtube.com/embed/${materia.fisica[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" frameborder="none" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                `
                                )//insertadjacent
                            }//else, SE NÃO TIVER UM VIDEO_FULL ELE INJETA 1
                            // console.log(video_id + " api")
                            // console.log(e.getAttribute('data-id') + " html")
                            break
                        }//if, CONSEGUIR O ID DO CARD E DA API
                        if(i == materia.fisica.length - 1){
                            break
                        }// PARAR O LOOPING 2
                    }//for 1
                })//eventlistener
            })//foreach
        }, 800);//settimeout
    }//show
}//if

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
                    <a class="open_video" data-id="${i + 1}"><i class='bx bx-play'></i>Assistir</a>
                </div>
            </div>
        </div><!-- CARD -->
            `
            if(i == materia.vetorial.length - 1){
                break
            }//CONTROLE PARA NAO BUGAR O FOR. AQUELE MENOS 1 ALI SALVOU A VIDA
        }
        document.querySelector('.cards_wrapper').innerHTML = output

        setTimeout(() => {
            var videos_wrapper = document.querySelector("#videos_wrapper");
            const open_video = document.querySelectorAll(".open_video")
    
            
            open_video.forEach(e => {
                e.addEventListener("click", ()=>{
                    for(i=0; i<=materia.vetorial.length; i++){
                        var video_id = materia.vetorial[i].card.id // id na api
                       
                        if(e.getAttribute('data-id') == video_id){
                            if(document.querySelector(".video_full")){

                                document.querySelector(".video").parentElement.removeChild(document.querySelector(".video"))//remove o video

                                document.querySelector(".video_full").insertAdjacentHTML("afterbegin", 
                                `
                                    <div class="video">
                                        <iframe src="https://www.youtube.com/embed/${materia.vetorial[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" frameborder="none" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                `)//coloca de novo

                                if((e.getAttribute('data-id') == video_id)){
                                    return // SE JÁ TIVER UM VIDEO_FULL NA PÁGINA ELE SÓ FAZ UM RETURN
                                }//if                    
                            }/*if*/else{
                                videos_wrapper.insertAdjacentHTML("afterbegin", 
                                `
                                    <div class="video_full">
                                        <div class="video">
                                            <iframe src="https://www.youtube.com/embed/${materia.vetorial[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" frameborder="none" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                `
                                )//insertadjacent
                            }//else, SE NÃO TIVER UM VIDEO_FULL ELE INJETA 1
                            // console.log(video_id + " api")
                            // console.log(e.getAttribute('data-id') + " html")
                            break
                        }//if, CONSEGUIR O ID DO CARD E DA API
                        if(i == materia.vetorial.length - 1){
                            break
                        }// PARAR O LOOPING 2
                    }//for 1
                })//eventlistener
            })//foreach
        }, 800);//settimeout
    }//show
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
                    <a class="open_video" data-id="${i + 1}"><i class='bx bx-play'></i>Assistir</a>
                </div>
            </div>
        </div><!-- CARD -->
            `
            if(i == materia.introProg.length - 1){
                break
            }//CONTROLE PARA NAO BUGAR O FOR. AQUELE MENOS 1 ALI SALVOU A VIDA
        }
        document.querySelector('.cards_wrapper').innerHTML = output

        setTimeout(() => {
            var videos_wrapper = document.querySelector("#videos_wrapper");
            const open_video = document.querySelectorAll(".open_video")
    
            
            open_video.forEach(e => {
                e.addEventListener("click", ()=>{
                    for(i=0; i<=materia.introProg.length; i++){
                        var video_id = materia.introProg[i].card.id // id na api
                       
                        if(e.getAttribute('data-id') == video_id){
                            if(document.querySelector(".video_full")){

                                document.querySelector(".video").parentElement.removeChild(document.querySelector(".video"))//remove o video

                                document.querySelector(".video_full").insertAdjacentHTML("afterbegin", 
                                `
                                    <div class="video">
                                        <iframe src="https://www.youtube.com/embed/${materia.introProg[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" frameborder="none" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                `)//coloca de novo

                                if((e.getAttribute('data-id') == video_id)){
                                    return // SE JÁ TIVER UM VIDEO_FULL NA PÁGINA ELE SÓ FAZ UM RETURN
                                }//if                    
                            }/*if*/else{
                                videos_wrapper.insertAdjacentHTML("afterbegin", 
                                `
                                    <div class="video_full">
                                        <div class="video">
                                            <iframe src="https://www.youtube.com/embed/${materia.introProg[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" frameborder="none" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                `
                                )//insertadjacent
                            }//else, SE NÃO TIVER UM VIDEO_FULL ELE INJETA 1
                            // console.log(video_id + " api")
                            // console.log(e.getAttribute('data-id') + " html")
                            break
                        }//if, CONSEGUIR O ID DO CARD E DA API
                        if(i == materia.introProg.length - 1){
                            break
                        }// PARAR O LOOPING 2
                    }//for 1
                })//eventlistener
            })//foreach
        }, 800);//settimeout
    }//show
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
                    <a class="open_video" data-id="${i + 1}"><i class='bx bx-play'></i>Assistir</a>
                </div>
            </div>
        </div><!-- CARD -->
            `
            if(i == materia.introComp.length - 1){
                break
            }//CONTROLE PARA NAO BUGAR O FOR. AQUELE MENOS 1 ALI SALVOU A VIDA
        }
        document.querySelector('.cards_wrapper').innerHTML = output

        setTimeout(() => {
            var videos_wrapper = document.querySelector("#videos_wrapper");
            const open_video = document.querySelectorAll(".open_video")
    
            
            open_video.forEach(e => {
                e.addEventListener("click", ()=>{
                    for(i=0; i<=materia.introComp.length; i++){
                        var video_id = materia.introComp[i].card.id // id na api
                       
                        if(e.getAttribute('data-id') == video_id){
                            if(document.querySelector(".video_full")){

                                document.querySelector(".video").parentElement.removeChild(document.querySelector(".video"))//remove o video

                                document.querySelector(".video_full").insertAdjacentHTML("afterbegin", 
                                `
                                    <div class="video">
                                        <iframe src="https://www.youtube.com/embed/${materia.introComp[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" frameborder="none" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                `)//coloca de novo

                                if((e.getAttribute('data-id') == video_id)){
                                    return // SE JÁ TIVER UM VIDEO_FULL NA PÁGINA ELE SÓ FAZ UM RETURN
                                }//if                    
                            }/*if*/else{
                                videos_wrapper.insertAdjacentHTML("afterbegin", 
                                `
                                    <div class="video_full">
                                        <div class="video">
                                            <iframe src="https://www.youtube.com/embed/${materia.introComp[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" frameborder="none" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                `
                                )//insertadjacent
                            }//else, SE NÃO TIVER UM VIDEO_FULL ELE INJETA 1
                            // console.log(video_id + " api")
                            // console.log(e.getAttribute('data-id') + " html")
                            break
                        }//if, CONSEGUIR O ID DO CARD E DA API
                        if(i == materia.introComp.length - 1){
                            break
                        }// PARAR O LOOPING 2
                    }//for 1
                })//eventlistener
            })//foreach
        }, 800);//settimeout
    }//show
}