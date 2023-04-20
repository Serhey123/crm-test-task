import React from 'react';
import Card from '../../UI/Card/Card.jsx';
import Input from '../../UI/Input/Input.jsx';
import Button from '../../UI/Button/Button.jsx';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import schema from '../../schemas/signupSchema.js';
import Alert from '../../UI/Alert/Alert.jsx';
import errorsPicker from '../../utils/errorsPicker.js';
import { signUp } from '../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux/es/exports.js';
import { selectors } from '../../redux/auth/index.js';

export default function SignupPage() {
  const signupError = useSelector(selectors.getSignUpError);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: '', email: '', password: '', refPassword: '' },
    resolver: joiResolver(schema),
  });

  const dispatch = useDispatch();

  const submit = data => {
    console.log(data);
    dispatch(signUp(data));
    reset();
  };

  const error = errorsPicker({ ...errors, signupError });

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
      <Card>
        {error && <Alert>{error.message}</Alert>}
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="Name"
            type="text"
            placeholder="name"
            id="name"
            register={register('name')}
          />
          <Input
            label="Email"
            type="text"
            placeholder="email"
            id="email"
            register={register('email')}
          />
          <Input
            label="Password"
            type="password"
            placeholder="password"
            id="password"
            register={register('password')}
          />
          <Input
            label="Confirm password"
            type="password"
            placeholder="password"
            id="confirmpassword"
            register={register('refPassword')}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
}
