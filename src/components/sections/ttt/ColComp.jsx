import React from 'react';
import { useEffect, useContext } from 'react';

import { Context } from '../../pages/TicTacToe';

import Aos from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faO, faX } from '@fortawesome/free-solid-svg-icons';

const ColComp = (props) => {
    
    console.log('col comp', props, props.value)

    useEffect(()=>{
        Aos.init()

    }, [])

    let ret = <Context.Consumer>
        {
            (value)=>{
                const isWinner = value.winner.includes(props.id)

                if(props.col===true){
                    return (<FontAwesomeIcon icon={faO} size={'4x'} className={`action-human ${isWinner? 'match-winner' : ''}`} data-aos="zoom-in" /> );
                }else if(props.col===false){
                    return (<FontAwesomeIcon icon={faX} size={'4x'}  className={`action-computer ${isWinner? 'match-winner' : ''}`}  data-aos="zoom-in" /> );
                }else if(props.col===undefined){
                    return (<></>);
                }
            }
        }
    </Context.Consumer>

    return ret;
    
}

export default ColComp;
