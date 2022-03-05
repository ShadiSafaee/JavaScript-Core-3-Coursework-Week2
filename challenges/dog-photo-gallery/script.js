let divRootTag = document.getElementById("content");

document.getElementById("btn1").addEventListener("click", showPhoto);
let ulTag = document.getElementsByClassName("container")[0];

function showPhoto() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let liTag = document.createElement("li");
            let imgTag = document.createElement("img");
            imgTag.src = data.message;
            liTag.appendChild(imgTag);
            ulTag.appendChild(liTag);
        })
        .catch(err => console.log("something went wrong!"))
}