import React from 'react'
import GrupoTecnologias from '../components/GrupoTecnologias'
import tecnologias from '../data/datosTecnologias'
import {
  VStack,
  SimpleGrid
} from '@chakra-ui/react'
import TextoConIcono from '../components/TextoConIcono'

const componentesTecnologias = tecnologias.map(tec => <GrupoTecnologias tipo={tec} />)

export default function Tecnologias() {
  return (
    <VStack align="start">
      <TextoConIcono my={4} text="Tecnologías" icono="fas fa-code fa-2x" fontSize="4xl" bold/>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
        {componentesTecnologias}
      </SimpleGrid>
    </VStack>
  )
}
