import '../sass/app.scss'



let cloneItem = () => {
    let image = document.querySelector(".snowdog-bacon-wrapper section:nth-of-type(2) img");
    let imagesContainer = document.querySelector(".snowdog-bacon-wrapper");
    let clonedItem = image.cloneNode(true);
    imagesContainer.appendChild(clonedItem).classList.add('cloned');
    const lastClonedItem = Array.from(
        document.querySelectorAll('.cloned')
    ).pop();
    
    randomValuesItem(lastClonedItem);
}

let addBaconButton = document.querySelector(".snowdog-bacon-wrapper button");

addBaconButton.addEventListener('click', (e) => {
    //for(var i = 0; i < 5; i++) {
        cloneItem();
    //}
})


//cloned - random pos: top, left; random width: 200-800; random rotate: -90, 90

let randomValuesItem = (item) => {
    item.style.WebkitTransitionDuration = getRandomFloat(1, 3, 1) + 's';
    let itemMaxWidth = getRandomInt(200, 800);
    let itemHeight = item.offsetHeight;
    //item.classList.add('fadeIn');
    setTimeout(() => {
        item.style.maxWidth = itemMaxWidth + 'px';
        item.style.opacity = '1';
        item.style.top = getRandomInt(-10, 100)+'%'; 
        item.style.left = getRandomInt(-10, 100) + '%';
    },0);
    
    
    //0-100% - width obrazka
   
    setTimeout(() => {
        item.style.webkitTransform = 'rotate('+ getRandomInt(-90, 90) +'deg)';
    },100);  
}

let getRandomFloat = (min, max, decimals) => {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
  
    return parseFloat(str);
  }

let getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let zoomOut = (item) => {
    //item.
}