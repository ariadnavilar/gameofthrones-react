import React from 'react';
import {Navigation} from "../../components/Navigation/Navigation";
import "./Homepage.scss";
import background from "./assets/image1.svg";


export function Homepage() {
    return (
        <div className="green">
            <h1 className="got title">GAME OF THRONES</h1>
            <Navigation/>
        </div>
);
}
