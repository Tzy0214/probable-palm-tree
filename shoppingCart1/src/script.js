const shop = document.getElementById('shop')
let basket = JSON.parse(localStorage.getItem("Keyboardy-LearningProject1")) || []

const generateShop = () => {
    return (shop.innerHTML = shopItemData.map((item) => {
        let {id, name, price, desc, image} = item;
        let search = basket.find((x) => x.id === id) || []
        
        return `
        <div class='productHouse' id=product-id-${id} class="item">
            <img width="222px" height="180px" src=${image} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>${price}</h2>
                    <div class="buttons">
                        <i onclick="decrement('${id}')" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">
                            ${search.item === undefined? 0: search.item}
                        </div>
                        <i onclick="increment('${id}')" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>`
    }).join(""))
}

generateShop()

const decrement = (id) => {
    let selectedItem = id

    let search = basket.find((x) => x.id === selectedItem)

    if (search === undefined) return
    else if (search.item === 0) return
    else search.item -= 1

    update(selectedItem)
    
    basket = basket.filter((x) => x.item !== 0)

    localStorage.setItem("Keyboardy-LearningProject1", JSON.stringify(basket))
}

const increment = (id) => {
    let selectedItem = id

    let search = basket.find((x) => x.id === selectedItem)

    if(search === undefined){
        basket.push({
            id: selectedItem,
            item: 1
        })
    } else {
        search.item += 1
    }

    update(selectedItem);
    
    localStorage.setItem("Keyboardy-LearningProject1", JSON.stringify(basket))
}

const update = (id) => {
    let search = basket.find((x) => x.id === id )
    document.getElementById(id).innerHTML = search.item;
    calculation()
}

const calculation = () => {
    let cartIcon = document.getElementById('cartAmount')
    let totalItem = (basket.reduce((acc, x) => acc + x.item, 0))
    cartIcon.innerHTML = totalItem
}

calculation()