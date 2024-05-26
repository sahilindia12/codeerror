
import * as Yup from 'yup';

 export const vali= Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
      Password: Yup.string()
      .email('Invalid email address')
      .required('Required'),
  })


