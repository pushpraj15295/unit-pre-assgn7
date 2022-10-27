import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from '@chakra-ui/react'
import React from 'react'

function HospitalButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
  return (
    <>
    <Button onClick={onOpen}>Add Hospital</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Doctor</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" flexDirection="column" gap="20px">
                <Input type="text" placeholder="Hospital name" />
               
            <Input type="number" placeholder="Enter Address"/>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default HospitalButton