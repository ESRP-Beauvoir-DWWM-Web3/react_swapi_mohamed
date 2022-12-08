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
        });
    },[url])

    if(!loaded) {
        return(<h1>En cours de chargement...</h1>);
    } else if(error) {
        return (<h1>Une erreur {error.response.status} s'est glissée ici...</h1>)
    } else {
        return (
            <div>
                    <h1>{acteur.name}</h1>
                    
                <div className="container formulaire mt-5 text-center border border-dark p-5 bg-light">
                    <h1 className="mb-5">Recherche d’un personnage par son Id</h1>
                    <form>
                        <input className="me-5" id="people"></input>
                        <button className="btn btn-secondary" type="submit">Rechercher</button>
                    </form>
                </div>

            </div>
        )
    }    
}   