import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Router} from 'react-router-dom';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Message from '../UI/Message';
import { signin, setError } from '../../store/actions/authActions';
import { RootState } from '../../store';


import Logo from '../img/logo-marvel.png';
import Signup  from './SignUp';
import ForgotPassword  from './ForgotPassword';


const SignIn: FC = () => {
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
    dispatch(signin({ email, password }, () => setLoading(false)));
  }

  return(
    <section className="login">
      <div className="container-singIn">
      <img className="logo-Home" src={Logo}  alt="Logo" />
        <h2 className="has-text-centered is-size-2 mb-3">Bem vindo(a) </h2>
        <form className="form" onSubmit={submitHandler}>
          {error && <Message type="danger" msg={error} />}
          <p>Acesse a sua conta:</p>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email address"
            label=""
          />
            <Input 
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
            label=""
            />
              <Link className="forgot-password" to="/forgotpassword">Esqueci a senha</Link>
          <Button text={loading ? "Loading..." : "Entrar"} className=" is-fullwidth mt-5" disabled={loading} />
          <p>Ainda não tem conta ? <Link  className="text-link" to="/Signup">Cadastre-se</Link></p>
           
        </form>
      </div>
    </section>
  );
}

export default SignIn;