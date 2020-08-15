import * as types from '../types';

const initialState = {
    searchingBy: '',
    sortingBy: 'D',
    count: 30,
    list: 0,
    state: 'pending',
    products: [],
    product: null,
};

export default function (state = initialState, {type, payload}) {
    switch (type) {
        case types.POST_ALL_PIECE_SUCCESS:
            return {
                ...state,
                count: payload.count,
                products: payload.products
            }
        case types.POST_ALL_MATERIAL_SUCCESS:
            return {
                state,
            }
        case types.GET_PIECE_DETAIL:
            return {
                state,
                product: payload.product
            }
        case types.GET_MATERIAL_DETAIL:
            return {
                state,
            }
        default:
            return state;
    }
}