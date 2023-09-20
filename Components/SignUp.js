import { Text, Image, Input, Button, Link, extendTheme, View, Center} from "native-base";

export default function SignUp() {
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
      <Text color={'#fff'} fontSize={30} marginY={5} textAlign={'center'}>SignUp</Text>
      <Text color={'#fff'} marginY={3}>Name</Text>
      <Input placeholder="type your username" width={"150"}></Input>
      <Text color={"#fff"} marginY={3}>Email</Text>
      <Input placeholder="type your email" type="email"></Input>
      <Text color={'#fff'} marginY={3}>Password</Text>
      <Input placeholder="type your password" type="password"></Input>
      <Button marginY={3}>Sign Up</Button>
      <Text color={'#fff'}>Or</Text>
      <Link>Login</Link>
    </View>
  );
}