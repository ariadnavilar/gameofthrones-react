import axios from 'axios';
import React, {useEffect, useState} from 'react';
import HousesGallery from "./components/HousesGallery";
import {Navigation} from "../../components/Navigation/Navigation";

export default function ListHousesPage() {

    const [localhouses, setLocalhouses] = useState([])

    useEffect(() => {
            axios.get(process.env.REACT_APP_BACK_URL + 'houses').then(res => {
                    console.log(res)
                    setLocalhouses(res.data)
                }
            )
        }, [])

    return (
        <div>
            <HousesGallery houses={localhouses}/>
            <Navigation/>
        </div>
    );
}




