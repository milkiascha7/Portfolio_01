import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import blogapp from '../public/images/works/Blog_App.png'
import google_Clone from '../public/images/works/Google_Clone.png'
import hulu_Clone from '../public/images/works/HULU_APP.png'
import Layout from "../components/layouts/article";

const Works = () => {
    return (
        <Layout>
            <Container>
                {/* works */}
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="inkdrop" title="Personal Blog App" thumbnail={blogapp}>
                            A blog app focused in giving tutorials ranging from building Webapps, mobile apps, 3d modeling and 3d animations for products
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="walknote" title="Google Clone" thumbnail={google_Clone}>
                            A clone of the famous google search engine
                        </WorkGridItem>
                    </Section>

                </SimpleGrid>
                <hr mb={4} />
                {/* collaborations */}
                <Heading as="h3" fontSize={20} mb={4} mt={4}>
                    Collaborations
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.7}>
                        <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={blogapp}>
                            A markdown note taking appwith 100+ plugins, cross-platform and ecrypted data sync support
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="walknote" title="Google Clone" thumbnail={google_Clone}>
                            A clone of the famous google search engine
                        </WorkGridItem>
                    </Section>

                </SimpleGrid>


                {/* clones */}
                <Heading as="h3" fontSize={20} mb={4}>
                    Clones
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="inkdrop" title="Hulu Clone App" thumbnail={hulu_Clone}>
                            A clone of the famous google search engine
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="walknote" title="Google Clone" thumbnail={google_Clone}>
                            A clone of the famous google search engine
                        </WorkGridItem>
                    </Section>

                </SimpleGrid>
                <hr mb={4} />
                {/* collaborations */}
                <Heading as="h3" fontSize={20} mb={4} mt={4}>
                    Collaborations
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.7}>
                        <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={blogapp}>
                            A markdown note taking appwith 100+ plugins, cross-platform and ecrypted data sync support
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="walknote" title="Google Clone" thumbnail={google_Clone}>
                            A clone of the famous google search engine
                        </WorkGridItem>
                    </Section>

                </SimpleGrid>
            </Container>
        </Layout>
    )
}
export default Works