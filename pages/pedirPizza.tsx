import { VStack, Input, Container, Button, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { PizzaIcon } from '../Components/Icons'
import { motion } from 'framer-motion';
import { TextStyle } from '../Components/styled';

const MotionButton = motion(Button);
const MotionVStack = motion(VStack);

const RequestPizza: NextPage = () => {
        return (
        <Container centerContent>
                <MotionVStack
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{duration: 0.5}}
                margin={5} 
                width={'full'}
                spacing={4}>
                <Input 
                style={TextStyle}
                focusBorderColor='tomato'
                borderColor={'red.300'}
                variant='outline' 
                placeholder='Nombre de la persona remitente'
                size={'md'}/>
                <Input 
                style={TextStyle}
                focusBorderColor='tomato'
                borderColor={'red.300'}
                variant='outline' 
                placeholder='direccion'
                size={'md'}/>
                <Input 
                style={TextStyle}
                type={'tel'}
                focusBorderColor='tomato'
                borderColor={'red.300'}
                variant='outline' 
                placeholder='numero de pizzas'
                size={'md'}/>
                <Input 
                style={TextStyle}
                focusBorderColor='tomato'
                borderColor={'red.300'}
                variant='outline' 
                placeholder='descripcion de las pizzas'
                size={'md'}/>
        </MotionVStack>
        <MotionButton 
        colorScheme={'orange'}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: 0.5}}>
        <PizzaIcon/>
        <Text style={TextStyle}>
                Pedir Pizza
        </Text>
        </MotionButton>
        </Container>
        )
}

export default RequestPizza
