import styled from "styled-components";

const TopNav = styled.nav`
  flex: 0;
  display: flex;
  justify-content: flex-end;
  padding: 0;
  padding-left: 20px;
  padding-right: 20px;

  ul {
    display: flex;
  }

  li {
    margin: 0 10px;
    font-size: 1.6rem;
  }

  @media screen and (min-width: 1024px) {
    flex: 1;
    padding-right: 0;
  }
`;

export { TopNav };
