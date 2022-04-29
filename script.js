// const darkMode = document.getElementById('dark-mode');

// darkMode.addEventListener('change', () => {
//     document.body.classList.toggle('dark');
// }) 


const card = () => {
    let cards = document.querySelectorAll(".content")
    for(let i = O; i < cards.length;i++) {
        const windowHeight = window.innerHeight;
        const elementTop = cards[i].getBoundingClientRect().top;
        const elementVisible = 250;

        if(elementTop < windowHeight - elementVisible) {
            cards[i].classList.add("active");
        } else {
            cards[i].classList.remove("active")
        }
    }
    
}
window.addEventListener("scroll", card)