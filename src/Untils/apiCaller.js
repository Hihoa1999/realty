import axios from "axios";
import * as Config from "../constants/ConFig";
export default function callApi(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`, 
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}

export const getAllProduct = (limit,page=1)=>{
 return callApi("product", "GET", null).then((response)=>{
     const totalPage=Math.round(response.data.length / limit + 1);
      return {
        totalPage,
        products:response.data.slice((page-1)*limit,(page-1)*limit+limit),
      }
  })
}