let urlpatch = 'http://localhost:3001/about'
let url = 'http://localhost:3001/boxes'


let dad = document.querySelector('.dad')
let child_one = document.querySelector('.child_one')
let child_two = document.querySelector('.child_two')
let child_three = document.querySelector('.child_three')

axios.get(url)
    .then(res => {
        if (res.status == 200 || res.status == 201) {
            reload(res.data)
        }
    })

function reload(arr) {

    for (let item of arr) {
        if (item.year >= 2012) {
            child_one.innerHTML += `
            <div class="box">
                    <p>${item.manufacturer}</p>
                    <span class="vin">${item.vin}</span>
                    <span>${item.year}</span>
                    <button><a href="../about/about.html#${item.id_}">Подробнее</a></button>
            </div>
        `

        }
        if (item.year >= 2007 && item.year < 2012) {
            child_two.innerHTML += `
            <div class="box">
                    <p>${item.manufacturer}</p>
                    <span class="vin">${item.vin}</span>
                    <span>${item.year}</span>
                    <button><a href="../about/about.html#${item.id_}">Подробнее</a></button>
            </div>
        `
        }
        if (item.year < 2007) {
            child_three.innerHTML += `
            <div class="box">
                    <p>${item.manufacturer}</p>
                    <span class="vin">${item.vin}</span>
                    <span>${item.year}</span>
                    <button><a href="../about/about.html#${item.id_}">Подробнее</a></button>
            </div>
        `
        }
        

    }
    
}