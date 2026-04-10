import { observer } from "mobx-react-lite";
import { Flex } from "../../../../ui-libary/flex";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H2 } from "../../../../ui-libary/typography";
import useStores from "../../../../stores/useStores";
import { useEffect } from "react";

export const Profile=observer(()=>{
     const { userStore:{userData,getUserInfo} } = useStores();
     useEffect(()=>{
        getUserInfo();
     },[])
     console.log("Profile: userData =", userData);
    return (
        <Flex>
            <H2><FontAwesomeIcon fontSize={18} icon={faUser} />{userData.username}</H2>
        </Flex>
    )
})