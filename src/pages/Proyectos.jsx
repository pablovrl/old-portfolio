import React from 'react'
import {
  VStack,
  SimpleGrid
} from '@chakra-ui/react'
import Proyecto from '../components/Proyecto'
import TextoConIcono from '../components/TextoConIcono'


export default function Proyectos() {

  const proyectos = [
    {
      nombre: "To-Do App",
      descripcion: "Una simple aplicación de TODO's en React, conectada a una API, y con requests realizadas mediante axios.",
      link: "https://react-todo-app-aanrkme15-pablovrl.vercel.app/",
      github: "https://github.com/pabloVrl/react-todo-app"
    },
    {
      nombre: "API To-Do App",
      descripcion: "API REST para la aplicación de To-Do's, desarrollada con Express, y usando MongoDB para la continuidad de los datos.",
      link: "",
      github: "https://github.com/pabloVrl/api-todo-app"
    },
    {
      nombre: "Portafolio",
      descripcion: "El portfolio que estás viendo actualmente, desarrollado con React y Chakra UI.",
      link: "",
      github: "https://github.com/pabloVrl/portfolio"
    }
  ]

  const componentesProyectos = proyectos.map( p => <Proyecto proyecto={p} />)

  return (
    <VStack align="start">
      <TextoConIcono my={4} text="Proyectos" icono="fas fa-folder-open fa-2x" fontSize="4xl" bold/>
      <SimpleGrid columns={{base: 1, md: 2}} w="100%" spacing="4">
        {componentesProyectos}
      </SimpleGrid>
    </VStack>
  )
}
