import React from 'react'
import {
  VStack,
  SimpleGrid
} from '@chakra-ui/react'
import Proyecto from '../components/Proyecto'
import TextoConIcono from '../components/TextoConIcono'
import proyectos from '../data/datosProyectos'

export default function Proyectos() {

  const componentesProyectos = proyectos.map( p => <Proyecto key={p.nombre} proyecto={p} />)

  return (
    <VStack align="start">
      <TextoConIcono my={4} text="Proyectos" icono="fas fa-folder-open fa-2x" fontSize="4xl" bold/>
      <SimpleGrid columns={{base: 1, md: 2}} w="100%" spacing="4">
        {componentesProyectos}
      </SimpleGrid>
    </VStack>
  )
}
