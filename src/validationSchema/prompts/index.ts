import * as yup from 'yup';

export const promptValidationSchema = yup.object().shape({
  input: yup.string().required(),
  user_id: yup.string().nullable(),
});
