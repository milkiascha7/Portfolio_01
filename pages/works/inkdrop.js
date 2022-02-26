import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/Paragraph'
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Inkdrop">
            <Container>
                <Title>
                    Inkdrop<Badge>2016</Badge>
                </Title>
                <p>A markdown note-taking app with 100+ plugs, ccross platform and encryed data sync support. The life-time revenus is more bla bla bla</p>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.inkdrop.app/">
                            https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOs/Linux/ios/Andriod</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React Native, Next js, Firebase</span>
                    </ListItem>
                    <ListItem>
                        <Meta>BlogPost</Meta>
                        <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
                            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
                            $5/mo <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
                <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />


            </Container>
        </Layout>
    )
}

export default Work