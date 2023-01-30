import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';



export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://www.1800flowers.com/blog/wp-content/uploads/2021/07/unicorn.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <Flex
        w={'full'}
        justify={'end'}
        alignItems = {'center'}
        px={useBreakpointValue({ base: 4, md: 100 })}>
        <Stack maxW={'2xl'} alignItems={'flex-end'} spacing={2}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '8xl'})}>
            Care & Love?
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'pink.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'pink.500' }}>
              Adopt
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
}

