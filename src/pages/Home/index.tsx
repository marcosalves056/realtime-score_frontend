import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { Container } from "./styles";
import SportList from "../../components/SportList";
import Spinner from "../../assets/icons/spinner.gif";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

export function Home() {
  const [projects, setProjects] = useState([]);
  const [results, setResults] = useState([]);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const firebaseConfig = {
    apiKey: "AIzaSyA8oS1fGcqj7gJvfvVVKd478nrNsoBTQ-o",
    authDomain: "placar-ao-vivo.firebaseapp.com",
    databaseURL: "https://placar-ao-vivo-default-rtdb.firebaseio.com",
    projectId: "placar-ao-vivo",
    storageBucket: "placar-ao-vivo.appspot.com",
    messagingSenderId: "564486581308",
    appId: "1:564486581308:web:6bdbe5718afb587027a739",
    measurementId: "G-SM5NREQ0X3",
  };

  useEffect(() => {
    const query = ref(db, "dados");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setProjects(data);
    });
  }, []);
  useEffect(() => {
    // Função para fazer a requisição GET usando o Axios
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://nodejs-production-4ab2.up.railway.app/dados"
        );

        setResults(response.data.dados); // Armazena os dados da resposta no estado "results"
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData(); // Chama a função para fazer a requisição ao carregar o componente
  }, []);

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  function closeModal() {
    setIsActive(false);
  }
  return (
    <>
      <div
        onClick={closeModal}
        className={isActive ? "closeModal" : "closeModal active"}
      ></div>
      <div className={isActive ? "modal" : "modal active"}>
        <div className="header">
          <h1>Contate-nos</h1>
          <AiOutlineClose onClick={closeModal} />
        </div>
        <div className="content">
          <h3>
            Entre em contato para conhecer nossa solução completa para
            gerenciamento de torneios esportivos.
          </h3>
          <ul>
            <li className="listContent">
              Sistema automatizado de marcação da pontuação
            </li>
            <li className="listContent">
              Exibição do placar em Painel Led na quadra de jogo
            </li>
            <li className="listContent">Sistema de gestão das partidas</li>
            <li className="listContent">
              Publicação do placar em tempo real no local do evento e na Web
            </li>
          </ul>
          <a href="https://taggo.one/pskc" target="_blank" className="footer">
            <p>PSKC Soluções em Automação</p>
            <p>https://taggo.one/pskc</p>
          </a>
        </div>
      </div>
      <Container>
        <div>
          <h1>Placar Ao Vivo</h1>
        </div>
        {projects.map((sport, count) => (
          <SportList data={sport} key={count} />
        ))}
      </Container>
      <Container>
        <div>
          <h1>Resultados</h1>
        </div>
        {!loading ? (
          results &&
          results.map((sport, count) => (
            <SportList data={sport} key={count} isResult />
          ))
        ) : (
          <div>
            <img src={Spinner} />
          </div>
        )}
      </Container>
    </>
  );
}
