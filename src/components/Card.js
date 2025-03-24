import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, profilemage }) => {
  return (
    <VStack
      backgroundColor="white"
      borderRadius="xl"
      cursor="pointer"
      spacing={4}
      alignItems="flex-start"
      boxShadow="md" // لإضافة ظل بسيط
      _hover={{ transform: "scale(1.05)", transition: "0.3s" }} // تأثير التكبير عند التحويم
    >
      {/* صورة المشروع */}
      <Image 
        src={profilemage} 
        alt={title} 
        borderRadius="xl" 
        width="100%" 
      />
      
      {/* محتوى البطاقة */}
      <VStack 
        spacing={4} 
        p={4} 
        alignItems="flex-start" 
        width="100%"
      >
        {/* عنوان المشروع */}
        <Heading as="h2" size="md">
          {title}
        </Heading>
        
        {/* وصف المشروع */}
        <Text color="gray.600">
          {description}
        </Text>
        
        {/* زر "See more" */}
        <HStack spacing={2}>
          <Text color="black" fontWeight="medium">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
