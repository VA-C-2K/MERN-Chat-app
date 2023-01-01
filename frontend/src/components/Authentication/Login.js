import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => setShow(!show);

  const submitHandler = () => {

  }
  return (
      <VStack
          spacing={'5px'}
      >
          <FormControl>
              <FormLabel id="email" isRequired> Email Address</FormLabel>
              <Input
                  type='email'
                  placeholder='Enter Your Email Address'
                  onChange={(e) => setEmail(e.target.value)}
              />
          </FormControl>
          <FormControl>
              <FormLabel id="password" isRequired> Password </FormLabel>
              <InputGroup>
                  <Input
                      type={show ? 'text' : 'password'}
                      placeholder='Enter Your Password'
                      onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width={"4.5rem"}>
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                      </Button>
                  </InputRightElement>
              </InputGroup>
          </FormControl>
          <Button colorScheme={"blue"} width="100%" style={{marginTop:15}} onClick={submitHandler}>
              Login
          </Button>
          <Button colorScheme={"red"}  variant="solid" width="100%" style={{marginTop:15}} onClick={()=>{
            setEmail("guest@example.com");
            setPassword("123456")
          }}>
              Get Guest User Credentials
          </Button>

      </VStack>
    )
}

export default Login