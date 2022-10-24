import React from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
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
  const [SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);

  return (
    <form>
      <SelectMonedas />
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Fomulario;
