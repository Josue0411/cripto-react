import React from "react";
import styled from "@emotion/styled";
const InputSubmit = styled.input`
  background-color: #a477ff;
  border: none;
  width: 100px;
  padding: 5px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c932a8;
    cursor: pointer;
  }
`;
const Fomulario = () => {
  return (
    <form>
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Fomulario;
