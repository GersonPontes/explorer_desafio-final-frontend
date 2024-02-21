import { Container } from "./styles";

export function Input({ icon: Icon, id, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      {id ? <input id={id} {...rest} /> : <input {...rest} />}
    </Container>
  );
};