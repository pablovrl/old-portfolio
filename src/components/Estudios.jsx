import React from 'react'
import { Box, Text, VStack } from '@chakra-ui/react'
import TextoConIcono from '../components/TextoConIcono'
import { FaGraduationCap, FaBuilding, FaCalendarAlt } from 'react-icons/fa'

export default function Estudios() {
  return (
    <Box>
      <VStack align="start">
        <TextoConIcono text="Educación" icono={<FaGraduationCap style={{fontSize: "2.5rem"}}/>} fontSize="4xl" bold />
        <Box borderWidth="3px" rounded="lg" p={4} w="100%">
          <Text mb={2} fontSize="2xl" fontWeight="bold">Ingeniería de Ejecución en Computación e Informática</Text>
          <TextoConIcono
            text="Universidad del Bío-Bío, Concepción, Chile."
            icono={<FaBuilding />}
            fontSize="xl"
          />
          <TextoConIcono
            text="Marzo 2019 - Actualidad"
            icono={<FaCalendarAlt />}
            fontSize="xl"
          />
        </Box>
      </VStack>
    </Box>
  )
}
