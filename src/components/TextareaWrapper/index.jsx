import { Container } from "./styles";
import { Textarea } from "../Textarea";

export function TextareaWrapper({ title, value, id, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>
        {title}
      </label>

      <Textarea 
        id={id}
        value={value}
        {...rest}
      />
    </Container>
  );
};