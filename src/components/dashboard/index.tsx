import { Layout } from "antd"
import { ContentContainer, PageContainer } from "./styles"
import { Sidebar } from "../common/sidebar"
import { Chat } from "../chat"


export const DashBoard = () => {
    return(
        <PageContainer>
        <Sidebar />
        <ContentContainer>
            <Chat></Chat>
        </ContentContainer>
    </PageContainer>
    )
}