import { Flex } from '../../../ui-libary/flex';
import { H1, Label } from '../../../ui-libary/typography';
import { InputField } from '../../../ui-libary/input';
import { Button } from '../../../ui-libary/button';
import { observer } from 'mobx-react-lite';
import Text from 'antd/es/typography/Text';
import { Page } from '../../common/page/index';
import { ButtonsForm, LoginContainer, SignButton} from '../login/styles';
import { Paths } from '../../home/paths';
import { useNavigate } from 'react-router-dom';
import '../login/login.css';
import { useState } from 'react';
import useStores from '../../../stores/useStores';
export const Register = observer(() => {
    const navigate = useNavigate();
    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
   
    const stores = useStores();
    const registerUser = stores?.userStore?.registerUser;

    const handleRegister = async () => {
      try{
        await registerUser({ email, username, password });
        navigate(Paths.DASHBOARD);
      }
    catch (error) {
      console.error('Registration error:', error);
    }
  }
    return (
        <Page centered>   
         <LoginContainer>
         <H1>Smart AI</H1>
     <Flex className='form' gap='1rem' flexDirection='column' >
        <ButtonsForm >
          <SignButton onClick={() => navigate(Paths.LOGIN)} >SignIn</SignButton>
          <SignButton >CreateAccount</SignButton>
        </ButtonsForm>
        <Flex flexDirection='column' textAlignStart>
            <Text>Email</Text>
          <InputField className="signupInput" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </Flex>
          <Flex flexDirection='column' textAlignStart>
          <Text>UserName</Text>
          <InputField className="signupInput" value={username} onChange={(e)=>setUsername(e.target.value)} />  
          </Flex> 
          <Flex flexDirection='column' textAlignStart>
          <Text>Password</Text>
          <InputField className="signupInput" value={password} onChange={(e)=>setPassword(e.target.value)} />  
          </Flex>  
          <Button  name="Create Account" onClick={handleRegister} />
          <Flex gap="0.5rem" centered>
            <Label>Already have an account?</Label>
            <Label
              className="loginLink cursor"
             onClick={() => navigate(Paths.LOGIN)}
              color="#F4B41A"
            >
              SignIn
            </Label>
          </Flex>
        </Flex>
      </LoginContainer>
      </Page>  
    )
})