import React from "react";
import {Link} from "react-router-dom";
import "./CharactersGallery.scss";

export default function characters(props) {
    return (
            <div className="bigcontainer row">
                {props.characters.map((characters, i) =>
                    <div className="col-lg-2 col-md-4 col-sm-12 nomargin">
                        <Link to={"/character/detail/" + characters.name}>
                            <img className="character_image" src={characters.image} alt=""/>
                            <p className="Rectangle-p">{characters.name}</p>
                        </Link>
                    </div>
                )}
            </div>
    )
}
