'use client';
import PlaygroundEditor from '../components/PlaygroundEditor';
import { 
  Container,
  VStack,
  Flex,
  Button,
  Text
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW='100%' p={0}>
      <VStack>
        <PlaygroundEditor />
      </VStack>
    </Container>
  )
}
