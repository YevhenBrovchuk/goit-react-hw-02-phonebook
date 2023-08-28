import styled from 'styled-components';
import { ErrorMessage, Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  border: 1px solid black;
  padding: 8px;
  width: 250px;
  min-width: 600px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 250px;
`;

export const StyledField = styled(Field)`
  padding: 4px;
  height: 30px;
  font-size: 20px;
`;

export const Button = styled.button`
  width: 150px;
  border-radius: 4px;
  font-size: 20px;
  padding: 8px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;
