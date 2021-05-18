import styled from "styled-components";

const BogotaSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  .bogota-container {
    width: 100px;
    height: 100px;
    /* background-color: red; */
  }

  h2 {
    text-align: center;
    margin-bottom: 30px;
    span {
      font-size: 1.5em;
      color: crimson;
    }
  }

  h3 {
    margin-bottom: 15px;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    text-align: center;
  }

  p,
  li {
    margin-bottom: 10px;
    text-align: center;
  }
`;

export { BogotaSection };
