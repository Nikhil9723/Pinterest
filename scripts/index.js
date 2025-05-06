import { imageArray } from "./assests.js";
class imageGrid {
    constructor() {
        this.initialEventListner();
        this.infiniteScroll(imageArray);
    }
    initialEventListner() {
        this.addImage(imageArray);
        this.infiniteScroll(imageArray)
    }
    
    addImage(imageArray) {
        let imageGrid = document.getElementById("image-grid");
        
        if(imageArray) {
            imageArray.map((item) => {
                console.log(item);
                imageGrid.innerHTML += `<img  class="image-style" src=${item} alt="Peaky Blinders image" loading="lazy"> `
            })
            
        }
    }

    infiniteScroll(imageArray) {
        window.addEventListener("scroll", ()=> {
            console.log(scrollY);
            if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight -150 ) {
                this.addImage(imageArray);
            }
        })
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    new imageGrid();
})