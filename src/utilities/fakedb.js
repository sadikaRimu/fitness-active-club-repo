const getStoredExercise = () => {
    let shoppingCart = {};

    //get info   from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
export {
    getStoredExercise
}