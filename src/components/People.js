import React, { useEffect, useState } from 'react'; 
import axios from "axios";
import { useParams } from 'react-router-dom';




export default function People(){
    const [acteur, setActeur] = useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const params = useParams();
    const id = params.id;

    const url = `https://swapi.dev/api/people/${id}`;
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



    return <h1>Hello Word</h1>
}