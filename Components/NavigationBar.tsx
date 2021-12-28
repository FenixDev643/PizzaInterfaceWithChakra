import React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { HomeIcon, PizzaIcon, InformationIcon } from './Icons';

export default function NavigationBar() {
        const Redirect = (url : string) => {
                window.open(url, '_self');
        }

    return (
        <Flex
        bg='tomato'
        width={'full'}
        p={4}
        justifyContent={'space-around'}
        color='white'>
            <Button
            size={'lg'}
            colorScheme='yellow'
            onClick={() => {Redirect('/home')}}><HomeIcon></HomeIcon></Button>
            <Button 
             size={'lg'}
            colorScheme='yellow'
            onClick={() => {Redirect('/pedirPizza')}}><PizzaIcon></PizzaIcon></Button>
            <Button 
             size={'lg'}
            colorScheme='yellow'
            onClick={() => {Redirect('/info')}}><InformationIcon></InformationIcon></Button>
        </Flex>
    )
}
