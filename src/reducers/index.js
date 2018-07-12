import { SEARCH } from '../actions';
import { combineReducers } from 'redux';

const InitialState = {
    keyword : ''
};

const search = (state = InitialState, action) => {
    switch(action.type) {
        case SEARCH:
            return {
              keyword : action.keyword,
              ...state,
            }
        default:
            return state;
    }
};


const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const counterApp = combineReducers({
    search,
    extra
});

export default counterApp;
