import { Box} from '@chakra-ui/react'
import './App.css'
import Counter from './Counter'

function App() {

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" backgroundColor='gray'>
      <Counter />
    </Box>
  )
}

export default App