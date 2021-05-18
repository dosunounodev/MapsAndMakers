import styled from "styled-components";

const MainLogo = styled.h1`
  color: crimson;
  cursor: pointer;
  transition: 0.3s color linear;
  span {
    font-size: 0.8em;
  }
  a:hover {
    color: #323232;
    text-decoration: none;
  }
`;

export { MainLogo };
