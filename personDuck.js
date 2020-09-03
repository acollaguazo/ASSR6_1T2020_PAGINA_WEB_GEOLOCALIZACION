import axios from "axios";

const URL = "http://34.69.62.82:9009/cifras/api/v1/adm/persona/search";

// const
const initialState = {
  fetching: false,
  array:[]
};


const FETCH_SUCESS = "FETCH_SUCESS";
const FETCH_ERROR = "FETCH_ERROR";
const REQUEST = "REQUEST";

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST: {
      console.log("ENTRO EN req");
      console.dir(state);
      return { ...initialState };
    }
    case FETCH_SUCESS: {
    
      return { ...state, fetching: false, array :action.payload};
    }
    case FETCH_ERROR: {
      console.log("ENTRO EN FETCH_ERROR  ERROR" + state);
      return {
        ...state,
        fetching: false,
        error: action.payload,
      //  message: ERROR_MSG,
      };
    }
    default: 
    return state;
  }
}

export const fecthPerson = () => (dispatch, getState) => {
 
  return axios
    .post(URL, {
      "estado": "ACT",
      "tipo": "NAT",
      "tipoIdentificacion": "CED"
    })
    .then((res) => {
       console.log("fetch person"+JSON.stringify(res));
      console.dir(res.data.result);
      dispatch({
        type: FETCH_SUCESS,
        payload: res.data.result,
      });
   
    })
    .catch((err) => {
      console.dir(err);
      console.log("FETCHERRR" + err);
      dispatch({
        type: FETCH_ERROR,
        payload: err.message,
      });
    });
  
};
