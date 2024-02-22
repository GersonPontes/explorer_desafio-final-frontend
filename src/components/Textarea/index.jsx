import { Container } from "./styles";

export function Textarea({ value, id, ...rest }) {
  return (
    <Container id={id} placeholder={value} {...rest}>

    </Container>
  );
};