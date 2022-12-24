import { Grid } from '@mui/material'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import React, { useLayoutEffect, useState } from 'react'
import { pegarDuvidas } from '../services/BancoService'
import Loading from "../components/Loading"
export default function Frequentes() {

    const [duvidas, setDuvidas] = useState([])

    const buscarDuvidas = () => {
      pegarDuvidas()
        .then((dados) => setDuvidas(dados))
        .catch((e) => alert(e))
    }
  
    useLayoutEffect(() => {
      buscarDuvidas()
    }, [])

    if(duvidas.length <= 0){
        return(
            <>
                <Loading/>
            </>
        )
    }else{
        return (
            <>
            <Grid container style={{ padding: 10 }}>
                <Grid item md={12} xs={12} sm={12}>
                <Cabecalho />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                <MenuOpcoes />
                <div className='corpo_sobre'>
                    <h2 style={{textAlign: "center"}}>Perguntas Frequentes</h2>
                    <Grid container style={{ padding: 10 }}>               
                        {duvidas.map((row) => (
                        <Grid item md={3} xs={12} sm={12}>
                            <textarea className="Perguntas" value={row.duvida}></textarea>
                        </Grid>
                        ))}              
                    </Grid>
                </div>
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                <Rodape />
                </Grid>
            </Grid>
            </>
        )
    }
}
