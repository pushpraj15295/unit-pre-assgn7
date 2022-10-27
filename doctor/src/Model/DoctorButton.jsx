import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'

const init={
   name:"",
   hosname:"",
   special:"",
   salary:""
}


function DoctorButton({items,setItems}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data,setData] = useState(init)

    const handleChange=(e)=>{
      let {name,value} = e.target;
      setData((prev)=>({
        ...prev,
        [name]:value
      }))
    }

    const onSubmit = (e)=>{
      e.preventDefault();
     
      setItems([...items,data])
      
    }
    const {name,hosname,special,salary} = data

  return (
    <>
    <Button onClick={onOpen}>Add Doctor</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Doctor</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" flexDirection="column" gap="20px">
                <Input type="text" placeholder="Enter Doctor Name" value={name} name="name" onChange={handleChange} />

                <Select placeholder='Select Hospital' onChange={handleChange} name="hosname" value={hosname}>
              <option value='Sanjay'>sanjay</option>
              <option value='jay'>jay</option>
             <option value='Aiims'>AIIMS</option>
            </Select>

            <Select placeholder='Select specialialisation"' onChange={handleChange} name="special" value={special}>
              <option value='general'>Genereal</option>
             <option value='nephrology'>Nephrology</option>
              <option value='radiologist'>Radiologist</option>
            </Select>

            <Input type="number" placeholder="Salary" onChange={handleChange} name="salary" value={salary} />

            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={onSubmit}> Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DoctorButton