import type { NextPage } from 'next'
import { Container, Button, HStack, Image, Text } from '@chakra-ui/react'
import {TextStyle} from '../Components/styled';
import { TwitterIcon, GitHubIcon } from '../Components/Icons';
import { motion } from 'framer-motion';

const ProfileImage = 'https://avatars.githubusercontent.com/u/75582376?v=4';
const TwitterUrl = 'https://twitter.com/Fenix__DEV';
const GitHubUrl = 'https://github.com/FenixDev643'

const MotionContainer = motion(Container);

const Info: NextPage = () => {
        return (
                <MotionContainer 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{duration: 0.5}}
                centerContent>
                <HStack
                alignContent={'center'}
                justifyContent={'center'}>
                <Image
                borderRadius='full'
                boxSize='150px'
                src={ProfileImage}/>
                <Text style={TextStyle}>
                        el creador de esta pagina es FenixDEV, muchas de las cosas que ha
                        hecho han estado orientadas a BackEnd, FrontEnd y Diseño Web,
                </Text>
                </HStack>
                <HStack
                alignContent={'center'}
                justifyContent={'center'}
                direccion={'row'}>
                <Button 
                onClick={()=>{window.open(TwitterUrl, '_blank')}}
                colorScheme='twitter' 
                leftIcon={<TwitterIcon/>}>
                        Twitter
                </Button>
                <Button 
                onClick={()=>{window.open(GitHubUrl, '_blank')}}
                colorScheme='blackAlpha' 
                leftIcon={<GitHubIcon/>}>
                        GitHub
                </Button>
                </HStack>
        </MotionContainer>
        )
}

export default Info
