import * as constants  from './constants';

const initialState = {
    name: 'Vasya',
    email: null
};

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case constants.CHANGE_NAME:
            return { ...state, name: payload };

        case constants.CHANGE_EMAIL:
            // the same
            // return Object.assign({}, state, {
            //     email: payload
            // });

            return { ...state, email: payload };

        default:
            return state;
    }
};