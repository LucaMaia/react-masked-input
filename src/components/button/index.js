import React from 'react';
import { ButtonStyle } from './style';

function Button (props) {
    const background = props.backgroundDiv || false;

    return (
        <ButtonStyle>        
            <div className={`${background ? "bg-primary-darken-02 pt-4 pb-4" : ""}`}>
                <GenerateButton 
                    {...props}
                />
            </div>
        </ButtonStyle>
    );
}

function GenerateButton (props) {
    const active = props.ativo || false; // true | false    
    const inverted = props.inverted || false; // true | false    
    const isLoading = props.loading || false; // true | false    
    const isBlock = props.tipoBlock || false; // true | false     
    const isDisabled = props.disabled || false; // true | false     

    let background = ""; // primary | secondary | ""
    if(props.background === "primary" || props.background === "secondary") {
        background = props.background;
    }

    return (
        <button type="button" 
                className={`br-button mt-3 mt-sm-0 ml-sm-3 ${props.ico && !props.titulo ? "circle" : ""} ${background} ${active ? "active" : ""} ${inverted ? "inverted" : ""}
                            ${isLoading ? "loading" : ""}  ${isBlock ? "block" : ""} 
                        `}  
                { ...(isDisabled ? { "disabled": 'disabled' } : {}) }
        >
            {
                props.ico ?
                    <i className={`fas ${props.titulo ? "mr-1" : ""} `} aria-hidden="true"> {props.ico} </i>
                :
                    ""
            }

            {
                props.titulo ?
                    props.titulo
                :
                    ""
            }
        </button>
    );   
}

export default Button;