import React from 'react';
import Card from '../../UI/Card/Card.jsx';
import Input from '../../UI/Input/Input.jsx';
import Button from '../../UI/Button/Button.jsx';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import schema from '../../schemas/signupSchema.js';
import Alert from '../../UI/Alert/Alert.jsx';
import errorsPicker from '../../utils/errorsPicker.js';

export default function SignupPage() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: '', email: '', password: '', refPassword: '' },
    resolver: joiResolver(schema),
  });

  const submit = data => {
    console.log(data);
    reset();
  };

  const error = errorsPicker(errors);

  return (
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
  );
}
