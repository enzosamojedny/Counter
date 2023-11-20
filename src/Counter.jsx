import { Box, Button, Center, Input, Text, Stack, useColorModeValue, SlideFade } from '@chakra-ui/react'
import { useState, useCallback } from 'react'

function Counter() {
    const [counterValue, setCounterValue] = useState(0)
    
    const increaseCounter = useCallback(() => {
        setCounterValue((prevValue) => prevValue + 1)
    }, [])

    const decreaseCounter = useCallback(() => {
        setCounterValue((prevValue) => prevValue > 0 ? prevValue - 1 : 0)
    }, [])

    const resetCounter = useCallback(() => {
        setCounterValue(0)
    }, [])

    const handleInputChange = useCallback((event) => {
        const newValue = parseInt(event.target.value)
        if (!isNaN(newValue)) {
            setCounterValue(newValue)
        }
    }, [])

    const bgColor = useColorModeValue('gray.200', 'gray.700')
    const color = useColorModeValue('black', 'white')

    return (
<Center>
    <Box bg={bgColor} color={color} p={6} rounded={'lg'} boxShadow="lg">
        <Center>
            <SlideFade in={true} offsetY="20px">
                <Text fontSize="2xl" fontWeight="bold">React Counter</Text>
            </SlideFade>
        </Center>
        <Stack direction={['column', 'row']} spacing={4} mt={4} align={['center', 'unset']}>
    <Input size={['sm', 'sm']} width={['100%', 'auto']} value={counterValue} onChange={handleInputChange} textAlign="center" p={2} fontSize="lg" />
    <Button colorScheme="green" onClick={increaseCounter} size={['sm', 'md']} w="40px">+</Button>
    <Button colorScheme="red" onClick={decreaseCounter} size={['sm', 'md']} w="40px">-</Button>
    <Button colorScheme="blue" onClick={resetCounter} size={['sm', 'md']} w="80px">reset</Button>
</Stack>
    </Box>
</Center>
    )
}

export default Counter