import { ContactItem } from 'components/contactItem/ContactItem';

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <ContactItem cont={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
