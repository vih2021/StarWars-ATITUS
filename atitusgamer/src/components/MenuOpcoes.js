import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function MenuOpcoes() {

    const navigate = useNavigate();
    const logoff = () => {
        sessionStorage.removeItem("login")
        navigate("/")
    }
    return (
        <div className='menu'>
            <Link to="/frequentes">
                <div className='itemMenu'>HOME</div>
            </Link>
            <Link to="/films">
                <div className='itemMenu'>FILMS</div>
            </Link>
            <Link to="/starships">
                <div className='itemMenu'>STARSHIPS</div>
            </Link>
            <Link to="/people">
                <div className='itemMenu'>PEOPLE</div>
            </Link>
            <Link to="/planets">
                <div className='itemMenu'>PLANETS</div>
            </Link>
            <Link to="/species">
                <div className='itemMenu'>SPECIES</div>
            </Link>
            <Link to="/duvidas">
                <div className='itemMenu'>DÚVIDAS</div>
            </Link>
            <Link to="/sobre">
                <div className='itemMenu'>SOBRE</div>
            </Link>
            <div className='itemMenu' onClick={logoff}>Logoff</div>
        </div>
    )
}
