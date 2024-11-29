const contenedor = document.querySelector(".contenedor")

fetch("articulos.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(articulo => {
            const item = document.createElement("div");
            item.classList.add("item")
            item.innerHTML = `
                <img src="${articulo.imagen}" alt="${articulo.nombre}">
                <h2>${articulo.nombre}</h2>
                <h6>${articulo.volumen}</h6>
                <h3>${articulo.Valor} $</h3>
                <p>en Stock ${articulo.Stock}</p>
                <div class="botones1">                
                    <button>Comprar</button>
                    <button class="carritoBoton"><i class="fa-solid fa-cart-plus"></i></button>
                </div>`
            contenedor.append(item);
        });
    })
