import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();

    const handleClick = () => setShow(!show);
    const postDetails = (pics) => { }

    const submitHandler = () => {

    }
    return (
        <VStack
            spacing={'5px'}
        >
            <FormControl>
                <FormLabel id="first-name" isRequired> Name </FormLabel>
                <Input
                    placeholder='Enter Your Name'
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
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
            <FormControl>
                <FormLabel id="confirm-password" isRequired> Confirm Password </FormLabel>
                <InputGroup>
                    <Input
                        type={show ? 'text' : 'password'}
                        placeholder='Confirm Password'
                        onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                    <InputRightElement width={"4.5rem"}>
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id="pic">
                <FormLabel> Upload your Picture </FormLabel>
                <Input
                    type={"file"}
                    p={1.5}
                    accept="image/*"
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>

            <Button colorScheme={"blue"} width="100%" style={{marginTop:15}} onClick={submitHandler}>
                Sign Up
            </Button>

        </VStack>
    )
}

export default Signup