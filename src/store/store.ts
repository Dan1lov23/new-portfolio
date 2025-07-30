import { createStore } from 'redux';

const defaultState = {
    isTheme: "light",
};

const reducer = (state = defaultState, action:any) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {
                ...state,
                isTheme: action.payload,
            }
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
