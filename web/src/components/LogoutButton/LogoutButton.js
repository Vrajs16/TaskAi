//LogoutButton.js
import {
  Button
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    //isAuthenticated && ( //Keep this when you login in only logout button remains
      //<Button colorScheme="gray" variant="outline" size="md"
      //onClick={() => logout({ returnTo: window.location.origin })}>
        //Log Out
      //</Button>
   // )
   <Button colorScheme="gray" variant="outline" size="md"
      onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </Button>

  );
};

export default LogoutButton;
