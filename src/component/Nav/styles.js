import styled from "styled-components";

export const Headline = styled.span`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 600 !important;
  font-size: calc(0.5vw + 1em);
  letter-spacing: 0 !important;
`;

export const NavLayout = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  padding: 20px 20px 15px 20px;

  font-family: "DIN", sans-serif;

  text-transform: uppercase;
  color: #000;

  // background: #f4f1eb;
  // border-bottom: 0.5px solid rgba(0, 0, 0, 0.05);

  a,
  button {
    color: #000;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.75rem;

    font-style: normal;
    text-transform: none;
    font-weight: 500;
    letter-spacing: 0;
    font-size: 16px;
    // opacity: 0.6;

    background: none;
    border: none;
    outline: none;

    font-family: "Helvetica Neue", sans-serif;
    font-weight: 400;

    pointer: cursor;
  }

  .active {
    text-decoration: underline !important;
  }

  @media screen and (max-width: 767px) {
    max-width: 100vw;
  }
`;

export const Hanna = styled.span`
  transition: all 0.2s ease-in-out;

  opacity: ${(props) => (props.$active ? 1 : 0.5)};
`;
export const Margot = styled.span`
  transition: all 0.2s ease-in-out;

  opacity: ${(props) => (props.$active ? 1 : 0.5)};
`;
