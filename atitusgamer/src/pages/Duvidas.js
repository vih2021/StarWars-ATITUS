import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { useNavigate } from 'react-router-dom'
import MenuOpcoes from '../components/MenuOpcoes'
import { salvarDuvidas } from '../services/BancoService'

export default function Duvidas(props) {
    const navigate = useNavigate();

    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [duvida, setDuvida] = useState("")

    const limpar = () => {
        setNome("")
        setTelefone("")
        setDuvida("")
    }

    const salvar = async () => {

        const dados = {
            nome: nome,
            telefone: telefone,
            duvida: duvida
        }

        try {
            await salvarDuvidas(dados)
            alert("Dados Salvos com Sucesso")
            navigate('/frequentes')

        } catch (error) {
            alert(error)
        }
    }

    return (
        <>
            <Grid container style={{ padding: 10 }}>
                <Grid item md={12} xs={12} sm={12}>
                    <Cabecalho />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <MenuOpcoes />
                    <div className='corpo'>
                        <div className='divisao'>
                            <div className='contato_duvidas'>
                            <Grid container style={{ padding: 10 }} spacing={1}>
                                <Grid item md={12} xs={12} sm={12}>
                                    <TextField
                                        style={{marginBottom: "5px"}}
                                        fullWidth
                                        label="Nome"
                                        variant="outlined"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}/>

                                    <TextField 
                                        style={{marginBottom: "10px"}}
                                        fullWidth
                                        label="WhatsApp"
                                        variant="outlined"
                                        value={telefone}
                                        onChange={(e) => setTelefone(e.target.value)}/>
                                </Grid>
                                
                                <Grid item md={12} xs={12} sm={12}>
                                    <label for="pertence">Digite sua duvida aqui:</label>
                                    <textarea className='duvida_text' id="pertence"
                                        multiline="true"         
                                        label="Digite sua dúvida"
                                        variant="outlined"
                                        value={duvida}
                                        onChange={(e) => setDuvida(e.target.value)} />
                                </Grid>
                                <Grid item md={12} xs={12} sm={12}>
                                    <div style={{ marginTop: 20}}>
                                        <Button
                                            variant="contained"
                                            style={{ marginRight: 10, marginBottom:5}}
                                            onClick={salvar}>
                                        Registrar</Button>
                                        <Button variant="outlined" onClick={limpar} style={{marginBottom:5}}>Limpar Dados</Button>
                                    </div>
                                </Grid>
                            </Grid>
                            </div>
                        </div>
                    </div>
               </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <Rodape/>
                </Grid>
            </Grid>
        </>
        )
    }
