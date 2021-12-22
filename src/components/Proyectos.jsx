import React from 'react'
import {
  VStack,
  SimpleGrid
} from '@chakra-ui/react'
import Proyecto from '../components/Proyecto'
import TextoConIcono from '../components/TextoConIcono'
import proyectos from '../data/datosProyectos'
import {FaFolderOpen} from 'react-icons/fa'

export default function Proyectos() {

  const componentesProyectos = proyectos.map( p => <Proyecto key={p.nombre} proyecto={p} />)

  return (
    <VStack align="start">
      <TextoConIcono text="Proyectos" icono={<FaFolderOpen style={{fontSize: "2rem"}}/>} fontSize="4xl" bold/>
      <SimpleGrid columns={{base: 1, md: 2}} w="100%" spacing="4">
        {componentesProyectos}
      </SimpleGrid>
    </VStack>
  )
}
