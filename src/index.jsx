import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import buscarProduto from "./screens/BuscarProduto";
import buscarPessoas from "./screens/BuscarPessoa";
import buscarCarros from "./screens/BuscarCarro";
import buscarAnimal from "./screens/BuscarAnimal";
import buscarFruta from "./screens/BuscarFruta";
import buscarCor from "./screens/BuscarCor";

const Stack = createStackNavigator();

export default function RootNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Início" component={HomeScreen} />
                <Stack.Screen name='Buscar Produto' component={buscarProduto} />
                <Stack.Screen name='Buscar Pessoa' component={buscarPessoas}/>
                <Stack.Screen name='Buscar Carro' component={buscarCarros}/>
                <Stack.Screen name='Buscar Animal' component={buscarAnimal}/>
                <Stack.Screen name='Buscar Fruta' component={buscarFruta}/>
                <Stack.Screen name='Buscar Cor' component={buscarCor}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}