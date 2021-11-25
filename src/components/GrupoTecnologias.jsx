import React from 'react'
import { Box, Text, Divider, HStack} from '@chakra-ui/react'
import Tecnologia from './Tecnologia'

export default function GrupoTecnologias({ tipo }) {
  return (
    <Box borderWidth="1px" rounded="lg" shadow="lg">
      <Text p={4} fontWeight="bold" fontSize="xl">{tipo.nombre}</Text>
      <Divider />
      <HStack spacing={6} p={4} >
        {tipo.tecnologias.map(tec => (
          <Tecnologia nombre={tec.nombre} icono={tec.icono} />
        ))}
      </HStack>
    </Box>
  )
}
