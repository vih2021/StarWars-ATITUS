import { Grid } from '@mui/material'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Loading from "../components/Loading"


export default function Starships(props) {

    let starships = props.starships;

    if (starships.length <= 0) {      
        return (
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
                <div className='corpo'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{backgroundColor:"#DCDCDC"}}>Nome</TableCell>
                            <TableCell align="right">Modelo</TableCell>
                            <TableCell align="right">Passageiros</TableCell>
                            <TableCell align="right">Classe</TableCell>
                            <TableCell align="right">Tamanho</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {starships.map((row) => (
                        <TableRow

                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                            <TableCell component="" scope="row">{row.name}</TableCell>
                            <TableCell align="right">{row.model}</TableCell>
                            <TableCell align="right">{row.passengers}</TableCell>
                            <TableCell align="right">{row.starship_class}</TableCell>
                            <TableCell align="right">{row.length}</TableCell>

                        </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
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
