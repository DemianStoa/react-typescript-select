import { useState } from 'react'
import { Select, SelectOption } from './Select'

const options =[
  { label: "First", Value: 1 },
  { label: "Second", Value: 2 },
  { label: "Third", Value: 3 },
  { label: "Fourth", Value: 4 },
  { label: "Fifth", Value: 5 },
]

function App() {
  const [value1, setValue1] = useState<SelectOption | []>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])
  
  return(
  <>
   <Select multiple 
   options={options} 
   value={value1}
    onChange={o => setValue1(o)}/>
    <br/>
   <Select options={options}
    value={value2} 
    onChange={o => setValue2(o)}/>
  </>
 )
}

export default App
