import { Container } from "./styles";

export function ButtonText({ value, icon:Icon,  ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={20} />}
      {value}
    </Container>
  );
};