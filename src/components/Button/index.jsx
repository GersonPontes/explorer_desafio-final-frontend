import { Container } from "./styles";

export function Button({ value, icon:Icon, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={30} />}
      {value}
    </Container>
  );
};