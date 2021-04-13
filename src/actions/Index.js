export const fetchRequest=()=>{
    return(dispatch)=>{
      return callApi('product',"GET",null).then((response)=>{
         dispatch(fetch(response.data));
      })
    }
  }
  