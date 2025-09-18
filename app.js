document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("searchInput");
    const results = document.getElementById("searchResults");

    input.addEventListener("keyup", function () {
        let filter = this.value.toLowerCase().trim();
        results.innerHTML = ""; // limpiar resultados previos

        if (filter === "") {
            results.style.display = "none";
            return;
        }

        // Buscar solo en los títulos
        let titles = document.querySelectorAll("h2, h3, .titulo-silksong");
        let matches = [];

        titles.forEach(title => {
            if (title.innerText.toLowerCase().includes(filter)) {
                matches.push(title.innerText);
            }
        });

        if (matches.length > 0) {
            matches.forEach(match => {
                let item = document.createElement("p");
                item.innerHTML = match.replace(
                    new RegExp(`(${filter})`, "gi"),
                    `<mark>$1</mark>`
                );
                results.appendChild(item);
            });
            results.style.display = "block";
        } else {
            results.innerHTML = "<p>No se encontraron coincidencias</p>";
            results.style.display = "block";
        }
    });

    // Cierra los resultados si haces clic fuera
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-container")) {
            results.style.display = "none";
        }
    });
});
