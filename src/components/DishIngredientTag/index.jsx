import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function DishIngredientTag({ isNew=false, value, placeholder, onClick, ...rest }) {
  return (
    <Container 
      $isnew={isNew}
    >
      <input
        type="text"
        placeholder={placeholder}
        readOnly={!isNew}
        value={value}
        {...rest}        
      />

      <button 
        type="button"
        className= { isNew ? 'button-add' : 'button-delete' }
        onClick={onClick}
      >    
        { isNew ? <FiPlus /> : <FiX /> }    
      </button>
      
    </Container>
  );
};