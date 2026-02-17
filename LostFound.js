navigator.geolocation.getCurrentPosition((position) =>{
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const mapa = document.getElementById("mapa");
    mapa.innerHTML = `
        <h2> Fes clic <a href="https://maps.google.com/?q=${lat},${long}">AQUI</a> per veure el mapa</h2>
    `;
});