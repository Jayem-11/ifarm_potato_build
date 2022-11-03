import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';
import { Basics } from './Basics';


  
  export default function CallToActionWithVideo() {
        return (
            <Container maxW={'8xl'}  bgColor={"#021423"} h={"120vh"}>
                <Stack
                pl={"10"}
                pr={"10"}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}>
                    <Stack flex={1} spacing={{ base: 5, md: 10 }} >
                        <Heading
                        color={"white"}
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                            content: "''",
                            width: 'full',
                            height: '30%',
                            position: 'absolute',
                            bottom: 1,
                            left: 0,
                            bg: 'red.400',
                            zIndex: -1,
                            }}>
                            Upload a Potato leaf picture,
                        </Text>
                        <br />
                        <Text as={'span'} color={'red.400'}>
                            Detect the disease!
                        </Text>
                        </Heading>
                        <Text color={'white'}>
                        iFARM is an AI based platform that lets you detect the disease affecting your potato plant by predicting the uploaded potato leaf
                        picture. All that is free!
                        </Text>
                    </Stack>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}>
                    
                        <Basics/>
                    </Flex>
                </Stack>
            </Container>
        );
    }
