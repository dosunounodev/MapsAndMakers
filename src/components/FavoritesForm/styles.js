import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  input {
    margin-bottom: 5px;
    padding: 4px;
    font-size: 1.3rem;
    text-align: center;
    border-radius: 5px;
    border: 2px solid #1c1e21;

    &:focus {
      border: 2px solid crimson;
    }
  }

  button {
    padding: 4px;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    background-color: #63a061;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s linear;

    &:hover {
      background-color: crimson;
    }
  }
`;

export { StyledForm };
