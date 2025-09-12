import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./homepage.module.css";
import WritingEffect from "../component/WritingEffect";
import Projects from "../component/Projects";
import skills from "../component/TechSkills";
import Card from "../component/Card";
import SmallCard from "../component/SmallCard";
import GithubCalendar from "react-github-calendar";
import {
  BsLinkedin,
  BsFillTelephoneFill,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import resumePDF from "../resume/Jayaganesh_Bhat_Resume.pdf";
import { FaDownload } from "react-icons/fa";
import ExpCard from "../component/ExpCard";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import ImageSlider from "../component/ImageSlider";
import myImage from "../assets/PSX_20250820_192350[1].jpg";

const HomePage = () => {
  const [showExp, setExp] = useState(false);

  const showExperiance = () => {
    if (!showExp) {
      setExp(true);
    }
  };

  const showAbout = () => {
    setExp(false);
  };

  function handleResumeDownload() {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Jayaganesh_Bhat_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // If download attribute is not supported, open the file in a new window
    setTimeout(() => {
      if (!document.querySelector(":active")) {
        window.open(resumePDF, "_blank");
      }
    }, 100);
  }

  return (
    <Box className={styles.container}>
      <Flex className={styles.sec1} id="section1">
        <Flex justify={"center"} align={"center"}>
          <Fade left>
            <Box textAlign={"start"}>
              <Text fontSize={{ base: "18px", md: "25px" }}>
               Hello, This is
              </Text>
              <Text fontSize={{ base: "30px", md: "50px" }}>
                Jayaganesh Bhat
              </Text>
              <Flex
                fontSize={{ base: "20px", md: "30px" }}
                align={"center"}
                gap={2}
              >
                <Text>Aspiring </Text>
                <WritingEffect text={"Full Stack Developer."} />
              </Flex>
              <Box>
                <button
                  className={styles.resumebtn}
                  onClick={handleResumeDownload}
                >
                  <FaDownload className={styles.downloadIcon} />
                  <span>Resume</span>
                </button>
              </Box>
            </Box>
          </Fade>
        </Flex>
        <Box
          w="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* <Image
            src="PSX_20240625_202753.jpg"
            w="100%"
            h="auto"
            maxW="100%"
          /> */}
          {
  
  
      <img src={myImage} alt="Example" width="550" className={styles.roundedImg} />
   
  
          }
        </Box>
      </Flex>
      <Box id="section2" w={"100%"} boxSize={"border-box"}>
        <Text className={styles.secName}>
          All <span className={styles.redTxt}>About Me</span>  
          {/* <span className={styles.redTxt}>Experience</span> */}
        </Text>
        <Flex pb={"50px"} display={"flex"} justifyContent={"center"} gap={5}>
          {/* <Button
            onClick={showAbout}
            bg={showExp ? null : "#f51720"}
            color={showExp ? "black" : "white"}
            _hover={"none"}
            fontSize={{ base: "14px", md: "16px" }}
          >
           
          </Button> */}
          {/* <Button
            onClick={showExperiance}
            bg={showExp ? "#f51720" : null}
            color={showExp ? "white" : "black"}
            _hover={"none"}
            fontSize={{ base: "14px", md: "16px" }}
          >
            
          </Button> */}
        </Flex>
        <Flex className={styles.sec2}>
          <Zoom>
            <Box></Box>
            <Box className={styles.aboutSec}>
              {showExp ? (
                <ExpCard />
              ) : (
                <>
                  {" "}
                  <Box>
                    <ul>
                      <li>
                        I’m Jayaganesh Bhat B, a Computer Science Engineering student specializing in Data Science, currently in my 6th semester.
                      </li>
                    </ul>
                  </Box>
                  <Box>
                    <ul>
                      <li>
                       I enjoy building full-stack web applications and integrating them with AI/ML solutions to create impactful real-world projects. My experience includes working on projects like a Resume Analyzer, YouTube Watch History Analyzer, and Peer to Peer Learning PLatform , where I applied skills in Java, Python, React, Node.js, and MongoDB.

I’m deeply interested in AI, Machine Learning, and Full-Stack Development, and I strive to combine strong problem-solving skills with clean, efficient code.
                      </li>
                    </ul>
                  </Box>
                  <Box>
                    <ul>
                      <li>
                       What I’m looking for: Opportunities to apply my skills in software development, data-driven applications, and AI solutions whether through internships, collaborations, or full-time roles.
                      </li>
                    </ul>
                  </Box>
                  <Box>
                    <ul>
                      <li>
                       Outside of coding, I love exploring new technologies, participating in hackathons, and continuously learning to sharpen my skills.
                      </li>
                    </ul>
                  </Box>
                </>
              )}
            </Box>
          </Zoom>
        </Flex>
      </Box>
      <Box className={styles.sec3} id="section3">
        <Text className={styles.secName}>
          My <span className={styles.redTxt}>Projects</span>
        </Text>
        <Box className={styles.projSec}>
          <Zoom>
            {Projects.map((e) => {
              return <Card {...e} />;
            })}
          </Zoom>
        </Box>
      </Box>
      <Box id="section4" min-height="100vh">
        <Text className={styles.secName}>
          My
          <span className={styles.redTxt}>Technical</span>Skills
          <Zoom>
            <Box className={styles.sec4}>
              {skills.map((e) => {
                return <SmallCard {...e} />;
              })}
            </Box>
          </Zoom>
        </Text>
        <Box>
        
        </Box>
      </Box>
      {/* <Box id="section5">
        <Zoom>
          <Text className={styles.secName}>
            Github <span className={styles.redTxt}>Overview</span>
          </Text>
          <Flex
            p={10}
            gap={10}
            background={"#050A30"}
            color={"white"}
            justify={"space-between"}
            flexDir={"column"} */}
          
            {/* <Flex justify={"center"}>
              <a href="https://github.com/Jayaganeshbhat">
                <img
                  alt="Jayaganesh Bhat's GitHub Profile"
                  src="src/pages/Screenshot (129).png"
                />
              </a>
            </Flex> */}
            {/* <Flex justify={"center"}>
              <GithubCalendar username="Surajbnp" />
            </Flex>
          </Flex>
        </Zoom> */}
      {/* </Box> */}
      <Box id="section6" bg={"#edf2f8"} minHeight="100vh">
        <Text className={styles.secName}>
          Take A<span className={styles.redTxt}>Coffee</span>And{" "}
          <span className={styles.redTxt}>Chat</span> With Me
        </Text>
        <Flex className={styles.sec6}>
          <Fade left>
            <Flex className={styles.contact}>
              <Flex>
                <Box>
                  <BsLinkedin size={20} />
                </Box>
                <Box>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/jayaganesh-bhat-803695257/"
                  >
                    Jayaganesh Bhat
                  </a>
                </Box>
              </Flex>
              <Flex>
                <Box>
                  <BsGithub size={20} />
                </Box>
                <Box>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Jayaganeshbhat"
                  >
                   Jayaganeshbhat
                  </a>
                </Box>
              </Flex>
              <Flex>
                <Box>
                  <SiGmail size={20} />
                </Box>
                <Box>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="mailto:jayaganesh0703@gmail.com"
                  >
                    jayaganesh0703@gmail.com
                  </a>
                </Box>
              </Flex>
              <Flex>
                <Box>
                  <BsFillTelephoneFill size={20} />
                </Box>
                <Box>
                  <a rel="noreferrer" target="_blank" href="tel:8217604218">
                    +91 8217604218
                  </a>
                </Box>
              </Flex>
              <Flex>
                <Box>
                  <BsWhatsapp size={20} />
                </Box>
                <Box>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=8217604218"
                  >
                    +91 8217604218
                  </a>
                </Box>
              </Flex>
            </Flex>
          </Fade>

          <Box display={"flex"} align="center" justifyContent="center">
            <Fade right>
              <img
                src="https://mohit-portfolio.vercel.app/assets/contact.f495edec.svg"
                alt=""
              />
            </Fade>
          </Box>
        </Flex>
      </Box>
      <Text fontWeight={400} className={styles.lastTxt}>
        Designed & Made With <span style={{ color: "red" }}>❤</span> By JAYAGANESH BHAT BAREPPADY,
        2025 All rights reserved.
      </Text>
    </Box>
  );
};

export default HomePage;
