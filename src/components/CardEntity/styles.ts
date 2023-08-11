import styled from "styled-components";

export const Container = styled.ul`
  background-color: white;

  border-top: 2px solid #cbcbcb;
  border-right: 2px solid #cbcbcb;
  border-bottom: 2px solid #cbcbcb;
  h2 {
    font-size: 1.25rem;
    font-weight: 400;
  }
  li {
    padding: 1.25rem 0;
    cursor: pointer;
    ul {
      height: 0;
      overflow: hidden;
      transition: 500ms ease-in-out;
      &.true {
        height: fit-content;
      }
      a {
        text-decoration: none;
        color: var(--color-primary);
      }
      li {
        padding: 0.25rem 0;
        margin: 0.5rem 0;
        &:hover {
          background-color: var(--color-green);
          border-radius: 8px;
        }
      }
    }
  }
`;
