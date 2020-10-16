import React from 'react';
import '../styles/StylesDetailsComponent.scss';

function DetailComponentCharacter(props){

    const detail = props.detail;

    return (
        <>
            <div className="center-box-image">
                    <figure>
                        <img src={detail.image}  className="size-img" alt="Imagen Character"/>
                        <figcaption>
                            <h2>{detail.name}</h2>
                        </figcaption>
                    </figure>
            </div>
            <div className="flex-box">
                
                <div className="div">
                    <h3>Casa</h3>
                    <div>
                        <img src={props.logoCasa} className="size-logo" alt="Imagen Logo casa"/>
                    </div>
                </div>

                <div className="div">
                    <h3>Alianzas</h3>
                    <div>
                        {detail.allegiances.map( (allegiance, i) =>  <p key={i}>{allegiance}</p>) }
                    </div>
                </div>
                
                <div className="div">
                    <h3>Apariciones</h3>
                    <div className="div-scroll scroll">
                        {detail.appearances.map( (appearance, i) =>  <p key={i}>{appearance}</p>) }
                    </div>
                </div>
                
                <div className="div">
                    <h3>Padre</h3>
                    <div>
                        <p>{detail.father}</p>
                    </div>
                </div>
                
                <div className="div">
                    <h3>Hermanos</h3>
                    <div>
                        {detail.siblings.map( (sibling, i) =>  <p key={i}>{sibling}</p>) }
                    </div>
                </div>
                
                <div className="div">
                    <h3>Titulos</h3>
                    <div className="div-scroll scroll">
                        {detail.titles.map( (title, i) =>  <p key={i}>{title}</p>) }
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailComponentCharacter;
