import React from 'react'
import { Box, Container, Flex, Text, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box);
const MotionText = motion(Text);

export default function Home() {
    {/* configurations */}
    const FontResponsiveSize = ['15px', 'xl','2xl'];
    const IconsResponsiveSize = ['4xl','5xl','6xl'];
    const SpringConfiguration = {
                        type: "spring",
                        stiffness: 200,
                        damping: 10
    }
    {/* Components */}    
    const PizzaLogo = () => {
            return <MotionBox
        initial={{ rotate: 180, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={SpringConfiguration}
        fontSize={IconsResponsiveSize}>
                <ion-icon style={{color: 'tomato'}} name="pizza"/>
        </MotionBox>    
    }
    const InfoBox = (props : any) => {
        return (
        <MotionBox
        boxShadow='2xl'
        marginX={5}
        backgroundColor={'tomato'}
        borderRadius={'xl'}
        padding={4}
        color={'white'}
        width={'fit-content'}
        height={'fit-content'}
        fontSize={FontResponsiveSize}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={SpringConfiguration}>
            {props.children}
        </MotionBox>
        )
    }

        return (
        <>
        <Container maxW='container.xl' centerContent>
            {/* Header */}
            <Flex
            width={['xs','md','lg']}
            alignItems={'center'}
            marginY={'10'}
            >
                <MotionText
                fontSize={FontResponsiveSize}
                fontWeight={'600'}
                color={'tomato'}
                marginX={'10'}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{duration: 0.5}}>
                Welcome to Pedro´s Pizza
                </MotionText>
                <PizzaLogo/>
            </Flex>
            <Flex
            width={'full'}
            direction={'row'} 
            alignItems={'center'}>
                <InfoBox>
                        <text>
                                hello, this is pedro pizza, a great
                                pizza shop, this pizza shop contains
                                pepperoni pizza, cheese pizza, and a lot...
                        </text>
                </InfoBox>
                <InfoBox>
                        <text>
                                in pedro pizza, all of food there are magnific
                                and delicious, never you tire of the food
                        </text>
                </InfoBox>
            </Flex>
        <Flex
        borderRadius={'3xl'}
        direction={'row'}
        wrap={'wrap'}
        backgroundColor={'tomato'}
        marginY={'10'}
        alignItems={'center'}
        justifyContent={'center'}>
        <Image
        borderRadius='xl'
        boxSize={['100px','md','xl']}
        objectFit={'cover'}
        margin={2}
        src='/Images/pizzas/1.jpeg'/>
        <Image
        borderRadius='xl'
        boxSize={'100px'}
        objectFit={'cover'}
        margin={2}
        src='/Images/pizzas/2.jpg'/>
        <Image
        borderRadius='xl'
        boxSize={'100px'}
        objectFit={'cover'}
        margin={2}
        src='/Images/pizzas/3.jpeg'/>
        <Image
        borderRadius='xl'
        boxSize={'100px'}
        objectFit={'cover'}
        margin={2}
        src='/Images/pizzas/4.jpeg'/>
        <Image
        borderRadius='xl'
        boxSize={'100px'}
        objectFit={'cover'}
        margin={2}
        src='/Images/pizzas/5.jpg'/>
        <Image
        borderRadius='xl'
        boxSize={'100px'}
        objectFit={'cover'}
        margin={2}
        src='/Images/pizzas/6.jpg'/>
        <Image
        borderRadius='xl'
        boxSize={'100px'}
        objectFit={'cover'}
        margin={2}
        src='/Images/pizzas/7.jpg'/>
        <Image
        borderRadius='xl'
        boxSize={'100px'}
        objectFit={'cover'}
        margin={2}
        src='/Images/pizzas/8.jpg'/>
        </Flex>
        </Container>
        </>
    )
}
