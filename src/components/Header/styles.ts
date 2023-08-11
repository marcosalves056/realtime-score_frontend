import styled from "styled-components";

export const Container = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: center;
  max-width: 90vw;
  a {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  img {
    @media (max-width: 720px) {
      max-width: 70vw;
      margin-top: 3rem;
    }
    max-height: 200px;
  }
`;
