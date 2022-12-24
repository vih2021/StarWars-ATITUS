import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import './assets/css/estilos.css'
import Duvidas from "./pages/Duvidas";
import Films from "./pages/Films";
import Starships from "./pages/Starships";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Frequentes from "./pages/Frequentes";
import Sobre from "./pages/Sobre";
import axios from 'axios';

function App() {

  const [login, setLogin] = useState(false)

  const [filmes, setFilmes] = useState([])
  const [starships, setStarships] = useState([])
  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])
  const [species, setSpecies] = useState([])

  const carregaFilmes = async () => {

    await axios.get("https://swapi.dev/api/films/")
    .then((retorno) => {
        setFilmes(retorno.data.results)
        console.log(filmes)})
    .catch((error) => console.log(error))

  }

  const carregaStarships = async () => {
    
    await axios.get("https://swapi.dev/api/starships/")
    .then((retorno) => {
        setStarships(retorno.data.results)
        console.log(starships)})
    .catch((error) => console.log(error))

}

const carregaPeople = async () => {
    
  await axios.get("https://swapi.dev/api/people/")
  .then((retorno) => {
      setPeople(retorno.data.results)
      console.log(people)})
  .catch((error) => console.log(error))

}

const carregaPlanets = async () => {
    
  await axios.get("https://swapi.dev/api/planets/")
  .then((retorno) => {
      setPlanets(retorno.data.results)
      console.log(planets)})
  .catch((error) => console.log(error))

}

const carregaSpecies = async () => {
    
  await axios.get("https://swapi.dev/api/species/")
  .then((retorno) => {
      setSpecies(retorno.data.results)
      console.log(species)})
  .catch((error) => console.log(error))

}

  carregaFilmes()
  carregaPeople()
  carregaPlanets()
  carregaSpecies()
  carregaStarships()
 

  const verificarLogin = () => {
    setLogin(sessionStorage.getItem("login"))
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/duvidas",
      element: login ? <Duvidas /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/films",
      element: login ? <Films filmes={filmes} /> : <Login verificarLogin={verificarLogin}  />,
    },
    {
      path: "/starships",
      element: login ? <Starships starships={starships} /> : <Login verificarLogin={verificarLogin}  />,
    },
    {
      path: "/people",
      element: login ? <People people={people} /> : <Login verificarLogin={verificarLogin}  />,
    },
    {
      path: "/planets",
      element: login ? <Planets planets={planets} /> : <Login verificarLogin={verificarLogin}  />,
    },
    {
      path: "/species",
      element: login ? <Species species={species} /> : <Login verificarLogin={verificarLogin}  />,
    },
    {
      path: "/frequentes",
      element: login ? <Frequentes /> : <Login verificarLogin={verificarLogin}  />,
    },
    {
      path: "/sobre",
      element: login ? <Sobre /> : <Login verificarLogin={verificarLogin}  />,
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
