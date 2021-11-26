import {
  Box,
  Container,
  Divider 
} from "@chakra-ui/react"
import ColorModeChanger from "./components/ColorModeChanger";
import Estudios from "./pages/Estudios";
import Perfil from "./pages/Perfil";
import Proyectos from "./pages/Proyectos";
import Tecnologias from "./pages/Tecnologias";


function App() {


  return (
    <Box my={5} h="100" borderTopWidth="3px" borderColor="purple.500" m={0}>
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
      </Container>
    </Box>
  );
}

export default App;
