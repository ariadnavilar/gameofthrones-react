import React from "react";
import {Link} from "react-router-dom";
import "./HousesGallery.scss";

export default function HousesGallery(props) {
    return (
            <div className="bigcontainer row">
                {props.houses.map((houses, i) =>
                    <div className="col-lg-2 col-md-4 col-sm-12 nomargin">
                        <Link to={"/house/detail/" + houses.name}>
                            <img className="house_image" src={houses.logoURL ? houses.logoURL : 'houses.jpg'} alt=""/>
                            <p className="Rectangle-p">{houses.name}</p>
                        </Link>
                    </div>
                )}
            </div>
    )
}
