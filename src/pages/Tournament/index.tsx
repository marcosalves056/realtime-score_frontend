import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { Container } from "./styles";
import { parseCookies } from "nookies";
import CardCourt from "../../components/CardCourt";
import Spinner from "../../assets/icons/spinner.gif";

import axios from "axios";
interface Props {
  isResult?: boolean;
}
export function Tournament({ isResult }: Props) {
  const [projects, setProjects] = useState([]);
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

  const { "app.sport": sport } = parseCookies();
  const { "app.entity": entity } = parseCookies();
  const { "app.tournament": tournament } = parseCookies();
  useEffect(() => {
    if (isResult) {
      setLoading(true);
      // Função para fazer a requisição GET usando o Axios
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://nodejs-production-4ab2.up.railway.app/dados"
          );
          const data = response.data.dados;
          console.log(data);
          setProjects(
            data
              .filter((i: any) => i.esporte == sport)[0]
              .entidades.filter((i: any) => i.nome_entidade == entity)[0]
              .torneios.filter((i: any) => i.nome_torneio == tournament)[0]
              .quadras
          );
          setLoading(false);

          // console.log(projects); // Armazena os dados da resposta no estado "results"
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
      };

      fetchData(); // Chama a função para fazer a requisição ao carregar o componente
    } else {
      const query = ref(db, "dados");
      return onValue(query, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        setProjects(
          data
            .filter((i: any) => i.esporte == sport)[0]
            .entidades.filter((i: any) => i.nome_entidade == entity)[0]
            .torneios.filter((i: any) => i.nome_torneio == tournament)[0]
            .quadras
        );
        // console.log(projects); // Armazena os dados da resposta no estado "results"
      });
    }
  }, []);

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  return (
    <>
      <Container>
        {!loading ? (
          projects.map((i, count) => <CardCourt data={i} key={count} />)
        ) : (
          <div>
            <img src={Spinner} />
          </div>
        )}
      </Container>
    </>
  );
}
