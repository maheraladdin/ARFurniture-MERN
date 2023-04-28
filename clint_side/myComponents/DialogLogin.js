import Dialog from "react-native-dialog";
import {useRouter} from "expo-router";


export const DialogLogin = ({visible,setVisible}) => {

    const router = useRouter();

    return (
        <>
            <Dialog.Container visible={visible}>
                <Dialog.Title>You have to login first</Dialog.Title>
                <Dialog.Description>
                    this action requires login
                </Dialog.Description>
                <Dialog.Button label="Cancel" onPress={() => setVisible(false)}/>
                <Dialog.Button label="login" onPress={() => router.push("./login")}/>
            </Dialog.Container>
        </>
    );
}