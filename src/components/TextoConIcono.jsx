import React from 'react'
import {
  HStack,
  Text
} from '@chakra-ui/react'

export default function TextoConIcono({text, icono, fontSize, bold, my}) {
  return (
    <HStack my={my}>
      <i class={icono}></i>
      <Text fontSize={fontSize} fontWeight={bold ? "bold" : "regular"}>{text}</Text>
    </HStack>
  )
}
