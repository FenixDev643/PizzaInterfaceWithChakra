import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function Custom404() {
    return (
        <Flex
        w='100%'
        justifyContent={'center'}
        padding={20}>
            <Text color='tomato' fontSize='xl'>404 - Pagina no encontrada</Text>
        </Flex>
    )
}
