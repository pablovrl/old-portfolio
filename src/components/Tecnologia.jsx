import React from 'react'
import { VStack, Text } from '@chakra-ui/react'
import {useMediaQuery} from 'react-responsive'

export default function Tecnologia({ nombre, icono }) {

  const isMobile = useMediaQuery({query: '(max-width: 670px)'})
  const iconStyle = isMobile ? {fontSize: "2.5rem"} : {fontSize: "4rem"}

  return (
    <VStack w={"100%"}>
        <i style={iconStyle} className={icono}></i>
        <Text>{nombre}</Text>
    </VStack>
  )
}
