





setTimeout(() => {
    var videos_wrapper = document.querySelector("#videos_wrapper");
    const open_video = document.querySelectorAll(".open_video")

    
    open_video.forEach(e => {
        e.addEventListener("click", ()=>{
            for(i=0; i<=materia.calculo.length; i++){
                var video_id = materia.calculo[i].card.id // id na api
               
                if(e.getAttribute('data-id') == video_id){
                    return // SE JÁ TIVER UM VIDEO_FULL NA PÁGINA ELE SÓ FAZ UM RETURN
                }
                else{
                    videos_wrapper.insertAdjacentHTML("afterbegin", 
                    `
                        <div class="video_full">
                            <div class="video">
                                <iframe src="https://www.youtube.com/embed/${materia.calculo[i].card.theaterMode.iframe}?autoplay=1" title="YouTube video player" frameborder="none" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    `
                )}// SE NÃO TIVER UM VIDEO_FULL ELE INJETA 1
                console.log(video_id + " api")
                console.log(e.getAttribute('data-id') + " html")
                break
            }// CONSEGUIR O ID DO CARD E DA API

                if(i == materia.calculo.length - 1){
                    break
                }
        })
    })
}, 800)

