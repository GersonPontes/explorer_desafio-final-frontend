import { Container } from "./styles";
import { Select } from "../Select";

export function SelectWrapper({ title, id, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>
        {title}
      </label>

      <Select 
        id={id}
        {...rest}
      />
    </Container>
  );
};