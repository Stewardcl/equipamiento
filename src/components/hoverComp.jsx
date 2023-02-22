import React, { useState } from "react";
import "../css/positions.css";

function HoverComp(props) {
    const [showMessage, setShowMessage] = useState(false);
    const imagen = "../../img/equip/"+props.url;
    const positions = {
        width:props.width,
        height: props.height,
        top: props.top,
        left: props.left
    }
    return (
        <>
            <div className="gwd-div"
                onMouseEnter={() => {
                setShowMessage(true);
                }}
                onMouseLeave={() => {
                setShowMessage(false);
                }}
                onClick={() => {
                    //window.location.href = props.link;
                    window.open(props.link, '_blank');
                }}
                style={positions}
            />
            {showMessage &&
                <>
                    <img src={imagen} alt={props.nombre} className="equip"/>
                    <div className="nombre">
                        <p>Nombre: {props.nombre}<br/>
                        Categoria: {props.categoria}<br/>
                        Precio: ${props.precio}</p>
                    </div>
                </>
            }
        </>
    );
}

export default HoverComp;
