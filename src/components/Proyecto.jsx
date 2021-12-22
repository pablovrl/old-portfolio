import React from 'react'
import { Box, Text, VStack, HStack, Link, Spacer } from '@chakra-ui/react'
import { FaGithub, FaLink } from 'react-icons/fa'

export default function Proyecto({ proyecto }) {

  const iconStyle = {fontSize: "1.5rem"}

  return (
    <Box borderWidth="1px" rounded="lg" shadow="lg" p={4}>
      <VStack align="start">
        <HStack spacing={3} w="100%">
          <Text fontSize="xl" fontWeight="bold">{proyecto.nombre}</Text>
          <Spacer />
          {proyecto.link !== "" && <Link href={proyecto.link} isExternal> <FaLink style={iconStyle}/> </Link>}
          <Link href={proyecto.github} isExternal> <FaGithub style={iconStyle}/> </Link>
        </HStack>
        <Text fontSize="md">{proyecto.descripcion}</Text>
      </VStack>
    </Box>
  )
}
