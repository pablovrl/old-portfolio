import React from 'react'
import GrupoTecnologias from '../components/GrupoTecnologias'
import tecnologias from '../data/datosTecnologias'
import {
  VStack,
  SimpleGrid
} from '@chakra-ui/react'
import TextoConIcono from '../components/TextoConIcono'
import {FaCode} from 'react-icons/fa'
const componentesTecnologias = tecnologias.map(tec => <GrupoTecnologias key={tec.nombre} tipo={tec} />)

export default function Tecnologias() {
  return (
    <VStack align="start">
      <TextoConIcono text="Tecnologías" icono={<FaCode style={{fontSize: "2rem"}}/>} fontSize="4xl" bold/>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
        {componentesTecnologias}
      </SimpleGrid>
    </VStack>
  )
}
