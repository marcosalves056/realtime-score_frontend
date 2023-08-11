import { useState } from "react";
import CardTournament from "../CardTournament";
import { Container } from "./styles";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface Props {
  data: any;
  sport: string;
  isResult?: boolean;
}
export default function CardEntity({ data, sport, isResult }: Props) {
  const [openTournaments, setOpenTournament] = useState<boolean>(false);
  // console.log(data);
  return (
    <Container>
      <li
        className="entity"
        onClick={() => setOpenTournament(!openTournaments)}
        style={{
          width: "90%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>{data.nome_entidade}</h2>
          {!openTournaments ? <BsChevronDown /> : <BsChevronUp />}
        </div>
        {data.torneios.map((tournament: any, count: number) => (
          <CardTournament
            className={openTournaments}
            data={tournament}
            key={count}
            sport={sport}
            entity={data.nome_entidade}
            isResult={isResult}
          />
        ))}
      </li>
    </Container>
  );
}
