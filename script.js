
const listEl = document.querySelector('ul');


document.addEventListener("DOMContentLoaded", function () {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                listEl.insertAdjacentHTML('beforeend', `<li>${post.score}</li>`);
            });
           
        })
        
        .catch(error => console.error("Error fetching JSON data:", error));
        
});