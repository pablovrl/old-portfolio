import React from 'react'
import { Box, Text, VStack } from '@chakra-ui/react'
import TextoConIcono from '../components/TextoConIcono'

export default function Estudios() {
  return (
    <Box>
      <VStack align="start">
        <TextoConIcono text="Educación" icono="fas fa-graduation-cap fa-2x" fontSize="4xl" bold />
        <Box borderWidth="3px" rounded="lg" p={4} w="100%">
          <Text mb={2} fontSize="2xl" fontWeight="bold">Ingeniería de Ejecución en Computación e Informática</Text>
          <TextoConIcono
            text="Universidad del Bío-Bío, Concepción, Chile."
            icono="fas fa-building"
            fontSize="xl"
          />
          <TextoConIcono
            text="Marzo 2019 - Actualidad"
            icono="fas fa-calendar-alt"
            fontSize="xl"
          />
        </Box>
      </VStack>
    </Box>
  )
}
