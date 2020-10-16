import React, {useEffect, useState} from "react";
import axios from 'axios';
import ChronologyGallery from "./components/ChronologyGallery/ChronologyGallery";

export default function ChronologyPage() {

    const [characters, setCharacters] = useState(null);
    const [agesDesc, setAgesDesc] = useState(null);
    const [agesAsc, setAgesAsc] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BACK_URL + 'characters').then(res => {
            const characterList = res.data;
            console.log(characterList[0]);
            setCharacters(characterList);
        })

        if (characters !== null) {
            let descending = characters.sort((a, b) => a.age.age - b.age.age);
            setAgesDesc(descending);

            let ascending = characters.sort((a, b) => b.age.age - a.age.age);
            setAgesAsc(ascending);
        }

        if (agesDesc !== null) {

            console.log(agesDesc);
        }

        console.log(agesAsc);


    }, []);


    console.log(characters);

    return (
        <div>
            {characters && <ChronologyGallery characters={characters}/>}
        </div>
    )

}

