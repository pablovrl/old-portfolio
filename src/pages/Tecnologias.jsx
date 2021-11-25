import React from 'react'
import GrupoTecnologias from '../components/GrupoTecnologias'
import tecnologias from '../data/datosTecnologias'
import {
  Text,
  VStack,
  SimpleGrid
} from '@chakra-ui/react'

const componentesTecnologias = tecnologias.map(tec => <GrupoTecnologias tipo={tec} />)

export default function Tecnologias() {
  return (
    <VStack align="start">
      <Text fontSize="5xl" mb={4} fontWeight="bold">Tecnologías</Text>
      <SimpleGrid columns={{base: 1, md: 2}} spacing={6} w="100%">
        {componentesTecnologias}
      </SimpleGrid>
    </VStack>
  )
}
