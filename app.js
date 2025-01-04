const toggleContent = (event) => {
    const button = event.target;
    const article = button.closest('article');
    const hiddenParagraphs = article.querySelectorAll('p.hidden');
    

    const isExpanded = button.textContent === 'Leer menos';

    hiddenParagraphs.forEach(paragraph => {
        paragraph.style.display = isExpanded ? 'none' : 'block'; 
    });

    button.textContent = isExpanded ? 'Leer más' : 'Leer menos'; 
};

const redirectContact = () => {
    window.location.href = 'contact.html'; // Cambia 'contacto.html' por la ruta de tu formulario de contacto
}

