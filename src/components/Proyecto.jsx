import React from 'react'
import { Box, Text, VStack, HStack, Link } from '@chakra-ui/react'

export default function Proyecto({ proyecto }) {
  return (
    <Box borderWidth="1px" rounded="lg" shadow="lg" p={4}>
      <VStack align="start">
        <HStack spacing={2}>
          <Text fontSize="xl" fontWeight="bold">{proyecto.nombre}</Text>
          <Link href={proyecto.github} isExternal> <i className="fab fa-github fa-2x"></i> </Link>
          {proyecto.link !== "" ? 
            <Link href={proyecto.link} isExternal> <i class="far fa-eye fa-2x"></i> </Link> :
            ""
          }
        </HStack>
        <Text fontSize="md">{proyecto.descripcion}</Text>
      </VStack>
    </Box>
  )
}
