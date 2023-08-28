import { Button, Div } from './ContactItem.styled';

export const ContactItem = ({ cont: { id, name, number }, onDelete }) => {
  return (
    <Div>
      <span>{name}:</span>
      <span>{number}</span>
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </Div>
  );
};
