function createcard(imgsrc, time, title, cName, views, date) {
    let container = document.querySelector(".container")
    let boxdiv = document.createElement("div")
    boxdiv.innerHTML=`
    <div class="img">
                <img src="${imgsrc}"
                    alt="Np" class="img">
            </div>
            <div class="timebox">
                <div class="time">
                    ${time}
                </div>
            </div>
            <div class="title">
                ${title}
            </div>
            <div class="small_things">
                <div class="cName">
                    ${cName} &nbsp; |
                </div>
                <div>
                    <ul class="views_Date">
                        <li class="views">
                            ${views} views &nbsp; |
                        </li>
                        <li class="date">
                            ${date} ago
                        </li>
                    </ul>
                </div>
            </div>
    `
    boxdiv.setAttribute("class", "box")
    container.appendChild(boxdiv)
}
createcard(
    "https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDHpDiAzX3RJIFqB-cFW-sRYzUfGQ",
    "23:48",
    "Inserting and Removing Elements using JavaScript | Sigma Web Development Course - Tutorial #71",
    "CodeWithHarry",
    "208K",
    "1 year"
)
