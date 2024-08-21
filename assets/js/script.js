// const url = 'https://jokes-always.p.rapidapi.com/common';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '14a9589186msh7169f0fd0f0af87p1328b4jsn59956326647a',
// 		'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// let apiKey = "loebcPdO9YuHTBHCODP1RA==VAJnRm0UQN7sENQu";
// let apiUrl = "https://api.api-ninjas.com/v1/jokes";





const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener('click', generateJoke)

generateJoke();

// USING async/await
async function generateJoke() {

    const config = {
        headers: {
            Accept: 'application/json',
        },
}
    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json()

    jokeElement.innerHTML = data.joke
}
// USING .then()
// function generateJoke() {

//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
// }
//     fetch('https://icanhazdadjoke.com/', config)
//     .then(res => res.json())
//     .then(data => {
//         jokeElement.innerHTML = data.joke
//     });
// }