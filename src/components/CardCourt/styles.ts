import styled from "styled-components";

export const Container = styled.div`
  h2 {
    color: var(--color-green);
    font-size: 1.25rem;
    font-weight: 400;
    padding-left: 9px;
  }
  article {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 0;
    h2,
    h3,
    h5 {
      margin: 0;
    }
    .court {
      width: 350px;
      @media (max-width: 380px) {
        width: 230px;
      }
      position: relative;
      padding-top: 5px;
      padding-left: 9px;
      display: flex;
      flex-flow: column;
      border-top: 2px solid #cbcbcb;
      border-right: 2px solid #cbcbcb;
      border-bottom: 2px solid #cbcbcb;
      border-radius: 8px;
      height: 134px;
      background: #fff;

      .content {
        padding: 0.25rem;
      }
      .borderColor {
        position: absolute;
        height: 134px;
        width: 9px;
        background: var(--color-green);
        top: -2px;
        left: -1px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
      .headerCard {
        display: flex;
        justify-content: space-between;
        color: var(--color-gray);
        font-size: 1rem;
        font-weight: 300;
      }
      .linePlayer {
        .games,
        .points {
          color: var(--color-primary);
          font-size: 1.25rem;
          font-weight: 600;
          width: 25px;
          text-align: center;
        }
        .players {
          font-size: 1.25rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
          color: var(--color-secundary);
          font-weight: 600;
          width: 230px;
          @media (max-width: 380px) {
            width: 180px;
          }
        }
        display: flex;
        align-items: center;
        height: 32px;
      }
      div.sectionDivider {
        display: flex;
        justify-content: start;
        align-items: center;
        hr {
          margin: 0;
          height: 0;
          width: 230px;
          border-top: 1px solid var(--color-gray);
          @media (max-width: 380px) {
            width: 180px;
          }
        }
        span {
          color: var(--color-gray);

          font-size: 9px;
          width: 25px;
          text-align: center;
        }
      }
      div.footer {
        /* height: 15px; */
        position: relative;
        display: flex;
        justify-content: space-between;
        /* padding: 1rem; */
        h5 {
          /* font-size: 0.7rem; */
          color: var(--color-gray);
          font-weight: 500;

          padding: 0.25rem;
          padding-bottom: 0;
          padding-top: 0.625rem;
        }
      }
    }
  }
`;
