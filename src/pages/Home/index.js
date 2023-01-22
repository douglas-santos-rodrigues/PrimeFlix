import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './home.css';


import api from "../../services/app";

//movie/now_playing?api_key=68e7e9c5658dec92e451ff7ccbd655c4&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadFilmes() {
     /* const parametros = {
        api_key: "68e7e9c5658dec92e451ff7ccbd655c4",
        language: "pt-BR",
        page: 1,
      };*/
      const response = await api
        .get("/movie/now_playing", {
          params: {
            api_key: "68e7e9c5658dec92e451ff7ccbd655c4",
            language: "pt-BR",
            page: 1,
          },
        })
        .then((response) => {
          setFilmes(response.data.results.slice(0,10));
          console.log(response.data.results.slice(0,10));
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Carregando...</h1>
        </div>
    )
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => (
          <article key={filme.id}>
            <strong>{filme.title}</strong>
            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
            <Link to={`/filme/${filme.id}`}>Acessar</Link>
            
          </article>
        ))}

      </div>
    </div>
  );
}

export default Home;
