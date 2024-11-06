let basket = JSON.parse(localStorage.getItem("Keyboardy-LearningProject1")) || []
let label = document.getElementById('label')
let shoppingCart = document.getElementById('shopping-cart')


const calculation = () => {
    let cartIcon = document.getElementById('cartAmount')

    let totalItem = basket.reduce((acc, x) => acc + x.item, 0)

    cartIcon.innerHTML = totalItem
}

calculation()

let generateCartItem = () => {
    if (basket.length !== 0) {
        return (shoppingCart.innerHTML = basket.map(x => {
            let {id, item} = x
            let search = shopItemData.find(y => y.id === id) || []

            return `
                <div class='cart-item'>
                    <img class='cartImage' src='${search.image}' alt='' />
                    
                    <div class='cart-details'>
                        <div class='title-price-x'>
                            <h4 class='title-price'>
                                <p>${search.name}</p>
                                <p class='cart-item-price'>$ ${search.price}</p>
                            </h4>

                            <i onclick="removeItem('${id}')" class="bi bi-x-lg"></i>
                        </div>  

                        <div class="buttons">
                            <i onclick="decrement('${id}')" class="bi bi-dash-lg"></i>
                            
                            <div id=${id} class="quantity">${item}</div>
                        
                            <i onclick="increment('${id}')" class="bi bi-plus-lg"></i>
                        </div>
                        
                        <h3>$ ${search.price * item}</h3>
                    </div>
                </div>
            `

        }).join(""))
        } else {
        shoppingCart.innerHTML = ``
        label.innerHTML = `
        <h2>Cart is empty</h2>
        <a href="index.html">
            <button class="homeBtn">Back to home</button>
        </a>
        `
    }
}

generateCartItem()

const decrement = (id) => {
    let selectedItem = id

    let search = basket.find((x) => x.id === selectedItem)

    if (search === undefined) return
    else if (search.item === 0) return
    else search.item -= 1

    update(selectedItem)
    
    basket = basket.filter((x) => x.item !== 0)

    generateCartItem()
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
    generateCartItem()
    
    localStorage.setItem("Keyboardy-LearningProject1", JSON.stringify(basket))
}

const update = (id) => {
    let search = basket.find((x) => x.id === id )
    document.getElementById(id).innerHTML = search.item;
    calculation()
    totalAmount()
}

const removeItem = (id) => {
    basket = basket.filter((x) => x.id !== id)
    localStorage.setItem("Keyboardy-LearningProject1", JSON.stringify(basket))
    calculation()
    generateCartItem()
    totalAmount()
}

const totalAmount = () => {
    if(basket.length !== 0){
        const amount = basket.map((x)=>{
            let {id, item} = x
            let search = shopItemData.find((y)=> y.id === id) || []
            return item * search.price
        }).reduce((x,y) => x+y, 0)

        const totalCost = document.getElementById('label')
        label.innerHTML = `
            <h2>Total Price: $${amount}</h2>
            <button class='checkout'>Checkout</button>
            <button class='removeAll' onclick='clearCart()'>Clear Cart</button>
        `
    } else return
}

const clearCart = () => {
    basket = []
    calculation()
    generateCartItem()
    localStorage.setItem("Keyboardy-LearningProject1", JSON.stringify(basket))
}

totalAmount()