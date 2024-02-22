import { Container } from "./styles";

export function Input({ icon: Icon, id, className, ...rest }) {
  return (
    <Container className={className}>
      {Icon && <Icon />}
      {id ? <input id={id} {...rest} /> : <input {...rest} />}
    </Container>
  );
};