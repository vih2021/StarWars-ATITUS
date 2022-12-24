import { Grid } from '@mui/material'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { SocialIcon } from 'react-social-icons';

export default function Sobre() {
  return (
    <>
    <Grid container style={{ padding: 10 }}>
            <Grid item md={12} xs={12} sm={12}>
            <Cabecalho />
            </Grid>
            <Grid item md={12} xs={12} sm={12}>
                <MenuOpcoes />
                <div className='corpo_sobre'>
                    <div className='info_dev'>
                        <div className='developer'></div>

                        <h3 style={{color: "white"}}>Vitória Gonçalves Vieira</h3>
                        <label style={{color: "white"}}>Email: 1127649@atitus.edu.br</label>
                        <br></br>
                        <br></br>
                        <label style={{color: "white"}}>RA: 1127649</label>

                        <div className='SocialMedia' style={{marginTop: "20px"}}>
                            <SocialIcon url="https://www.instagram.com/imvithoria/" />
                            <SocialIcon url="https://www.linkedin.com/in/vit%C3%B3ria-gon%C3%A7alves-vieira-a2a658225/" style={{margin:"10px"}}/>
                            <SocialIcon url="https://www.facebook.com/vitoria.goncalvesvieira" />
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item md={12} xs={12} sm={12}>
                <Rodape style={{color: "black"}}/>
            </Grid>
        </Grid>
    </>
  )
}
