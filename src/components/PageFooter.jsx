import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import Logo from '../assets/icons/footer-logo.svg'
import Search from '../assets/icons/Search.svg'
import FAQ from '../assets/icons/FAQ.svg'

function PageFooter() {
    return (
        <Flex justifyContent="space-around" my="5%">
            <img src={Logo} alt="logo"/>
            <img src={Search} alt="logo"/>
            <img src={FAQ} alt="logo"/>
        </Flex>
    )
}

export default PageFooter
