// callback function: kono ekta function k call korar somoy tar parameter k arekti function dewa k callback function bola hoy

function koiJasTui( handelAstechi, handleJaitechi){
    handelAstechi();
    handleJaitechi();
}

function amiAstechi(){
    console.log('Toder Barite')
}
function amiJaiteci(){
    console.log('Market e')
}
koiJasTui( amiAstechi, amiJaiteci )
