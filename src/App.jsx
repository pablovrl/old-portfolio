import {
  Box,
  Container
} from "@chakra-ui/react"
import ColorModeChanger from "./components/ColorModeChanger";
import Estudios from "./pages/Estudios";
import Perfil from "./pages/Perfil";
import Proyectos from "./pages/Proyectos";
import Tecnologias from "./pages/Tecnologias";


function App() {


  return (
    <Box my={5}>
      <Container maxW="container.lg">
        <ColorModeChanger />
        <Perfil />
        <Proyectos />
        <Tecnologias />
        <Estudios />
      </Container>
    </Box>
  );
}

export default App;
