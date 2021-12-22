import React from 'react'
import {
  Flex,
  Spacer,
  Button,
  useColorMode
} from '@chakra-ui/react';
import { FaSun, FaMoon  } from 'react-icons/fa'

export default function ColorModeChanger() {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex>
      <Spacer />
      <Button my={4} onClick={toggleColorMode}>
        {colorMode === 'light' ? <FaMoon /> : <FaSun /> }
      </Button>
    </Flex>
  )
}
