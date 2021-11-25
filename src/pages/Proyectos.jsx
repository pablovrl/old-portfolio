import React from 'react'
import {
  VStack,
  Text,
  SimpleGrid,
} from '@chakra-ui/react'
import Proyecto from '../components/Proyecto'

export default function Proyectos() {

  const proyectos = [
    {
      nombre: "To-Do App",
      descripcion: "Una simple aplicación de TODO's en React, conectada a una API, y requests realizadas con axios.",
      link: "https://react-todo-app-aanrkme15-pablovrl.vercel.app/",
      github: "https://github.com/pabloVrl/react-todo-app"
    },
    {
      nombre: "API To-Do App",
      descripcion: "API REST para la aplicación de To-Do's, desarrollada con express, y usando MongoDB para la continuidad de los datos.",
      link: "",
      github: "https://github.com/pabloVrl/api-todo-app"
    }
  ]

  const componentesProyectos = proyectos.map( p => <Proyecto proyecto={p} />)

  return (
    <VStack align="start" mb={4}>
      <Text fontSize="5xl" fontWeight="bold" mb={4}>Proyectos</Text>
      <SimpleGrid columns={{base: 1, md: 2}} w="100%" spacing="4">
        {componentesProyectos}
      </SimpleGrid>
    </VStack>
  )
}
