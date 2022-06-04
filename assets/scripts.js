function changeMode() {
    changeClasses();
    changeText();
}

//vai fazer uma mudança nas classes das tags, adicionando ou removendo
function changeClasses() {
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
}

//vai alterar a cor do texto do h1 e footer
function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode"
    
    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = `${darkMode} ON`;
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = `${lightMode} ON`;
}

const darkModeClass = 'dark-mode'
const h1 = document.getElementById('page-title');
const button = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0]; //vai selecionar apenas o elemento body do array
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);

    


