import axios from "axios"


async function UseFetchData(url) {
    let res = axios.get(url);
    const data =res.data;
    return { data };
      
}


export default UseFetchData;