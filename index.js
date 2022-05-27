// import redux
const redux = require('redux');


// describe reducer
const counterReducer = (state = { counter: 1 }, action) => {
    return {
        counter: state.counter
    }
};

//create store and pass reducer
const store = redux.createStore(counterReducer);


//subscribe method
const counterSubscribe = () => {
    const latestState = store.getState();
    console.log(latestState);
};

//subscribe store
store.subscribe(counterSubscribe);

//dispatch store
store.dispatch({ counter: 2, type: 'demo' });