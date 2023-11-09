import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { type SubmitErrorHandler, useForm, type SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { handleSuccessfulLogin } from '../../redux/reducers/appReducer';
import { useAppDispatch } from '../../redux/store';

type LoginFormType = {
  email: string;
  password: string;
};
export const LoginPage = () => {
  const {
    handleSubmit,
    setValue,
    register,
    reset,
    formState: { errors },
  } = useForm<LoginFormType>();
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    console.log(data);
  };
  const onSubmitError: SubmitErrorHandler<LoginFormType> = (errors) => {
    console.log(errors);
  };

  const onClick = () => {
    dispatch(handleSuccessfulLogin())
    navigate('/')
    reset();
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
        <Title>{'Login'}</Title>
        <Input
          {...register('email', {
            minLength: {
              value: 3,
              message: 'Min length is 3',
            },
            required: {
              value: true,
              message: 'Field is required',
            },
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              message: 'Invalid email address',
            },
          })}
          placeholder={'Email'}
          onChange={(e) => setValue('email', e.target.value, { shouldValidate: true })}
        />
        {errors?.email && <div style={{ color: 'red' }}>{errors?.email?.message}</div>}

        <Input
          {...register('password', {
            minLength: {
              value: 5,
              message: 'Min length is 5',
            },
            required: {
              value: true,
              message: 'Field is required',
            },
          })}
          name='password'
          placeholder={'Password'}
          onChange={(e) => setValue('password', e.target.value, { shouldValidate: true })}
        />
        {errors?.password && <div style={{ color: 'red' }}>{errors?.password?.message}</div>}
        <StyledButton
          type={'submit'}
          variant='contained'
          onClick={onClick}
          disabled={Boolean(errors?.email?.message) || Boolean(errors?.password?.message)}
        >
          {'Log in'}
        </StyledButton>
      </Form>
    </Div>
  );
};
const Div = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  // background: '#1A1919',
  maxWidth: '500px',
  margin: '0 auto',
}));

const StyledButton = styled(Button)(() => ({
  backgroundColor: '#ec5990',
  color: '#fff',
  width: '100%',
  ':hover': {
    backgroundColor: '#ef56cd',
  },
}));

const Title = styled('p')(() => ({
  width: '100%',
  color: '#fff',
  fontSize: '20px',
  fontWeight: 'bold',
  textAlign: 'center'
}));

const Form = styled('form')(() => ({
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center',
  gap: '8px',
  maxWidth: '500px',
  width: '100%',
  margin: '0 auto',
  background: '#c9c9c9',
}));
