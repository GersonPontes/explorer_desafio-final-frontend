import { Container } from "./styles";

export function ButtonText({ value, icon:Icon,  ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {value}
    </Container>
  );
};