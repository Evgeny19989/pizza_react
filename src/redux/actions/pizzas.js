import axios from "axios";


export const setLoaded  = val =>{
    return {
        type:'SET_LOADED' ,
        payload:val
    }
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});

export const fetchPizzas = (category, sortBy) => dispatch => {
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}`).then(({data}) => {
        dispatch(setPizzas(data))

    });

}


