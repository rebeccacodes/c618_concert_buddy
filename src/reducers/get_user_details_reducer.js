import types from '../actions/types';

const DEFAULT_STATE = {
    details: {}
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.GET_USER_DETAILS:
            if (!action.payload) {
                return {
                    ...state,
                    details: {data: null}
                    
                }
            }
            const tripObject = action.payload.userTrips.data.data[0];
            const whosgoing = action.payload.whosgoing;

            return {
                ...state,
                details: tripObject,
                going: whosgoing
            }
        default:
            return state;
    }
}   