import { Heading, Grid, Flex, Input, Link, Button, Text } from "@chakra-ui/core";
import Divider from "../components/Divider";

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <img src="/rocketseat.svg" alt="Logo Rocketseat" />

        <Heading size="2xl" lineHeight="shorter" marginTop={16}>Faça seu login na plataforma</Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        <Input
          height="50px"
          backgroundColor="gray.800"
          focusBorderColor="purple.500"
          borderRadius="sm"
          placeholder="Email"
        />

        <Input
          height="50px"
          backgroundColor="gray.800"
          focusBorderColor="purple.500"
          borderRadius="sm"
          placeholder="Senha"
          marginTop={2}
        />

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="purple.600"
          fontWeight="bold"
          _hover={{ color: 'purple.500' }}
        >
          Esqueci minha senha
        </Link>

        <Button
          marginTop={6}
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          _hover={{ backgroundColor: 'purple.600' }}
        >
          ENTRAR
        </Button>

        <Text
          marginTop={6}
          textAlign="center"
          fontSize="sm"
          color="gray.300"
        >
          Não tem um conta? {" "}
          <Link
            color="purple.600"
            fontWeight="bold"
            _hover={{ color: 'purple.500' }}
          >
            Registre-se
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm">Ou entre com</Text>

          <Button
            flex={1}
            height="50px"
            marginLeft={6}
            alignItems="center"
            justifyContent="center"
            backgroundColor="gray.600"
            borderRadius="sm"
            _hover={{ backgroundColor: 'purple.500' }}
          >
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  )
}
