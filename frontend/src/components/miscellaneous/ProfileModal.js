import React from 'react';
import { useDisclosure } from "@chakra-ui/hooks";
import { Button, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import "./ProfileModal.css";
const ProfileModal = ({ user, childern }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {childern ? <span className="chakra-menu__menuitem css-18esm8n profile"
        onClick={onOpen}>My Profile</span> :
        (
          <IconButton
            display={{ base: "flex" }}
            icon={<i className="fa fa-eye" aria-hidden="true"></i>}
            onClick={onOpen}
          />
        )
      }
      <Modal size={"xl"} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader
            fontSize={"40px"}
            fontFamily="Work sans"
            display={"flex"}
            justifyContent="center"
          >{user?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            flexDir="column"
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Image
              borderRadius={"full"}
              boxSize="150px"
              src={user?.pic}
              alt={user?.name}
            />
            <Text
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="Work sans"
            >
              Email:{user?.email}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileModal;