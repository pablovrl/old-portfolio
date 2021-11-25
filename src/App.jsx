import {
  Box,
  Container
} from "@chakra-ui/react"
import ColorModeChanger from "./components/ColorModeChanger";
import Perfil from "./pages/Perfil";
import Proyectos from "./pages/Proyectos";
import Tecnologies from "./pages/Tecnologias";


function App() {


  return (
    <Box my={5}>
      <Container maxW="container.lg">
        <ColorModeChanger />
        <Perfil />
        <Proyectos />
        <Tecnologies />
      </Container>
    </Box>
  );
}

export default App;
