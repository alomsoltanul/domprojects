
window.onload = () =>{
    main();
}

function main(){
    const root = document.getElementById('root')
    const btn = document.getElementById('btn-RGB')
    const output = document.getElementById('output')

    btn.addEventListener('click', function(){
        const bgColor =colorHex();
        root.style.backgroundColor=bgColor;
        output.value = bgColor;
    })

}

// color genarator

function colorHex(){
    const black = Math.floor(Math.random() * 255);
    const white = Math.floor(Math.random() * 255);
    const yellow = Math.floor(Math.random() * 255);

    return `#${black.toString(16)}${white.toString(16)}${yellow.toString(16)}`
}