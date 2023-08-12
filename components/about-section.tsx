import {
    ArrowLeftIcon,
    ArrowRightIcon,
    ChevronDownIcon,
} from "@chakra-ui/icons";
import {
    Button,
    Center,
    LinkBox,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import usePrimaryColor from "../hooks/usePrimaryColor";
import useTextColor from "../hooks/useTextColor";
import AnimatedButton from "./animated-button";
import Section from "./section";
import SectionTitle from "./section-title";

export default function AboutSection() {
    const primaryColor = usePrimaryColor();
    const textColor = useTextColor();

    const downloadResume = () => {
        window.open("jjdluciano-resume.pdf");
    };

    return (
        <Section delay={0.9}>
            <Stack mt="8" spacing={4} id="about">
                <SectionTitle title="about me" />
                <Text
                    fontSize="md"
                    color={textColor}
                    lineHeight="10"
                    textAlign="justify"
                    // px="4"
                    style={{ textIndent: "25px" }}
                >
                    I love solving problems and creating elegant solutions. I&apos;m
                    a skilled web developer who enjoys working on both frontend
                    and backend aspects of web development. Programming, logic,
                    and structure are my passions.
                </Text>
            </Stack>
        </Section>
    );
}
