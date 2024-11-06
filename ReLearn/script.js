const shop = [
    {
        id: "king",
        price: 10
    },
    {
        id: "Queen",
        price: 8
    }
]

const cart = [
    {
        id: "king",
        quantity: 4
    },
    {
        id: "Queen",    
        quantity: 3
    }
]

const payment = cart.map(cartItem => {
    const shopItem = shop.find(item => item.id === cartItem.id) || 0
    
    const total = shopItem? shopItem.price * cartItem.quantity: 0

    return {
        id: cartItem.id,
        total: total
    }
})

console.log(payment)