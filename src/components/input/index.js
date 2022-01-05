import React from 'react'
import { InputStyle } from './style'

function Input (props) {    
    let type = props.type || "";
    let id = props.id;
    let label = props.label || "";
    let placeholder = props.placeholder || "";
    let density = props.density || "";
    let button = props.button || false;
    let ico = props.ico ;
    let feedback = props.feedback || "";
    let inputinline = props.inputinline || false;
    let validacao = props.validacao || "";
 
    
    return(
      <InputStyle>
        
        {
            type == 'icone' ?

                <Icone
                    label={label}
                    id={id}
                    
                    inputinline={inputinline}
                    type="icone"
                    ico={props.ico}
                    placeholder={placeholder}
                    density={density}
              
                /> :

                <Padrao
                    label={label}
                    id={id}
                    validacao={validacao}
                    placeholder={placeholder}
                    density={density}
                    inputinline={inputinline}
                    button={button}
                    ico={ico}
                />

        }
        
        {
            feedback && ""
        }
      </InputStyle>
    );
}


///{`br-input  ${props.inputinline || ''} `}


function SwitchCase(props) {
    switch(props.validacao) {
      case 'success':
        return 'Mensagem de Sucesso';
      case 'danger':
        return 'Mensagem de Erro';
      default:
        return 'Mensagem informativa';
    }
  }
  
  
function Padrao(props) {
    let message = SwitchCase(props)

    console.log(props.validacao)
    return(
        <div className={`br-input  ${props.density || ''} ${props.button && 'input-button'} ${props.inputinline && 'input-inline'}`}>
           
                <div class="input-label">
                    <label for={props.id}>{props.label}</label>
                </div>
           
                <div class="input-content">
                    <input id={props.id} type="text" placeholder={props.placeholder || ''}/>   

                    <div>
                            {props.validacao && <span class={`feedback  ${props.validacao || ''}`} role="alert">
                                <i class="fas fa-check-circle" aria-hidden="true">
                                    {props.ico}
                                </i>{message}</span>}
                    </div>
                  
                </div>
         

            {
                props.button 
                && 
                <button className="br-button" type="button" aria-label="Mostrar senha">
                    <i className="fas" aria-hidden="true">
                        {props.ico}
                    </i>
                </button>        
            }
             
        </div>
    );
}

function Icone(props)
{
    return(
    <div className={`br-input  ${props.density || ''} ${props.inputinline && 'input-inline'}`}>

        <div class="input-label">
            <label for={props.id}>{props.label}</label>
        </div>

            <div className="input-group" >
                <div className="input-icon">
                    <i className={`fas`}  aria-hidden="true">
                        {props.ico}
                    </i>  
            </div>

                <input id="input-default" type="text" placeholder={props.placeholder || ''}/> 
        </div>
    </div>
    );
}

export default Input;