import { Container } from "./styles";
import logo from "../../assets/icons/PSKC-LOGO-WHITE.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect } from "react";
// import { AppContext } from "../../services/context";

export default function Header() {
  const navigate = useNavigate();
  // const { pathName } = useContext(AppContext);
  useEffect(() => {});
  console.log;
  return (
    <Container>
      <button
        style={{
          height: "fit-content",
          padding: "0.5rem 1.25rem ",
          borderRadius: "8px",
          background: "white",
          display: "flex",
          justifyContent: "space-between",
          gap: "0.25rem",
          position: "absolute",
          top: "1.5rem",
          left: "1.5rem",
        }}
        onClick={() => navigate("/")}
      >
        <AiOutlineArrowLeft /> Voltar
      </button>
      <Link to="/">
        <img src={logo} />
      </Link>
    </Container>
  );
}
