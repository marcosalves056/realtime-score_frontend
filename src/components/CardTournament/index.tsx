import { setCookie } from "nookies";
import { Container } from "./styles";
import { Link } from "react-router-dom";

interface Props {
  data: any;
  sport: string;
  entity: string;
  className: boolean;
  isResult?: boolean;
}
export default function CardTournament({
  data,
  sport,
  entity,
  className,
  isResult,
}: Props) {
  // console.log(sport, entity, data.nome_torneio);
  return (
    <Container>
      <ul className={className.toString()}>
        <Link
          onClick={() => {
            setCookie(undefined, "app.sport", sport);
            setCookie(undefined, "app.entity", entity);
            setCookie(undefined, "app.tournament", data.nome_torneio);
          }}
          to={isResult ? "/torneio/resultados" : "/torneio"}
        >
          <li className="tournament">
            <h2>{data.nome_torneio}</h2>
          </li>
        </Link>
      </ul>
    </Container>
  );
}
