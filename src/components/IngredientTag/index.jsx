import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function IngredientTag({ name, className, ...rest }) {
  return (
    <Container className={className} {...rest}>
      {name}
      <FiPlus />
      <FiX />
    </Container>
  );
};