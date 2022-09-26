import axios from "axios"


async function UseFetchData(url) {
    let res = axios.get(url).then((res) =>  res ).catch((err) => console.log(err))
    console.log({...res}, "asdfshdfg")
    return {...res};
      
}


export default UseFetchData;