import React from "react";
import {Link} from "react-router-dom";
import {Navigation} from "../../../../components/Navigation/Navigation";
import "./ChronologyGallery.scss"

export default function ChronologyGallery(props) {

    return (
        <div>
            <div className="bigcontainer centered">
                <button className="button">^</button>
                {props.characters.sort((a, b) => b.age - a.age).map((character, index) =>
                    <div className="centered" key={index}>
                        <div>
                            {character.age !== null &&
                            <p className="number">{character.age.age}</p>}
                            <Link to={"/character/detail/" + character.name} style={{ textDecoration: 'none', color: 'white'} }>
                                <p className="letter">{character.name}</p>
                                <img className="roundimg" src={character.image}/>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            <Navigation/>
        </div>
    );
}
