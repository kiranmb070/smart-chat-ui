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
import { useState } from 'react';
export const Login = observer(() => {
    const navigate = useNavigate();
  const stores = useStores();
  const login = stores?.userStore?.login;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
 const handleLogin = async () => {
  console.log('Attempting login with:', { email, password });
  try {
    console.log('Calling login function...'); 
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
          </Flex>
          <Flex flexDirection='column' textAlignStart>
          <Text>Password</Text>
          <InputField className="signupInput" value={password} onChange={(e) => setPassword(e.target.value)} />  
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