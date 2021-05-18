import styled from "styled-components";

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  a {
    font-weight: 700;
    font-style: italic;
    &:hover {
      text-decoration: none;
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export { FooterContent };
