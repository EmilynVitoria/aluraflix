import React from "react";
import { Select } from "./ListaSuspensa.styled";

const ListaSuspensa = ({ name, value, onChange, options }) => {


  if (!Array.isArray(options) || options.length === 0) {
    return <div>Erro: Nenhuma opção disponível</div>;
  }

  return (
    <Select name={name} value={value} onChange={onChange}>
      <option value="">Selecione uma categoria</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default ListaSuspensa;
