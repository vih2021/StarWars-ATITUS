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
import Loading from '../components/Loading';


export default function Planets(props) {

    let planets = props.planets

    if (planets.length <= 0) {      
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
                            <TableCell align="right">Clima</TableCell>
                            <TableCell align="right">Diâmetro</TableCell>
                            <TableCell align="right">População</TableCell>
                            <TableCell align="right">Terreno</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {planets.map((row) => (
                        <TableRow

                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                            <TableCell component="" scope="row">{row.name}</TableCell>
                            <TableCell align="right">{row.climate}</TableCell>
                            <TableCell align="right">{row.diameter}</TableCell>
                            <TableCell align="right">{row.population}</TableCell>
                            <TableCell align="right">{row.terrain}</TableCell>

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