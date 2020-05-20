export const FETCH_COINS_BEGIN   = 'FETCH_COINS_BEGIN';
export const FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS';
export const FETCH_COINS_FAILURE = 'FETCH_COINS_FAILURE';
export const FETCH_SEARCH_BEGIN   = 'FETCH_SEARCH_BEGIN';
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_SEARCH_FAILURE = 'FETCH_SEARCH_FAILURE';
export const FETCH_LOGIN_BEGIN   = 'FETCH_LOGIN_BEGIN';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';


export const fetchProductsBegin = () => ({
    type: FETCH_COINS_BEGIN
});

export const fetchProductsSuccess = coins =>{
   return ({
        type: FETCH_COINS_FAILURE,
        products: coins
    });
}

export const fetchProductsFailure = error => ({
    type: FETCH_COINS_SUCCESS,
    payload: { error }
});
export const fetchCoinsBegin = () => ({
    type: FETCH_SEARCH_BEGIN
});

export const fetchCoinsSuccess = coins =>{
   return ({
        type: FETCH_SEARCH_SUCCESS,
        coins: coins
    });
}

export const fetchCoinsFailure = error => ({
    type: FETCH_SEARCH_FAILURE,
    payload: { error }
});





export const fetchLoginBegin = () => ({
    type: FETCH_SEARCH_BEGIN
});

export const fetchLoginSuccess = item =>{
   return ({
        type: FETCH_SEARCH_SUCCESS,
        user: item
    });
}

export const fetchLoginFailure = error => ({
    type: FETCH_SEARCH_FAILURE,
    payload: { error }
});