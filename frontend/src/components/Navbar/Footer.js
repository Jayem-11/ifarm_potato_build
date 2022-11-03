
  import {
    Box,
    Center,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  
  

  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('black', 'gray.900')}
       color={useColorModeValue('gray.700', 'gray.200')}
       h={75}>
       

        <Container
          maxW={'6xl'}
          pt={7}
          centerContent>
          <Text color={"white"}>© 2022 iFARM Potatoes. All rights reserved</Text>
        </Container>
      </Box>
    );
  }