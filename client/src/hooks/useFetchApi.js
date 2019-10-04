import {useState, useEffect} from 'react'
import axios from 'axios'; 

const useFetchApi = (endpoint)=> {
    const [data, setData] = useState([]); 
    const [url, setUrl] = useState(endpoint); 

    useEffect(() => {

        axios.get(url).then(
            response => {
                console.log(response.data)
                setData(response.data); 
            }
        ).catch(
            error => console.log(error)
            )

    }, [url]); 

    return [data, setUrl]; 
}

export default useFetchApi; 