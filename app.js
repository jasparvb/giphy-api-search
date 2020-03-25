//Search for a gif using the GIPHY API

const gifRow = document.querySelector('.row');

async function searchGif(searchTerm) {
    const request = {
        params: {
            q: searchTerm,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    };
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", request);
    let i = Math.floor(Math.random() * res.data.data.length);
    console.log(i);
    console.log(res);
    const imgURL = res.data.data[i].images.original.url;
    appendGif(imgURL);
}

function appendGif(url) {
    const newDiv = document.createElement('DIV');
    const newImg = document.createElement('IMG');
    newDiv.classList.add('col-md-3', 'p-3');
    newImg.setAttribute('src', url);
    newDiv.append(newImg);
    gifRow.append(newDiv);
}

function clearGif() {
    gifRow.innerHTML = '';
}

document.addEventListener('click', function(e) {
    e.preventDefault();
     if(e.target.matches('#submit')){
        const inputVal = document.querySelector('#search');
        searchGif(inputVal.value);
        inputVal.value = '';
    } 
    if(e.target.matches('#clear')) clearGif();
});