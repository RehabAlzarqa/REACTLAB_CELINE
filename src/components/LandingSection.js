import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profileImage from '../image/profileImage.jpeg';  // تأكد من أن المسار صحيح

// تعريف المتغيرات المطلوبة
const greeting = "Hello, I am Rehab!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// المكون الرئيسي
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center" // محاذاة العناصر أفقياً
    alignItems="center" // محاذاة العناصر رأسياً
    isDarkBackground
    backgroundColor="#2A4365" // اللون الخلفي
  >
    {/* الحاوية العمودية الأساسية */}
    <VStack spacing={16}>
      {/* عرض الصورة */}
      <Avatar 
        src={profileImage}  // استخدام الصورة المستوردة هنا
        size="2xl" 
        name="Rehab"
      />
      
      {/* النصوص */}
      <VStack spacing={6}>
        <Heading as="h1" size="xl" noOfLines={1}>
          {greeting} {/* التحية الترحيبية */}
        </Heading>
        <VStack spacing={2}>
          <Heading as="h2" size="md" noOfLines={1}>
            {bio1} {/* النص الأول */}
          </Heading>
          <Heading as="h2" size="md" noOfLines={1}>
            {bio2} {/* النص الثاني */}
          </Heading>
        </VStack>
      </VStack>
    </VStack>
  </FullScreenSection>
);

// تصدير المكون
export default LandingSection;
