import React, { FC, useEffect } from 'react';
import Message from '../UI/Message';
import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar'
import './style.css'

const Dashboard: FC = () => {
  const { user, needVerification, success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <section className="section">
       <div className="menu-Navbar">
       <Navbar  />
         </div>
         <div className="none">
      {needVerification && <Message type="success" msg="
            por favor verifique seu endereço de email." />}
      </div>
        <h1 className="hellow">Olá, {user?.firstName}</h1>
    </section>
  );
}

export default Dashboard;

/* className="is-size-1">*/