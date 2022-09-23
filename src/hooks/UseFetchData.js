import { useEffect, useState } from "react";
import axios from "axios"

function UseFetchData(url) {
    const [data, setData] = useState([]);

    console.log("1",url)

    useEffect(() => {
        const fetchData = () => {
            axios.get(url).then(response => {
                setData(response.data)
            })
        }
        
        fetchData()
        
      }, [url])
    
    return { data };
      
}


export default UseFetchData