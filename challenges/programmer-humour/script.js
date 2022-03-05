let imgTag = document.createElement("img");
let divTag = document.getElementById("content");
divTag.appendChild(imgTag);

function showHumour() {
    fetch("https://xkcd.now.sh/?comic=latest")
        .then(Response => Response.json())
        .then(data =>
            imgTag.src = data.img
        )
        .catch(err => console.log("something went wrong!"))
}
showHumour();