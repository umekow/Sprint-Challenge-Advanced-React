import React, {useState, useEffect} from 'react'
import axios from 'axios'; 

const useFetchApi = (endpoint, initialValue)=> {
    const [data, setData] = useState(initialValue); 

    useEffect(() => {

        axios.get(endpoint).then(
            response => {
                setData(response); 
            }
        )

    }, [data]); 

    return data; 
}

export default useFetchApi; 