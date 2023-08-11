import { Container } from "./styles";

interface Props {
  data: any;
}
export default function CardCourt({ data }: Props) {
  console.log(data);
  return (
    <Container>
      <h2 className="courtTitle">{data.quadra}</h2>
      <article>
        <h2>{data.local_1}</h2>

        <div className="court">
          <div className="borderColor"></div>
          <div className="content">
            <div className="headerCard">
              <h3>{data.categoria}</h3>
              <h3>{data.rodada}</h3>
            </div>
            <div className="linePlayer">
              <div className="players">
                {data.jogador3 ? (
                  <>
                    {data.jogador1} / {data.jogador2}
                  </>
                ) : (
                  data.jogador1
                )}
              </div>
              <div className="points">
                {data.pontos && data.pontos.jogador1}
              </div>
              {data.games &&
                data.games.map((game: any, count: number) => (
                  <div className="games" key={count}>
                    {game.jogador1}
                  </div>
                ))}
            </div>
            <div className="sectionDivider">
              <hr />
              <span>PTS</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <div className="linePlayer">
              <div className="players">
                {data.jogador3 ? (
                  <>
                    {data.jogador3} / {data.jogador4}
                  </>
                ) : (
                  data.jogador2
                )}
              </div>
              <div className="points">
                {data.pontos && data.pontos.jogador2}
              </div>
              {data.games &&
                data.games.map((game: any, count: number) => (
                  <div className="games" key={count}>
                    {game.jogador2}
                  </div>
                ))}
            </div>
            <div className="footer">
              <div></div>
              <h5>{data.estado}</h5>
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
}
