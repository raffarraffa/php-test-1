const aplicacion = document.querySelector('.demo')

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(usuario => {
        const p = document.createElement('span')
        p.innerHTML = usuario.name
        aplicacion.appendChild('span')
    });
})
.catch(err => console.log(err))
