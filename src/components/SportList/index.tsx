import { Container } from "./styles";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import CardEntity from "../CardEntity";

interface Props {
  data: any;
  isResult?: boolean;
}

export default function SportList({ data, isResult }: Props) {
  const [openSport, setOpenSport] = useState<boolean>(false);
  return (
    <Container>
      <div
        className={!openSport ? "headeerSport close" : " headeerSport open"}
        onClick={() => setOpenSport(!openSport)}
      >
        <div className="borderColor"></div>
        <div className="sportTitle">
          <h3>{data.esporte}</h3>
          {!openSport ? <BsChevronDown /> : <BsChevronUp />}
        </div>
      </div>
      <article className={!openSport ? "sport close" : "sport open"}>
        {data.entidades.map((entidade: any, count: number) => (
          <CardEntity
            data={entidade}
            sport={data.esporte}
            key={count}
            isResult={isResult}
          />
        ))}
      </article>
    </Container>
  );
}
