import { Container, Select } from "./styles";

export function SelectWrapper({ title, id, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>
        {title}
      </label>

      <Select id={id} {...rest}>
        <option value="meal">Refeição</option>  
        <option value="dessert">Sobremesa</option>  
        <option value="drink">Bebida</option>  
      </Select>

    </Container>
  );
};