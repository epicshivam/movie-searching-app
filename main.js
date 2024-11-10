const form = document.querySelector('form');
const container = document.querySelector('.image-container');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let query = document.querySelector('input').value;
    console.log(query);

    if(query===''){
        alert('Please enter a search query');
    }
    tvMazeApi(query);
})


async function tvMazeApi(query){
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const movies = await req.json();
    clearPage();
    makeImages(movies);
}

function clearPage() {
    container.innerHTML = '';
}

function makeImages(movies) {
    for (let movie of movies){
        let src = movie.show.image.medium;
        const image = document.createElement('img');
        image.src = src;
        container.appendChild(image);
    }
}
