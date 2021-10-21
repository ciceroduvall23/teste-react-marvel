import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../img/logo-marvel.png';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Message from '../UI/Message';
import { sendPasswordResetEmail, setError, setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';

const ForgotPassword: FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error, success } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if(error) {
        dispatch(setError(''));
      }
      if(success) {
        dispatch(setSuccess(''));
      }
    }
  }, [error, dispatch, success]);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if(success) {
      dispatch(setSuccess(''));
    }
    if(error) {
      dispatch(setError(''));
    }
    setLoading(true);
    await dispatch(sendPasswordResetEmail(email, "Email sent!"));
    setLoading(false);
  }

  return(
    <section className="senha">
      <div className="container-password">
      <img className="logo-password" src={Logo}  alt="Logo" />

        <h2 className="has-text-centered is-size-2 mb-3">Redefinir senha</h2>
        <form className="form" onSubmit={submitHandler}>
          {error && <Message type="danger" msg={error} />}
          {success && <Message type="success" msg={success} />}
          <Input 
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email"
            label="Por favor digite o endereço de e-mail.Enviaremos um link para redefinir uma nova senha."
          />
          <Button text={loading ? "Loading..." : "Enviar e-mail"} className="re"   disabled={loading} />
          <p>Lembra a senha ? faça <Link  className="text-link" to="/signin">Login</Link></p>
        </form>
      </div>
    </section>
  );
}

export default ForgotPassword;


