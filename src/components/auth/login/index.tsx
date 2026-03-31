import { Flex } from '../../../ui-libary/flex';
import { H1, Label } from '../../../ui-libary/typography';
import { InputField } from '../../../ui-libary/input';
import { Button } from '../../../ui-libary/button';
import { observer } from 'mobx-react-lite';
import './login.css';
import Text from 'antd/es/typography/Text';
import { Page } from '../../common/page/index';
import { ButtonsForm, LoginContainer, SignButton} from './styles';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../home/paths';
import useStores from '../../../stores/useStores';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Error } from './error';
import { validateForm } from './validation';

const  defaultError={
  email: '',
  password: '',
}
const defaultForm = {
  email: '',
  password: '',
};
export const Login = observer(() => {
    const navigate = useNavigate();
  const stores = useStores();
  const login = stores?.userStore?.login;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors]=useState(defaultError);
  const [form, setForm] = useState(defaultForm);

  useEffect(() => {
    if (stores?.userStore?.isLoggedIn) {
      navigate(Paths.CHAT);
    }
  }, [stores?.userStore?.isLoggedIn]);


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
const updateForm = (field: string, value: string | boolean) => {
    setForm({
      ...form,
      [field]: value,
    })
  }
  const updateErrors = (field: string, value: string) => {
    setErrors({
      ...errors,
      [field]: value,
    })
  }
 const updateFormErrors = (error: any) => {
    setErrors({
      ...errors,
      ...error,
    })
  }

  const updateFields = (field: string, value: string | boolean) => {
    updateErrors(field, '');
    updateForm(field, value);
  }
  
 const handleLogin = async () => {
  const error = validateForm(form)
  if (error) {
      updateFormErrors(error);
      return;
    }
  try {
    await login({ email, password });
    navigate(Paths.CHAT);
  } catch (error) {
    console.error('Login error:', error);
  }
};
  
    return (
        <Page centered>
         <LoginContainer>
         <H1>Smart AI</H1>
     <Flex className='form' gap='1rem' flexDirection='column' >
        <ButtonsForm >
          <SignButton >SignIn</SignButton>
          <SignButton onClick={() => navigate(Paths.SIGNUP)}>CreateAccount</SignButton>
        </ButtonsForm>
        <Flex flexDirection='column' textAlignStart>
            <Text>Email</Text>
          <InputField className="signupInput" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Error error={errors.email} />
          </Flex>
          <Flex flexDirection='column' textAlignStart>
          <Text>Password</Text>
          <Flex style={{ position: 'relative', width: '100%' }}>
          <InputField className="signupInput"       type={showPassword ? 'text' : 'password'}  value={password} onChange={(e) => setPassword(e.target.value)} style={{
                        width: '100%',
                      }}/> 
                       <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      onClick={togglePasswordVisibility}
                      style={{
                        position: 'absolute',
                        right: '0.75rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                        color: '#999',
                        pointerEvents: 'auto',
                      }}
                    /> 
          </Flex>
          <Error error={errors.email} /> 
          </Flex>  
          <Button  name="Login"  onClick={handleLogin}/>
          <Flex gap="0.5rem" centered>
            <Label>Create an account?</Label>
            <Label
              className="loginLink cursor"
             onClick={() => navigate(Paths.SIGNUP)}
              color="#F4B41A"
            >
              Sign up
            </Label>
          </Flex>
        </Flex>
      </LoginContainer>
      </Page>  
    )
})