// Aerial Roofing Measurement Website using CAD and 3D imaging technology
import { Box, Container, Heading, SimpleGrid, Image, Text, VStack } from "@chakra-ui/react";
import { FaDrone } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          Aerial Roofing Measurement Solutions <FaDroneAlt />
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Explore the latest in aerial roofing measurement capabilities using advanced CAD and 3D imaging technology.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading as="h3" size="lg">
              3D Imaging Gallery
            </Heading>
            <Image src="https://images.unsplash.com/photo-1697498435309-2c7864cfd607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzRCUyMHJvb2ZpbmclMjBpbWFnZXxlbnwwfHx8fDE3MTM3MzQ1MTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="3D Roofing Image" />
            <Text mt={2}>Precision 3D imaging of roofing structures.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg">
              CAD Designs Gallery
            </Heading>
            <Image src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDQUQlMjByb29maW5nJTIwZGVzaWdufGVufDB8fHx8MTcxMzczNDUxMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="CAD Roofing Design" />
            <Text mt={2}>Detailed CAD designs for accurate measurements.</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
