import {all, call, put, takeLatest} from 'redux-saga/effects';
import {requestHandler} from "../lib/axios";
import * as types from '../types';
import * as actions from '../actions';

function* postAllPiece({payload}) {
    try {
        const {data} = yield call(requestHandler, {
            path: `/shop/search/product`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                ...payload
            }
        })
        yield put(actions.postAllPieceSuccess(data));
    } catch (e) {
        console.log(e);
        yield put(actions.postAllPieceFail())
    }
}

function* postAllMaterial({payload}) {
    try {
        const {data} = yield call(requestHandler, {
            path: `/shop/search/material`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                ...payload
            }
        })
        yield put(actions.postAllMaterialSuccess(data));
    } catch (e) {
        console.log(e);
    }
}

function* getPieceDetail({payload}) {
    try {
        const {id} = payload
        const {data} = yield call(requestHandler, {
            path: `/shop/detail/product/${id}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        yield put(actions.getPieceDetail(data));
    } catch (e) {
        console.log(e);
        yield put(actions.getPieceDetailFail())
    }
}

function* getMaterialDetail({payload}) {
    try {
        const {id} = payload
        const {data} = yield call(requestHandler, {
            path: `/shop/detail/material/${id}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        yield put(actions.getPieceDetailSuccess(data));
    } catch (e) {
        console.log(e);
    }
}

export default all([
    takeLatest(types.POST_ALL_PIECE, postAllPiece),
    takeLatest(types.POST_ALL_MATERIAL, postAllMaterial),
    takeLatest(types.GET_PIECE_DETAIL, getPieceDetail),
    takeLatest(types.GET_MATERIAL_DETAIL, getMaterialDetail),
]);