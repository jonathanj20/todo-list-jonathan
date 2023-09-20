import { Text, Image, Input, Button, Link, extendTheme, View } from "native-base";

export default function Login() {
  return (
    <View background={'#22d3ee'} padding={70}>
    {/* La imagen puede ser una url o el path de una imagen en la carpeta */}
      <Image 
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png",
        }}
        alt="Alternate Text"
        size="xl"
        margin={"auto"}
      />
      <Text fontSize={30} margin={10} color={"white"}>Login</Text>
      <Text color={"white"} fontWeight={"bold"}>Username</Text>
      <Input placeholder="Type your username" margin={5} width={"140"}></Input>
      <Text color={"white"} fontWeight={"bold"}>Password</Text>
      <Input placeholder="Type your password" type="password" margin={5}></Input>
      <Button>Login</Button>
      <Link marginTop={5}>Forgot password?</Link>
    </View>
  );
}




