import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const Card = ({card}) => {

    const handleClickPrint = e => {
		e.preventDefault();
		window.print();
	}

    return (
        <div>
            <Link to='/'>
                <button className="btn btn-warning">
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                </button>
            </Link>
            <button className="btn btn-warning" onClick={handleClickPrint}>
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-printer" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 2H5a1 1 0 0 0-1 1v2H3V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h-1V3a1 1 0 0 0-1-1zm3 4H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v1H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"/>
                    <path fill-rule="evenodd" d="M11 9H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM5 8a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H5z"/>
                    <path d="M3 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                </svg>
			</button>
            <h1 className="cardTitle">Bingo</h1>
            <div className="animalCont">
                {
                    card && card.map( animal => {
                        return (
                            <div className="animalCell">
                                <h3 className="animalName">{animal.name}</h3>
                                <img className="animalImage" src={animal.picture} alt={animal.name}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card;