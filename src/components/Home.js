import React, { useEffect, useState } from 'react'; 
import axios from "axios";


export default function Home() {
    const [acteur, setActeur] = useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const url = `https://swapi.dev/api/people/`;
    useEffect(() => {axios.get(url)
        .then(response => {
            setActeur(response.data);
            setLoaded(true);
        })
        .catch(err => {
            console.log(err.response.status);
            setError(err);
            setLoaded(true);
        })
    },[url])    

    return <h1>Hello</h1>
}
