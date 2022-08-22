const joke = document.querySelector('p')
const getJoke = async() => {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const randomJoke = await res.json()
    joke.innerText = randomJoke.value
}