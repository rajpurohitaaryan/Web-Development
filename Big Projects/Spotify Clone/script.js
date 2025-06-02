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


