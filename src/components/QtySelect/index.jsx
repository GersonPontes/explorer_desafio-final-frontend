import { Container } from "./styles";
import { FiPlus, FiMinus } from 'react-icons/fi';

export function QtySelect({ value }) {
  return (
    <Container>
      <FiMinus />
        <p>{value}</p>      
      <FiPlus />  
    </Container>
  );
};