import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectCurrentUser } from './userSlice';
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import defaultAvatar from '../../app/assets/img/unicorn.png';
import { validateUserLoginForm } from '../../utils/validateUserLoginForm';

export const UserLoginForm = () => {
    const [ loginModalOpen, setLoginModalOpen ] = useState(false);
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    
    function handleLogin(values) {
        const currentUser = {
            id: Date.now(),
            avatar: defaultAvatar,
            username: values.username,
            password: values.password
        }
        dispatch(setCurrentUser(currentUser));
        setLoginModalOpen(false);
    }

    return (
        <>

        <span className='navbar-text ml-auto'>

                {currentUser ? (
            <div style={{ width: '4rem', height: '4rem' }}>
                <img
                    src={currentUser.avatar}
                    alt="user"
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
        ) : (
            <Button
                outline
                onClick={() => setLoginModalOpen(true)}
                style={{ color: 'white', border: '1px solid white' }}
            >
                <i className='fa fa-sign-in fa-lg' /> Login
            </Button>
        )}

        </span>

        <Modal isOpen={loginModalOpen}>
            <ModalHeader toggle={() => setLoginModalOpen(false)}>
                Login
            </ModalHeader>
            <ModalBody>
                <Formik initialValues={{
                        username: '',
                        password: '',
                        }}

                        onSubmit={handleLogin}
                        validate={validateUserLoginForm}
                >
                    <Form>
                        <FormGroup>
                            <Label htmlFor='username' textContent='Username'>
                                <Field 
                                    id='username'
                                    name='username'
                                    placeholder='UserName'
                                    className='form-control'
                                />
                            <ErrorMessage name='username'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                            </Label>
                        </FormGroup>
                        
                        <FormGroup>
                            <Label htmlFor='password' textContent='Password'>
                                <Field 
                                    id='password'
                                    name='password'
                                    placeholder='Password'
                                    className='form-control'
                                    type='password'
                                    />
                            <ErrorMessage name='password'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                            </Label>
                        </FormGroup>
                        <Button type='submit' color='primary'>Login</Button>
                    </Form>

                </Formik>
            </ModalBody>
        </Modal>

        </>
    )
}