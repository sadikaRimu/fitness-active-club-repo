const addToDb = id => {
    let ExerciseCart = {};

    //get the info from local storage
    const storedCart = localStorage.getItem('Exercise-time-card');
    if (storedCart) {
        ExerciseCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = ExerciseCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        ExerciseCart[id] = newQuantity;
    }
    else {
        ExerciseCart[id] = 1;
    }
    localStorage.setItem('Exercise-time-card', JSON.stringify(ExerciseCart));
}
const getStoredExercise = () => {
    let storedInfo = {};

    //get info   from local storage
    const storedBreakTime = localStorage.getItem('Break-time-card');
    if (storedBreakTime) {
        storedInfo = JSON.parse(storedBreakTime);
    }
    return storedInfo;
}
const getStoredExerciseTime = () => {
    let storedInfo = {};

    //get info   from local storage
    const storedBreakTime = localStorage.getItem('Exercise-time-card');
    if (storedBreakTime) {
        storedInfo = JSON.parse(storedBreakTime);
    }
    return storedInfo;
}
const setBreakTime = (num) => {

    localStorage.setItem('Break-time-card', num);
}
export {
    addToDb,
    getStoredExercise,
    getStoredExerciseTime,
    setBreakTime
}