import { Grid } from '@mui/material'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import FadeLoader from "react-spinners/FadeLoader"

export default function Loading() {
  return (
    <>
    <Grid container style={{ padding: 10 }}>
        <Grid item md={12} xs={12} sm={12}>
            <Cabecalho />
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
            <MenuOpcoes />
            <div className='corpo'>
                <div className='loader'>
                    <FadeLoader color={'black'} size={100}/> 
                </div>
                <label className='carregamento_message'>Aguarde, os dados estão Carregando...</label>
            </div>
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
            <Rodape />
        </Grid>
    </Grid>
    </>
  )
}
