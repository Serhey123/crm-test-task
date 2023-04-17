import React from 'react';
import Card from '../../UI/Card/Card.jsx';
import Input from '../../UI/Input/Input.jsx';
import Button from '../../UI/Button/Button.jsx';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import schema from '../../schemas/loginSchema.js';
import Alert from '../../UI/Alert/Alert.jsx';
import errorsPicker from '../../utils/errorsPicker.js';

export default function LoginPage() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '', password: '' },
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
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
}
