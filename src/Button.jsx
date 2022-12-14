import {Button, Alert} from "react-native";


export function SignInButton () {
    return (
        <Button
            title="Dahara app"
            onPress={() => Alert.alert("주의 다하라는 귀여워","인정?",
                [
                    {
                        text: "ㄴㄴ 인정ㄴㄴ",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "ㅇㅇ 인정", onPress: () => console.log("OK Pressed") }
                ])}
                >
        </Button>
    );

}