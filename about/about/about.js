let url = 'http://localhost:3001/boxes'
let cont = document.querySelector('.cant')
axios.get(url)
    .then(res => {
        if (res.status == 200 || res.status == 201) {
            let a = window.location.href.split('#')
            a = a[a.length - 1]
            proverka(res.data, a)
        }
})

function proverka(elem, link) {
    for (let item of elem) {
        if (item.id_ == link) {
            console.log(item);
            reload(item)
        }
    }
}
function reload(arr) {

    cont.innerHTML += `
            <div class="box">
                    <p>${arr.manufacturer}</p>
                    <span class="vin">${arr.vin}</span>
                    <span>${arr.year}</span>
            </div>
        `
}