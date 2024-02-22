import { Container } from "./styles";

export function InputFile({ icon: Icon, title, id, ...rest }) {
  return (
    <Container>      
      <label htmlFor={id}>
        {Icon && <Icon />}
        {title}
      </label>
      <input id={id} {...rest} type="file" />
    </Container>
  );
};