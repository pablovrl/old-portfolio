import React from 'react'
import { VStack, Text } from '@chakra-ui/react'

export default function Tecnologia({nombre, icono}) {
  return (
    <VStack w={"100%"}>
      <i style={{fontSize: "3.5rem"}} className={icono}></i>
      <Text>{nombre}</Text>
    </VStack>
  )
}
