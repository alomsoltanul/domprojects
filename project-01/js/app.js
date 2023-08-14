
window.onload = () =>{
    main();
}

function main(){
    const root = document.getElementById('root')
    const btn = document.getElementById('btn-RGB')

    btn.addEventListener('click', function(){
        const bgColor =colorRGB();
        root.style.backgroundColor=bgColor;
    })

}

// color genarator

function colorRGB(){
    const black = Math.floor(Math.random() * 255);
    const white = Math.floor(Math.random() * 255);
    const yellow = Math.floor(Math.random() * 255);

    return `rgb(${black},${white},${yellow})`
}