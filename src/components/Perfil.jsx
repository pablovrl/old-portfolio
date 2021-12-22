import React from 'react'
import {
  HStack,
  Text,
  Link,
  Box,
  Button
} from "@chakra-ui/react"
import { FiDownload } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaWhatsapp} from 'react-icons/fa'

const iconStyle = {
  fontSize: "2rem"
}
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
        <Link style={{textDecoration: "none"}} href="https://github.com/pabloVrl" isExternal>
          <FaGithub style={iconStyle} />
        </Link>
        <Link style={{textDecoration: "none"}} href="https://www.linkedin.com/in/pablo-villarroel-antillanca-850974186/" isExternal>
          <FaLinkedin style={iconStyle}/>
        </Link>
        <Link style={{textDecoration: "none"}} href="https://wa.me/56956856577" isExternal>
          <FaWhatsapp style={iconStyle}/>
        </Link>
        <Link style={{textDecoration: "none"}} href="pablovillarroelcv.pdf" isExternal>
          <Button variant="solid" colorScheme={"purple"}>DESCARGAR CV<FiDownload style={{ marginLeft: "5px" }} /></Button>
        </Link>
      </HStack>
    </Box>
  )
}
