import React from "react";


export default function ActeurArray(props) {
    return(
        <div>
            {props.subtitle===""
                ? <h1 className="text-center">Bienvenue sur Starwars</h1>
                : <h1 className="text-center">{props.subtitle}</h1>}
            <div id="pokemonList" className="row m-2">
                {props.componentArray.map((people, index)=>{
                    return(
                        <div className="col-3 d-flex flex-column border" key={index}>
                            <h3 className="text-center">{people.name}</h3>
                            <a className="text-center" href={"/people/" + people.id}>En voir plus</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
