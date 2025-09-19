document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("searchInput");
    const results = document.getElementById("searchResults");

    input.addEventListener("keyup", function () {
        let filter = this.value.toLowerCase().trim();
        results.innerHTML = "";

        if (filter === "") {
            results.style.display = "none";
            return;
        }

        let titles = document.querySelectorAll("h2, h3, .titulo-silksong");
        let matches = [];

        titles.forEach(title => {
            if (title.innerText.toLowerCase().includes(filter)) {
                matches.push({
                    text: title.innerText,
                    parent: title.closest("article") // el artículo completo
                });
            }
        });

        if (matches.length > 0) {
            matches.forEach(match => {
                let item = document.createElement("p");
                item.innerHTML = match.text.replace(
                    new RegExp(`(${filter})`, "gi"),
                    `<mark>$1</mark>`
                );

                // Cuando hago clic en un resultado
                item.addEventListener("click", () => {
                    let article = match.parent;
                    if (article) {
                        // Scroll suave
                        article.scrollIntoView({ behavior: "smooth", block: "center" });

                        // Resaltado temporal
                        article.classList.add("highlight-news");
                        setTimeout(() => {
                            article.classList.remove("highlight-news");
                        }, 2000);
                    }
                    results.style.display = "none"; // cerrar resultados
                });

                results.appendChild(item);
            });
            results.style.display = "block";
        } else {
            results.innerHTML = "<p>No se encontraron coincidencias</p>";
            results.style.display = "block";
        }
    });

    // Cierra resultados si hago clic fuera
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-container")) {
            results.style.display = "none";
        }
    });
});
function openModal() {
    // Mostrar el modal
    document.getElementById('id01').style.display = 'block';

    // Ocultar todos los sections dentro de main excepto el modal
    const main = document.querySelector('main');
    const sections = main.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id !== 'id01') {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });

    // Asegurar que header y footer estén visibles
    
}

let lastArticleId = null;

function showArticle(buttonElement) {

    const targetId = buttonElement.getAttribute('data-target');
    document.getElementById(targetId).style.display = 'block';
    lastArticleId = targetId;
    
}


function closeModal() {
    // Ocultar el modal
    document.getElementById('id01').style.display = 'none';
    // Mostrar todos los sections dentro de main
    const main = document.querySelector('main');
    const sections = main.querySelectorAll('section');
    sections.forEach(section => {
         if (section.id !== 'id01') {
            section.style.display = 'grid';
        } else {
            section.style.display = 'none';
        }
    });

    if (lastArticleId) {
        document.getElementById(lastArticleId).style.display = 'none';
        lastArticleId = null;
    }

    // Asegurar que header y footer estén visible
}
