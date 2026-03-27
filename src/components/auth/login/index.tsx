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
export const Login = observer(() => {
    const navigate = useNavigate();
    return (
        <Page>
        <Flex centered>   
         <LoginContainer>
         <H1>Smart AI</H1>
     <Flex className='form' gap='1rem' flexDirection='column' >
        <ButtonsForm >
          <SignButton >SignIn</SignButton>
          <SignButton onClick={() => navigate(Paths.SIGNUP)}>CreateAccount</SignButton>
        </ButtonsForm>
        <Flex flexDirection='column' textAlignStart>
            <Text>Email</Text>
          <InputField className="signupInput" />
          </Flex>
          <Flex flexDirection='column' textAlignStart>
          <Text>Password</Text>
          <InputField className="signupInput" />  
          </Flex>  
          <Button  name="Login" />
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
      </Flex> 
      </Page>  
    )
})