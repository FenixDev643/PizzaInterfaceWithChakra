import React from 'react'
import { Button, Flex } from '@chakra-ui/react'

export default function NavigationBar() {
    const HomeIcon = () => {return <ion-icon style={{color: '#fff'}} size="large" name="home"></ion-icon>};
    const PizzaIcon = () => {return <ion-icon style={{color: '#fff'}} size="large" name="pizza"></ion-icon>};
    const InformationIcon = () => {return <ion-icon style={{color: '#fff'}} size="large" name="information-circle"></ion-icon>};

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
