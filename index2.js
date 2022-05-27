const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {

    if (action.type === 'inc')
        return {
            counter: state.counter + 1
        }
    else if (action.type === 'dec') {
        return {
            counter: state.counter - 1
        }
    }
    else {
        return state;
    }
}


const store = redux.createStore(counterReducer);


const counterSubscribe = () => {
    const latest = store.getState();
    console.log(latest);
}
store.subscribe(counterSubscribe);

store.dispatch({ counter: 0, type: 'inc' });
store.dispatch({ counter: 0, type: 'inc' })
store.dispatch({ counter: 0, type: 'inc' })