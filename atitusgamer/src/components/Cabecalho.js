import React from 'react'

export default function Cabecalho(props) {

    let contagens = localStorage.getItem("contagens")

    return (
        <>
        <div className='contagem'>
            <label>{contagens}</label>
        </div>
        <div className='cabecalho'>
            <h1 style={{ color: "white", fontSize: 80 }}>STAR WARS</h1>
        </div>
        </>
    )
}
