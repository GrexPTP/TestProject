import React, { memo } from 'react';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Paragraph from '../../components/Paragraph';



const SignUpSignInPage = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Login</Header>

    <Paragraph>
      Save your health, save the environment
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginPage')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterPage')}
    >
      Sign Up
    </Button>
  </Background>
);

export default memo(SignUpSignInPage);