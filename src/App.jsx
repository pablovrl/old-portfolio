import {
  Box,
  Container,
  Divider 
} from "@chakra-ui/react"
import ColorModeChanger from "./components/ColorModeChanger";
import Estudios from "./components/Estudios";
import Perfil from "./components/Perfil";
import Proyectos from "./components/Proyectos";
import Tecnologias from "./components/Tecnologias";
import Experiencia from "./components/Experiencia";


function App() {


  return (
    <Box h="100" borderTopWidth="8px" borderColor="purple.500" m={0}>
      <Container maxW="container.lg">
        <ColorModeChanger />
        <Perfil />
        <Divider my={8}/>
        <Proyectos />
        <Divider my={8}/>
        <Tecnologias />
        <Divider my={8}/>
        <Estudios />
        <Divider my={8}/>
        <Experiencia />
        <Divider my={8}/>
      </Container>
    </Box>
  );
}

export default App;
