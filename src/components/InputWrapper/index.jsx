import { Container } from "./styles";
import { Input } from "../Input";

export function InputWrapper({ icon, title, id, ...rest }) {
  return (
    <Container>

      {id &&
        <label htmlFor={id}>
          {title}
        </label>
      }

      <Input 
        icon= {icon}
        id={id}
        {...rest}
      />

    </Container>
  );
};