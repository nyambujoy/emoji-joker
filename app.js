const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';
const randomBtn = document.querySelector('.next')
const joke = document.querySelector('.joke')

console.log(joke, randomBtn)


randomBtn.addEventListener('click', () => {
    console.log('hello')
    handleData()

})



async function handleData() {
    const response = await fetch(url);
    joke.classList.remove('fade')

    if (!response.ok) {
        joke.textContent = 'sorry server error'
    }
    const data = await response.json()
    console.log(data)
    handleDisplay(data)
    return data
}

function handleDisplay(data) {
    joke.textContent = data.joke
    joke.classList.add('fade')
}