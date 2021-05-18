import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 0px 50px 0px rgba(20, 20, 20, 0.2);

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    height: 50px;
  }
`;

const MainContainer = styled.main`
  position: relative;
  top: 80px;
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100vh - 130px);
  padding: 20px;

  @media screen and (min-width: 1024px) {
    top: 50px;
    height: calc(100vh - 100px);
  }
`;

const FooterContainer = styled.footer`
  position: relative;
  top: 80px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 20px;
  color: #fff;
  background-color: #222;

  @media screen and (min-width: 1024px) {
    top: 50px;
  }
`;

export { HeaderContainer, MainContainer, FooterContainer };
