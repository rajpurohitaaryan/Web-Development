
console.log('------Working------');
//--------------  NAVBAR  -------------
function create_label_whenhover(text, locationclass) {
    let location = document.querySelector(`${locationclass}`)
    let span = document.createElement('span')
    location.addEventListener("mouseenter", () => {
        span.classList.add("label-creator")
        span.innerText = `${text}`
        location.appendChild(span)
    }
    )
    location.addEventListener("mouseleave", () => {
        location.removeChild(span)
    }
    )
}
function image_color_invert_when_hovered(imgclass, hoverclass) {
    let hover_place = document.querySelector(`${hoverclass}`)
    let img = document.querySelector(`${imgclass}`)
    hover_place.addEventListener("mouseenter", () => {
        img.style.filter = "invert(1)"
        img.style.transform = "scale(1.1)"
    }
    )
    hover_place.addEventListener("mouseleave", () => {
        img.style.filter = ""
        img.style.transform = ""
    }
    )
}
create_label_whenhover("Home", ".navbar-home-box")
image_color_invert_when_hovered(".navbar-home-img", ".navbar-home-box")

let box = document.querySelector(".navbar-search-box-text")
let span1 = document.createElement("span")
let span2 = document.createElement("span")
let input = document.querySelector("#search-text")
span1.classList.add("ctrl-span")
span2.classList.add("k-span")
span1.innerText = "Ctrl"
span2.innerText = "K"
document.querySelector(".navbar-search-box").addEventListener("mouseenter", () => {
    if (input.value.length > 0) {
        if (box.contains(span1)) box.removeChild(span1);
        if (box.contains(span2)) box.removeChild(span2);
    } else {
        if (!box.contains(span1)) box.append(span1);
        if (!box.contains(span2)) box.append(span2);
    }
}
)

document.querySelector(".navbar-search-box").addEventListener("mouseleave", () => {
    let box = document.querySelector(".navbar-search-box-text")
    if (box.contains(span1)) box.removeChild(span1);
    if (box.contains(span2)) box.removeChild(span2);
}
)
document.querySelector("#search-text").addEventListener("click", (e) => {
    document.querySelector(".navbar-search-box").style.border = "2px solid white"
    e.stopPropagation()
}
)

let x_button = document.querySelector(".x-button")


function toggleXButton() {
    if (input.value.length > 0) {
        x_button.style.opacity = "1";
    } else {
        x_button.style.opacity = "0";
    }
}
toggleXButton();
input.addEventListener("input", toggleXButton);

x_button.addEventListener("click", () => {
    input.value = ""
    x_button.style.opacity = "0"
}
)

document.addEventListener("click", () => {
    document.querySelector(".navbar-search-box").style.border = ""
}
)

image_color_invert_when_hovered(".x-button", ".x-box")

create_label_whenhover("Search", ".navbar-search-box-imgbox")
image_color_invert_when_hovered(".navbar-search-img", ".navbar-search-box")

create_label_whenhover("Browse", ".navbar-browse-box")
image_color_invert_when_hovered(".navbar-browse-img", ".navbar-browse-box")

//--------------NAVBAR END-------------


// Trending Songs


function create_card(imgthumb, title) {
    let card = document.createElement("div")
    card.classList.add("song")
    let location = document.querySelector(".trending-songs-cards")
    card.innerHTML = `<div class="imgbox">
                        <img src="${imgthumb}" 
                        width="155px" alt="" class="thumnail">
                        <img width="45" height="45" src="https://img.icons8.com/ios-filled/100/40C057/circled-play.png" alt="circled-play" class="play-button"/>
                    </div>
                    <span>${title}</span>`
    location.append(card)
}

create_card("https://i.ytimg.com/vi/XTp5jaRU3Ws/hqdefault.jpg?sqp=-oaymwEwCKgBEF5IWvKriqkDIwgBFQAAiEIYAfABAfgB_gmAAtAFigIMCAAQARgRIGAocjAP&rs=AOn4CLCS8oHldMJljJZbTNFHooNM4fxGEg","Wavy")

document.querySelector(".song").addEventListener("mouseenter", () => {
    document.querySelector(".play-button").style.opacity = 1
}
)
document.querySelector(".song").addEventListener("mouseleave", () => {
    document.querySelector(".play-button").style.opacity = 0
}
)

function music_player(audiosrc) {
    let player_box=document.querySelector(".player-box")
    player_box.style.zIndex=1000
    player_box.style.pointerEvents="auto"
    player_box.innerHTML=`       
    <div class="cross-box">
            <img src="/Big Projects/Spotify Clone/Assests/Images/close.png" alt="" class="cross-button" width="30px">
        </div>
        <div class="player">
        <audio id="audio" src="${audiosrc}" controls></audio>
        <img width="45" height="45" src="https://img.icons8.com/ios-filled/100/40C057/circled-play.png" alt="circled-play" class="play-but"/>
        <img width="45" height="45" class="pause-but" src="https://img.icons8.com/?size=100&id=36268&format=png&color=40C057" alt="">
        </div>`
    }
document.querySelector(".song").addEventListener("click",(e) => {
    music_player("/Big Projects/Spotify Clone/Assests/Songs/WAVY (OFFICIAL VIDEO) KARAN AUJLA ｜ LATEST PUNJABI SONGS 2024.mp3")
    e.stopPropagation()
}
)
document.querySelector(".cross-box").addEventListener("click",() => {
    document.querySelector(".player-box").style.zIndex=0
    player_box.style.pointerEvents="none"
}
)
document.querySelector(".play-but").addEventListener("click",(e) => {
    let audio =document.querySelector("#audio")
    document.querySelector(".play-but").style.zIndex=0
    document.querySelector(".pause-but").style.zIndex=10000  
    audio.play()
    e.stopPropagation()

}
)
document.querySelector(".pause-but").addEventListener("click",(e) => {
    document.querySelector(".pause-but").style.zIndex=0
    document.querySelector(".play-but").style.zIndex=10000  
    e.stopPropagation()
}
)



