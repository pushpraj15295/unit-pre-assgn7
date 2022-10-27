import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"
import DoctorButton from '../Model/DoctorButton'
import HospitalButton from '../Model/HospitalButton'

const Navbar = () => {
  return (
     <Box>
          <Flex justifyContent="space-between" padding="22px" border="2px solid grey" margin="3px" borderRadius="5px" bgColor="whatsapp.100">
               <Box fontSize="20px"><Link to="/">Home</Link></Box>
               <Box>
                    <Flex>
                          <Box><Link to="/doctor"><Button><DoctorButton/></Button></Link></Box>  &nbsp;&nbsp;
                          <Box><Link to="/hospital"><Button><HospitalButton/></Button></Link></Box>
                    </Flex>
               </Box>
          </Flex>
     </Box>
  )
}

export default Navbar