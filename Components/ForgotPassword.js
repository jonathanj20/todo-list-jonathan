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
      <Text fontSize={20} color={'#fff'} fontWeight={"bold"}>Forgot Password</Text>
      <Text color={"#fff"}>Email</Text>
      <Input placeholder="type your email"></Input>
      <Button>Send</Button>
      <Link>Login</Link>
    </View>
  );
}