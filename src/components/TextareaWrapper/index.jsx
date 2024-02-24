import { Container, Textarea } from "./styles";

export function TextareaWrapper({ title, value, id, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>
        {title}
      </label>

      <Textarea 
        id={id}
        placeholder={value}
        {...rest}
      />
    </Container>
  );
};