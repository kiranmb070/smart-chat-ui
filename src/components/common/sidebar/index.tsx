import { observer } from "mobx-react-lite";
import {EmptyText,Footer, Header, HistorySection, ProfileData, SidebarContianer } from "./styles";
import { H2 } from "../../../ui-libary/typography";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex } from "../../../ui-libary/flex";
import { Profile } from "./profile";
export const Sidebar = observer(() => {
    return (
        <SidebarContianer>
            <Flex flexDirection="column" gap="1rem">
            <Header>     
                <H2><FontAwesomeIcon fontSize={18} icon={faPlus} />New Chat</H2>
                <H2><FontAwesomeIcon icon={faPlus} /></H2>
               </Header>
                 <HistorySection>
    <EmptyText>No history yet</EmptyText>
  </HistorySection>

               </Flex>
               <Flex>
                <Footer>
                <ProfileData>
                    <Profile/>
                </ProfileData>
                </Footer>
                </Flex> 
        </SidebarContianer>
    )
})