import * as yup from 'yup';

export const subscriptionValidationSchema = yup.object().shape({
  slab: yup.string().required(),
  user_id: yup.string().nullable(),
});
