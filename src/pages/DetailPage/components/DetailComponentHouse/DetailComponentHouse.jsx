import React from 'react';
import '../styles/StylesDetailsComponent.scss';

function DetailComponentHouse(props){

    const detail = props.detail;

    return (
        <>
            <div className="center-box-image">
                <figure>
                    <img src={detail.logoURL}  className="size-img" alt="Logo de la casa"/>
                    <figcaption>
                        <h3>{detail.name}</h3>
                    </figcaption>
                </figure>
            </div>
            <div className="flex-box">
                <div className="div">
                    <h3>LEMA</h3>
                    <div>
                        <p>{detail.words}</p>
                    </div>
                </div>

                <div className="div">
                    <h3>SEDE</h3>
                    <div>
                        {detail.seat.map( (itemSeat, i) =>  <p key={i}>{itemSeat}</p>)}
                    </div>
                </div>
                
                <div className="div">
                    <h3>REGION</h3>
                    <div>
                        {detail.region.map( (itemRegion, i) =>  <p key={i}>{itemRegion}</p>)}
                    </div>
                </div>
                
                <div className="div">
                    <h3>ALIANZAS</h3>
                    <div>
                        {detail.allegiance.map((itemAllegiance, i) => <p key={i}>{itemAllegiance}</p>)}
                    </div>
                </div>
                
                <div className="div">
                    <h3>RELIGIONES</h3>
                    <div>
                        {detail.religion.map( (itemReligion, i) =>  <p key={i}>{itemReligion}</p>)}
                    </div>
                </div>
                
                <div className="div">
                    <h3>FUNDACION</h3>
                    <div>
                        <p>{detail.createdAt}</p>
                    </div>
                </div>
            
            </div>
        </>
    );
}

export default DetailComponentHouse;
