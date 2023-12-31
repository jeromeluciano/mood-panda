import { Box, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaViber } from "react-icons/fa";
import Section from "./section";
import SpotifyWidget from "./spotify-widget";

export default function FooterSection() {
  const textColor = useColorModeValue("gray.600", "gray.400");
  const iconColor = useColorModeValue("#6d6f7a", "#bbc4cf");

  const router = useRouter();
  const delay = useMemo(() => {
    if(router.pathname.split('/')[1]) {
      return 0.9;
    } else {
      return 1.8;
    }
  }, [router]) 
  

  return (
    <Section delay={delay}>
      <VStack spacing={4} as="footer" pt="6" pb="3" mx="auto" my="auto">
      <SpotifyWidget />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="2"
          spacing={4}
        >
          <a href="#">
            <Box>
              <FaFacebook size={24} color={iconColor} />
            </Box>
          </a>
          <a href="https://www.linkedin.com/">
            <Box>
              <FaLinkedin size={24} color={iconColor} />
            </Box>
          </a>
          <a href="https://github.com">
            <Box>
              <FaGithub size={24} color={iconColor} />
            </Box>
          </a>
          <a href="#">
            <Box>
              <FaViber size={24} color={iconColor} />
            </Box>
          </a>
          
        </Stack>
        <Text textAlign="center" color={textColor} fontSize="xs">
          &copy; {new Date().getFullYear()} Mood Panda
        </Text>
      </VStack>
    </Section>
  );
}
