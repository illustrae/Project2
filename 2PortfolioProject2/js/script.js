fetch (`https://rickandmortyapi.com/api/character/`)
.then(response => response.json())
.then((data) => cards(data.results));

function cards (animation) {
    const cardContainer = document.querySelector("#card-group")
    console.log(animation)

    animation.forEach(character => {
        cardContainer.innerHTML =
            cardContainer.innerHTML +
            `<div class="card">
            <h4>${character.name}</h4>
            <img src= ${character.image} class="card-img-top"></img>
            <h6>Status: ${character.status}</h6>
            <h6>Species: ${character.species}</h6>
            </div>
            <br>
            `;
    })
}

$("p").mouseover(function(){
    $("p").css("background-color","Green");
});
$("p").mouseout(function(){
    $("p").css("background-color","Red");
});
$("#btn1").click(function(){
    alert("Thank you for subscribing");
});
