async function getdefault(){
    let response = await fetch('https://github.com/Asvant07');
    let data = await response.JSON()
    console.log(data);
}