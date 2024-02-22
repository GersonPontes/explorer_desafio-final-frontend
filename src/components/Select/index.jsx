import { Container } from "./styles";

export function Select({ title, id, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>
        {title}
      </label>
      
      <select {...rest}>  
        <option value="meal">Refeição</option>  
        <option value="dessert">Sobremesa</option>  
        <option value="drink">Bebida</option>  
      </select>  
    </Container>
  );
};