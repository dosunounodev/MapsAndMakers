import styled from "styled-components";

const MapSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  h2 {
    text-align: center;
    margin-bottom: 10px;
    span {
      font-size: 1.2em;
      color: crimson;
      span {
        font-size: 0.8em;
      }
    }
  }

  p {
    margin-bottom: 10px;
    font-size: 1.2rem;
    text-align: center;
    strong {
      margin-right: 5px;
      font-size: 0.9em;
    }
  }

  .AddFavorite {
    font-weight: 700;
    text-align: center;
    color: crimson;
  }
`;

export { MapSection };
