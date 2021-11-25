import React from 'react'
import {
  HStack,
  Text,
  Link,
  Box
} from "@chakra-ui/react"
export default function Perfil() {
  return (
    <Box my={4}>
      <Text
        fontSize={{ base: "5xl", md: "6xl" }}
        fontWeight="bold"
        mb={4}
      >
        Pablo Villarroel Antillanca
      </Text>
      <Text mb={4} fontSize={{ base: "2xl", md: "2xl" }} color="gray.500">
        Estudiante de Ingeniería informática en la Universidad del Bío-Bío. Actualmente enfocado en aprender desarrollo web con{" "}
        <Link href="https://es.reactjs.org/" color="purple.500" isExternal>
          React
        </Link> 
        {" "}y{" "}
        <Link href="https://nodejs.org/es/" color="purple.500" isExternal>
          Node JS
        </Link>.
      </Text >
      <HStack spacing="15px">
        <Link href="https://github.com/pabloVrl" isExternal>
          <i class="fab fa-github fa-2x"></i>
        </Link>
        <Link href="https://www.linkedin.com/in/pablo-villarroel-antillanca-850974186/" isExternal>
          <i class="fab fa-linkedin fa-2x"></i>
        </Link>
      </HStack>
    </Box>
  )
}
