import axios from "axios";

export const GETJACKETSDATA = "GETJACKETSDATA";

export const JacketsData = (payload) => ({

    type : GETJACKETSDATA,
    payload : payload
})

export const getJacketsData = () => (dispatch) => {

    axios.get("https://mac-ecom.herokuapp.com/jackets").then((res) => {
        dispatch(JacketsData(res.data))
    })
}
