import React from 'react'
import { Box, Text, VStack, Badge, Wrap, WrapItem, HStack, Link, Spacer } from '@chakra-ui/react'
import TextoConIcono from '../components/TextoConIcono'
import datosExperiencia from '../data/datosExperiencia'

export default function Experiencia() {
  return (
    <Box>
      <VStack align="start">
        <TextoConIcono text="Experiencia" icono="fas fa-briefcase fa-2x" fontSize="4xl" bold />
        {datosExperiencia.map(experiencia => (
          <Box borderWidth="3px" rounded="lg" p={4} w="100%">
            <HStack>
              <Text mb={2} fontSize="2xl" fontWeight="bold">{experiencia.puesto}</Text>
              <Spacer />
              <Link href={experiencia.linkEmpresa} isExternal> <i className='fas fa-link fa-lg'></i> </Link>
            </HStack>
            <TextoConIcono
              text={experiencia.empresa}
              icono="fas fa-building"
              fontSize="xl"
            />
            <TextoConIcono
              text={experiencia.tiempo}
              icono="fas fa-calendar-alt"
              fontSize="xl"
            />
            <Text my={2} align="justify">{experiencia.descripción}</Text>
            <Wrap>

              {experiencia.tecnologias.map(tec => (
                <WrapItem>
                  <Badge colorScheme="purple">{tec.nombre}</Badge>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}
