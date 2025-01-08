import "./App.css";
import { Stack, Text, Image, Tabs } from "@chakra-ui/react";
import Me from "@/assets/Gw.jpg";
import cv from "@/assets/CV_Vincent_Sutiono.pdf";
import { FaLinkedin, FaGithub, FaBookOpen } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { LiaCertificateSolid } from "react-icons/lia";
import { CiLocationArrow1 } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  tabItems,
  tabStyles,
  skills,
  techStackData,
  certificates,
  projects,
} from "@/content";

function App() {
  return (
    <>
      <Stack
        maxW={"100svw"}
        maxH={"100svh"}
        w={"100svw"}
        h={"100svh"}
        bgColor={"black"}
        color={"white"}
        display={"flex"}
        justify={"center"}
        align={"center"}
        fontFamily={"Inter"}
      >
        {/* Outer Container */}
        <Stack
          maxW={"95%"}
          maxH={"95%"}
          w={"100%"}
          h={"100%"}
          overflow={{ base: "scroll", xl: "unset" }}
          p={4}
          gap={4}
          borderRadius={8}
          display={"flex"}
          direction={{ base: "column", xl: "row" }}
          justify={{ base: "top", xl: "center" }}
          align={{ base: "top", xl: "top" }}
        >
          {/* Left Container */}
          <Stack
            w={{ base: "100%", xl: "25%" }}
            h={{ base: "100%", xl: "100%" }}
            display={"flex"}
            direction={{ base: "row", xl: "column" }}
            align={{ base: "top", xl: "center" }}
            bgColor={"rgba(23, 23, 23, 0.5)"}
            p={4}
            gap={{ base: 4, xl: 0 }}
            borderRadius={8}
            boxShadow={"2px 0px 10px 2px rgba(230, 215, 12, 0.35)"}
          >
            <Image
              src={Me}
              alt="me"
              boxSize={{ base: "120px", xl: "250px" }}
              h={{ base: "300px", xl: "unset" }}
              borderRadius={"lg"}
            />
            {/* Contacts */}
            <Stack
              w={{ base: "50%", xl: "100%" }}
              display={"flex"}
              align={{ base: "center", xl: "unset" }}
              textAlign={"center"}
              mt={{ base: 7, xl: 2 }}
              ms={{ base: 2, xl: "unset" }}
              gap={2}
            >
              <Stack>
                <Text
                  textStyle={{ base: "xl", xl: "4xl" }}
                  fontWeight={"medium"}
                >
                  Vincent Sutiono
                </Text>
                <Text
                  textStyle={{ base: "2xs", xl: "lg" }}
                  fontWeight={"light"}
                >
                  Aspiring Full-Stack Developer with a Passion for IoT
                </Text>
              </Stack>
              <Stack
                display={"flex"}
                gap={{ base: 1, xl: 4 }}
                mt={{ base: 5, xl: 4 }}
                ms={{ base: 0, xl: 2 }}
                textStyle={{ base: "sm", xl: "xl" }}
              >
                <a
                  href="http://www.linkedin.com/in/vincent-sutiono"
                  target="_blank"
                >
                  <Stack
                    display={"flex"}
                    direction={"row"}
                    align={"center"}
                    gap={2}
                    cursor={"pointer"}
                    _hover={{
                      textDecoration: "underline",
                      textDecorationColor: "white",
                    }}
                  >
                    <FaLinkedin color="white" />
                    <Text color={"white"}>Vincent Sutiono</Text>
                  </Stack>
                </a>
                <a href="https://github.com/VincentSVSutiono" target="_blank">
                  <Stack
                    display={"flex"}
                    direction={"row"}
                    align={"center"}
                    gap={2}
                    cursor={"pointer"}
                    _hover={{
                      textDecoration: "underline",
                      textDecorationColor: "white",
                    }}
                  >
                    <FaGithub color="white" />
                    <Text color={"white"}>vincentsvsutiono</Text>
                  </Stack>
                </a>
                <a>
                  <Stack
                    display={"flex"}
                    direction={"row"}
                    align={"center"}
                    gap={2}
                  >
                    <SiGmail color="white" />
                    <Text
                      color={"white"}
                      fontSize={{ base: "xx-small", xl: "unset" }}
                    >
                      vincentsvsutiono@gmail.com
                    </Text>
                  </Stack>
                </a>
              </Stack>
              <Button
                w={{ base: "85%", xl: "65%" }}
                h={{ base: "13%", xl: "18%" }}
                size={"xl"}
                bgColor={"white"}
                _hover={{ bgColor: "gray.400" }}
                mx={"auto"}
                mt={6}
              >
                <a href={cv} download="CV_Vincent_Sutiono.pdf">
                  <Text color={"black"} fontWeight={"bolder"}>
                    Download CV
                  </Text>
                </a>
              </Button>
            </Stack>
          </Stack>
          {/* Right Section */}
          <Stack
            w={{ base: "100%", xl: "75%" }}
            h={{ base: "fit-content", xl: "100%" }}
            p={4}
            borderRadius={8}
            bgColor={"rgba(23, 23, 23, 0.5)"}
            boxShadow={"4px 4px 10px 2px rgba(230, 215, 12, 0.35)"}
          >
            <Tabs.Root
              defaultValue={"about"}
              justify={{ base: "center", xl: "end" }}
            >
              <Tabs.List
                gap={2}
                p={{ base: 0, xl: 2 }}
                py={{ base: 1, xl: 0 }}
                borderRadius={8}
                colorPalette={"yellow"}
              >
                {tabItems.map(({ value, label }) => (
                  <Tabs.Trigger key={value} value={value} {...tabStyles}>
                    {label}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              {/* About Section */}
              <Tabs.Content
                value="about"
                _open={{
                  animationName: "slide-from-top, fade-in",
                  animationDuration: "1000ms",
                }}
                _closed={{
                  animationName: "fade-out, scale-out",
                  animationDuration: "100ms",
                }}
              >
                <Stack p={4} gap={4} textAlign={"justify"}>
                  <Stack>
                    <Text
                      textStyle={{ base: "xl", xl: "3xl" }}
                      fontWeight={"bold"}
                      letterSpacing={2}
                    >
                      ABOUT ME
                    </Text>
                    <Stack
                      w={{ base: "60%", xl: "15%" }}
                      py={{ base: 1, xl: 2 }}
                      bgColor={"yellow"}
                    ></Stack>
                  </Stack>
                  <Stack>
                    <Text textStyle={"sm"}>
                      Hi, I’m Vincent Sutiono, an aspiring Full-Stack Developer
                      with a strong passion for IoT and innovative tech
                      solutions. Currently pursuing a degree in Computer
                      Engineering, I am driven by the desire to leverage
                      technology to address real-world challenges. Through my
                      academic journey, I have gained hands-on experience in web
                      development and embedded systems, constantly pushing
                      myself to learn, grow, and collaborate on transformative
                      projects. I enjoy turning ideas into practical solutions
                      and look forward to applying my skills to develop
                      innovative and impactful technologies.
                    </Text>
                  </Stack>
                  <Stack
                    display={"flex"}
                    direction={{ base: "column", xl: "row" }}
                    gap={10}
                    p={5}
                  >
                    {skills.map(({ icon, text }, index) => (
                      <Stack key={index} gap={4}>
                        <Stack fontSize="5xl" mx="auto">
                          {icon}
                        </Stack>
                        <Text textStyle="md" w="80%" mx="auto">
                          {text}
                        </Text>
                      </Stack>
                    ))}
                  </Stack>
                  <Stack>
                    <Stack
                      display={"flex"}
                      direction={"row"}
                      align={"center"}
                      gap={4}
                    >
                      <Stack
                        fontSize={{ base: "xl", xl: "3xl" }}
                        border={"1px solid yellow"}
                        rounded={"full"}
                        p={3}
                        w={"fit-content"}
                      >
                        <FaBookOpen color={"yellow"} />
                      </Stack>
                      <Text
                        textStyle={{ base: "md", xl: "2xl" }}
                        fontWeight={"bold"}
                        letterSpacing={2}
                      >
                        EDUCATION
                      </Text>
                    </Stack>
                    <Stack
                      display={"flex"}
                      direction={"row"}
                      gap={4}
                      align={"top"}
                      mt={1}
                      ms={5}
                    >
                      <Stack
                        p={{ base: 1, xl: 2 }}
                        rounded={"full"}
                        bgColor={"yellow"}
                        h={"fit-content"}
                        mt={1}
                      ></Stack>
                      <Stack ps={5}>
                        <Text
                          textStyle={{ base: "xs", xl: "md" }}
                          fontWeight={"semibold"}
                        >
                          Multimedia Nusantara University
                        </Text>
                        <Text
                          textStyle={{ base: "xs", xl: "md" }}
                          color={"yellow"}
                        >
                          2022 - 2026
                        </Text>
                        <Text textStyle={{ base: "xs", xl: "md" }}>
                          Undergraduate Computer Engineering Student
                        </Text>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Tabs.Content>
              {/* Skills Section */}
              <Tabs.Content
                value="skills"
                _open={{
                  animationName: "slide-from-top, fade-in",
                  animationDuration: "1000ms",
                }}
                _closed={{
                  animationName: "fade-out, scale-out",
                  animationDuration: "100ms",
                }}
              >
                <Stack p={4} gap={4} textAlign={"justify"}>
                  <Stack>
                    <Text
                      textStyle={{ base: "xl", xl: "3xl" }}
                      fontWeight={"bold"}
                      letterSpacing={2}
                    >
                      SKILLS
                    </Text>
                    <Stack
                      w={{ base: "60%", xl: "15%" }}
                      py={{ base: 1, xl: 2 }}
                      bgColor={"yellow"}
                    ></Stack>
                    <Stack
                      display={"flex"}
                      direction={"row"}
                      justify={"space-evenly"}
                      gap={4}
                      mt={5}
                      wrap={"wrap"}
                    >
                      {techStackData.map((section, index) => (
                        <Stack
                          key={index}
                          gap={4}
                          display={"flex"}
                          align={"center"}
                          w={{ base: "100%", xl: "20%" }}
                        >
                          <Text textStyle="xl" color={section.color} mt={3}>
                            {section.title}
                          </Text>
                          <Stack
                            display={"flex"}
                            direction={"row"}
                            justify={"center"}
                            wrap={"wrap"}
                            gap={5}
                            mt={3}
                          >
                            {section.logos.map((logo, idx) => (
                              <Image
                                key={idx}
                                src={logo.src}
                                alt={logo.alt}
                                boxSize={"5rem"}
                                filter={logo.filter || "none"}
                              />
                            ))}
                          </Stack>
                        </Stack>
                      ))}
                    </Stack>
                    <Stack mt={10}>
                      <Stack
                        display={"flex"}
                        direction={"row"}
                        align={"center"}
                        gap={4}
                      >
                        <Stack
                          fontSize={{ base: "xl", xl: "3xl" }}
                          border={"1px solid yellow"}
                          rounded={"full"}
                          p={3}
                          w={"fit-content"}
                        >
                          <LiaCertificateSolid color={"yellow"} />
                        </Stack>
                        <Text
                          textStyle={{ base: "md", xl: "2xl" }}
                          fontWeight={"bold"}
                          letterSpacing={2}
                        >
                          Certifications
                        </Text>
                      </Stack>
                      <Stack
                        display={"flex"}
                        direction={{ base: "column", xl: "row" }}
                        gap={4}
                        align={"top"}
                        mt={1}
                        ms={5}
                      >
                        {certificates.map((cert, index) => (
                          <Stack
                            key={index}
                            direction={{ base: "column", xl: "row" }}
                          >
                            <Stack
                              p={{ base: 0, xl: 2 }}
                              rounded={"full"}
                              bgColor={"yellow"}
                              h={"fit-content"}
                              mt={{ base: 0, xl: 1 }}
                            ></Stack>
                            <Stack ps={5} me={5}>
                              <Text
                                textStyle={{ base: "xs", xl: "md" }}
                                fontWeight={"semibold"}
                              >
                                {cert.title}
                              </Text>
                              <Text
                                textStyle={{ base: "xs", xl: "md" }}
                              >{`issued by ${cert.issuer}`}</Text>
                              <a href={cert.link} target="_blank">
                                <Stack
                                  display={"flex"}
                                  direction={"row"}
                                  align={"center"}
                                  gap={2}
                                  cursor={"pointer"}
                                  _hover={{
                                    textDecoration: "underline",
                                    textDecorationColor: "yellow",
                                    opacity: 0.8,
                                  }}
                                  mt={2}
                                >
                                  <Text
                                    textStyle={{ base: "xs", xl: "md" }}
                                    color={"yellow"}
                                  >
                                    View Credentials
                                  </Text>
                                  <CiLocationArrow1 color={"yellow"} />
                                </Stack>
                              </a>
                            </Stack>
                          </Stack>
                        ))}
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Tabs.Content>
              {/* Projects Section */}
              <Tabs.Content
                value="projects"
                _open={{
                  animationName: "slide-from-top, fade-in",
                  animationDuration: "1000ms",
                }}
                _closed={{
                  animationName: "fade-out, scale-out",
                  animationDuration: "100ms",
                }}
              >
                <Stack p={4} gap={4} textAlign={"justify"}>
                  <Text
                    textStyle={{ base: "xl", xl: "3xl" }}
                    fontWeight={"bold"}
                    letterSpacing={2}
                    textAlign={"left"}
                  >
                    PROJECTS & EXPERIENCE
                  </Text>
                  <Stack
                    w={{ base: "60%", xl: "15%" }}
                    py={{ base: 1, xl: 2 }}
                    bgColor={"yellow"}
                  ></Stack>
                  <Stack
                    display={"flex"}
                    direction={{ base: "column", xl: "row" }}
                    justify={"space-evenly"}
                    wrap={"wrap"}
                    gap={7}
                    mt={3}
                  >
                    {projects.map((project, index) => (
                      <DialogRoot
                        key={index}
                        placement={"top"}
                        motionPreset={"slide-in-bottom"}
                      >
                        <DialogTrigger asChild>
                          <Stack
                            w={{ base: "100%", xl: "25%" }}
                            display={"flex"}
                            justify={"center"}
                            align={"center"}
                            bgColor={project.bgColor}
                            shadow={"lg"}
                            roundedTop={"md"}
                            roundedBottom={"xl"}
                            _hover={{
                              opacity: 0.5,
                              cursor: "pointer",
                              textDecoration: "underline",
                            }}
                          >
                            <Image
                              src={project.image}
                              alt={project.name}
                              boxSize={"7rem"}
                            />
                            <Text
                              w={"full"}
                              textStyle={"lg"}
                              bgColor={"bg.muted"}
                              p={4}
                              roundedBottom={"md"}
                            >
                              {project.name}
                            </Text>
                          </Stack>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              <Text textStyle={"4xl"}>{project.title}</Text>
                            </DialogTitle>
                            <DialogCloseTrigger
                              color={"black"}
                              bgColor={"yellow"}
                              _focus={{ outline: "none", border: "none" }}
                            />
                          </DialogHeader>
                          <DialogBody>
                            <Stack gap={6}>
                              <Stack textStyle={"md"} gap={1}>
                                <Text color={"yellow"}>{project.date}</Text>
                                <Text fontWeight={"semibold"}>
                                  Role: {project.role}
                                </Text>
                              </Stack>
                              <Stack textAlign={"justify"} gap={2}>
                                <Text>{project.description}</Text>
                                <Text>{project.responsibilities}</Text>
                              </Stack>
                              <Stack
                                display={"flex"}
                                direction={"row"}
                                align={"center"}
                                gap={4}
                              >
                                {project.tech.map((tech, techIndex) => (
                                  <Text
                                    key={techIndex}
                                    px={4}
                                    py={2}
                                    color={tech.color}
                                    bgColor={tech.bgColor}
                                    rounded={"lg"}
                                  >
                                    {tech.name}
                                  </Text>
                                ))}
                              </Stack>
                              <Stack display={"flex"} direction={"row"} gap={5}>
                                {project.web ? (
                                  <a href={project.web} target="_blank">
                                    <Text
                                      color={"yellow"}
                                      _hover={{
                                        textDecoration: "underline",
                                        opacity: 0.8,
                                      }}
                                    >
                                      View Project
                                    </Text>
                                  </a>
                                ) : (
                                  <Text color={"yellow"}>View Project</Text>
                                )}
                                <a href={project.github} target="_blank">
                                  <Text
                                    color={"yellow"}
                                    _hover={{
                                      textDecoration: "underline",
                                      opacity: 0.8,
                                    }}
                                  >
                                    View Code
                                  </Text>
                                </a>
                              </Stack>
                            </Stack>
                          </DialogBody>
                        </DialogContent>
                      </DialogRoot>
                    ))}
                  </Stack>
                </Stack>
              </Tabs.Content>
            </Tabs.Root>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default App;
