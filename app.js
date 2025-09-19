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