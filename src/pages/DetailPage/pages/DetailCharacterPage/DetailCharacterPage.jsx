import React from 'react';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import DetailComponentCharacter from '../../components/DetailComponentCharacter/DetailComponentCharacter';

function DetailCharacterPage() {


    // Viene del gallery de la lista characters mediante el Link con la url de esta vista en el router
    const name = useParams().name;
    // Importante hacer la inicializacin a null, si no da undefined cuando hacemos la comprobacion
    const [detailCharacter, setDetailCharacter] = useState(null);
    const [logoURL, setLogoUrl] = useState(null);

    let nombreCasa = '';

    useEffect(() => {
        // Recordar que al ser asincrono la peticion tiene que estar dentro del primer then
        axios.get(process.env.REACT_APP_BACK_URL + 'characters/' + name)
            .then((res) => {
                console.log(res.data);
                nombreCasa = res.data.house;
                console.log(nombreCasa);
                setDetailCharacter(res.data);
                
                // Preguntar si esta correcto el nombre de la casa contiene &;...
                axios.get(process.env.REACT_APP_BACK_URL + 'houses/' + nombreCasa)
                    .then((res) => {
                        const houseDetail = res.data[0];
                        if (houseDetail && houseDetail.logoURL) {
                            console.log(houseDetail.logoURL);
                            setLogoUrl(houseDetail.logoURL);
                        } else {
                            setLogoUrl('https://n7.nextpng.com/sticker-png/939/404/sticker-png-sigil-house-arryn-reptile-logo-reed-drawing-logo-house-arryn-sigil-game-of-thrones.png');
                            console.log(logoURL);
                        }
                    });
            });
    }, []);

    return (
        <>
            {detailCharacter && <DetailComponentCharacter detail={detailCharacter} logoCasa={logoURL}/>}
        </>
    );
}

export default DetailCharacterPage;
