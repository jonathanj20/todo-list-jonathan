import { Text, Image, Input, Button, Link, extendTheme, View, FlatList } from "native-base";
import { useState } from "react";

export default function Login() {
    /*declaro variables de estado (son variables que estarán cambiando su valor durando el uso de la interfáz)
    -En este caso 'tareas' y 'tarea' son los nombres de las variables que contendrán el valor.
    -setTareas o setTarea sirve para estar estableciendo un nuevo valor a las variables.
    -useState es para ponerles un valor de inicio, 'tareas' es un arreglo en este caso*/
    const [tareas, setTareas] = useState([]);
    let [tarea, setTarea] = useState('');

    const agregarTarea = () => {
        setTareas([...tareas, tarea]);
    }

    const eliminarTarea = () => {
        tareas.pop();
        setTareas([...tareas]);
    }

    return (
        <View>
            <Text fontSize={30} marginBottom={5}>Lista de tareas</Text>
            <Input placeholder="Escribe tu tarea" onChangeText={setTarea} marginBottom={5}></Input>
            <Button onPress={agregarTarea} background={'#087BFD'} marginBottom={2}>Añadir tarea</Button>
            <Button onPress={eliminarTarea} backgroundColor={'#F52C1B'} marginBottom={2}>Eliminar tarea</Button>
            <Text fontWeight={"bold"}>Tareas</Text>
            <View backgroundColor={"#9108FD"} padding={3}>
                <Text color={"white"}>{tareas}</Text>
            </View>
        </View>
    );
}