import styled from "styled-components";

export const Container = styled.div`
  ul {
    li {
      list-style: none;
    }
  }
  margin-bottom: 1.25rem;
  div.sport {
    transition: 0.2 ease-in-out;
  }
  .sport.close {
    height: 0;
    overflow: hidden;
  }
  .headeerSport.open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .headeerSport {
    height: 3rem;
    background-color: white;
    display: flex;
    align-items: center;
    border-top: 2px solid #cbcbcb;
    border-right: 2px solid #cbcbcb;
    border-bottom: 2px solid #cbcbcb;
    border-radius: 8px;
    cursor: pointer;
    .sportTitle {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 1.25rem;
      justify-content: space-between;
    }
  }
  .borderColor {
    width: 9px;
    height: 3rem;
    background: var(--color-green);
    top: -2px;
    left: -1px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  ul {
    h1 {
      color: var(--color-primary);
      padding: 1.5rem;
    }
  }
  article.sport {
    width: 60vw;
    border-radius: 0px 0px 15px 15px;
    overflow: hidden;
    @media (max-width: 720px) {
      width: 90vw;
    }
  }
`;
