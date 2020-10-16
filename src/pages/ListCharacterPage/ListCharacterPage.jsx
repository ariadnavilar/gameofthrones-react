import axios from 'axios';
import React, {useEffect, useState} from 'react';
import CharactersGallery from "./components/CharactersGallery";
import {Navigation} from "../../components/Navigation/Navigation";


export default function Characters() {
    const [localcharacters, setLocalcharacters] = useState([])

    useEffect(() => {
            axios.get(process.env.REACT_APP_BACK_URL + 'characters').then(resp => {
                    console.log(resp)
                    setLocalcharacters(resp.data)
                }
            )
        }
    )

    return (
        <div>
            <CharactersGallery characters={localcharacters}/>
            <Navigation/>
        </div>

    );
}
