import React from 'react';
import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DetailComponentHouse from '../../components/DetailComponentHouse/DetailComponentHouse';

function DetailHousePage(){

    const name = useParams().name;

    const [detailHouse, setDetailHouse] = useState(null);

    useEffect( ()=>{
        axios.get(process.env.REACT_APP_BACK_URL + 'houses/' + name)
            .then( (res)=>{
                console.log(res.data[0]);
                setDetailHouse(res.data[0]);
            });
    }, []);

    return (
        <div>
            {detailHouse && <DetailComponentHouse detail={detailHouse}/>}
        </div>
    );

}

export default DetailHousePage;