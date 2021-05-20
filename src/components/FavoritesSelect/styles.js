import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
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
    display: inline-block;
    margin-left: 5px;
    padding: 4px;
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s linear;
  }

  .btn-delete {
    background-color: rgba(245, 100, 129, 0.7);
    &:hover {
      background-color: crimson;
    }
  }

  .btn-edit {
    background-color: rgba(42, 121, 39, 0.7);
    &:hover {
      background-color: #2a7927;
    }
  }

  select {
    display: inline-block;
    width: 100%;
    /* margin-bottom: 5px; */
    padding: 4px;
    font-weight: 700;
    background-color: #fff;
    border-radius: 5px;
  }
`;

export { StyledForm };
