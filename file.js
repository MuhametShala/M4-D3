const authorizationKey="DYZFX4NKrvcQbKmX4C69EfvObfjIEiunjY1KdWc960AdQJsS527wZuGY";
const endpoint="https://api.pexels.com/v1/search?query=albania";
const div = document.getElementById("riga");
const getCard=() =>{

fetch(endpoint,{
    headers: {
    Authorization: `${authorizationKey}`,
    },
}
)
.then((response) => {
    return response.json();
})
.then((json) => {
    let photoArray = json.photos;
    console.log(photoArray);

    //questo è il mio DOM al quale faccio riferimento 
    const domItems= photoArray.map((picture) => {
        const imgContainer=document.createElement("div");
        imgContainer.classList.add("col-3", "d-flex", "card", "mx-2", "my-2", "flow-nowrap");
console.log(picture);
        //sezione creazione img dove anggiungo le classi e aggiusto le misure delle img
        const photoImg=document.createElement("img");
        photoImg.classList.add("img-fluid", "card-body");
        photoImg.src=picture.src.medium;
        photoImg.style.widh=('200px');
        photoImg.style.height=('200px');
        imgContainer.append(photoImg);
        
        //sezione titolo card
        const titleCard=document.createElement("h5");
        titleCard.classList.add("card-title");
        titleCard.innerText=picture.alt;
        imgContainer.append(titleCard);

        //sezione paragrafo card
        const paragraph=document.createElement("p");
        paragraph.classList.add("card-text");
        paragraph.innerText=picture.photographer;
        imgContainer.append(paragraph);

        //sezione link card
        const addLink=document.createElement("a");
        addLink.classList.add("btn", "btn-primary");
        addLink.href="#";
        addLink.innerText="Go Up"
        imgContainer.append(addLink);

        //il return del mio img container che ha all'interno l'immagine 
        return imgContainer      
    });

    //questo mi fa apparire in console il mio oggettone modificato e ciclato per ogni elemento presente all'interno
    div.append(...domItems);
})
.catch((err) =>{
    console.log(err);
})

}

getCard();



