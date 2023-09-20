import { Text, Image, Input, Button, Link, extendTheme, View, Center} from "native-base";

export default function ResetPassword() {
  return (
    <View backgroundColor={'#22d3ee'} padding={70}> 
    {/* La imagen puede ser una url o el path de una imagen en la carpeta */}
        <Image 
            source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png",
            }}
            alt="Alternate Text"
            size="xl"
            margin={"auto"}
        />
        <Text color={"#fff"} fontWeight={"bold"} fontSize={20} textAlign={"center"} marginY={5}>Reset Password</Text>
        <Text color={"#fff"}>Password</Text>
        <Input placeholder="type your password" type="password" marginY={2}></Input>
        <Text color={'#fff'}>New Password</Text>
        <Input placeholder="type your new password" type="password" marginY={2}></Input>
        <Text color={'#fff'}>Confirm Password</Text>
        <Input placeholder="type your new password" type="password" marginY={2} width={170}></Input>
        <Button marginTop={5}>Reset</Button>
    </View>
  );
}