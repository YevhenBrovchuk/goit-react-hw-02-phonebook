import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Button,
  ErrorMsg,
  Label,
  StyledField,
  StyledForm,
} from './PhoneForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.number()
    .min(3, 'At least 3')
    .positive('Must be positive!')
    .required('Required'),
});

export const PhoneForm = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          onAdd(values, actions);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <Label>
            Name
            <StyledField name="name" type="text" placeholder="Enter Name" />
            <ErrorMsg name="name" component="div" />
          </Label>
          <Label>
            Number
            <StyledField
              name="number"
              type="tel"
              placeholder="Enter number telephone"
            />
            <ErrorMsg name="number" component="div" />
          </Label>
          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    </div>
  );
};
