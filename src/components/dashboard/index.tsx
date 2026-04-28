import { ContentContainer} from "./styles"
import { Sidebar } from "../common/sidebar"
import { Chat } from "../chat"
import { Container } from "../chat/styles"


export const DashBoard = () => {
    return(
        <Container>
        <Sidebar />
        <Chat/>
   </Container>
    )
}