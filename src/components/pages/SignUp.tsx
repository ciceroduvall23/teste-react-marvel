import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Input from '../UI/Input';
import Button from '../UI/Button';
import Message from '../UI/Message';
import Logo from '../img/logo-marvel.png';
import { signup, setError } from '../../store/actions/authActions';
import { RootState } from '../../store';
import signin  from './SignIn';

const SignUp: FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if(error) {
        dispatch(setError(''));
      }
    }
  }, [error, dispatch]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if(error) {
      dispatch(setError(''));
    }
    setLoading(true);
    dispatch(signup({ email, password, firstName }, () => setLoading(false)));
  }

  return(
    <section className="login">
      <div className="container-singUp">
      <img className="logo-Home" src={Logo}  alt="Logo" />
        <h2 className="has-text-centered is-size-2 mb-3">Criar conta</h2>
        <form className="form" onSubmit={submitHandler}>
          {error && <Message type="danger" msg={error} />}
          <Input 
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)}
            placeholder="Digite o seu nome"
            label="First name"
          />
          <Input 
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Endereço de email"
            label="Email address"
          />
          <Input 
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Senha de 6 dígitos"
            label="Password"
          />
          <Button text={loading ? "Loading..." : "Cadastrar"} className="button-sing" disabled={loading} />
          <p>Já tem conta ? faça <Link  className="text-link" to="/signin">Login</Link></p>

        </form>
      </div>
    </section>
  );
}

export default SignUp;