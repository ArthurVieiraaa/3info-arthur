import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { db } from '../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import styles from '../utils/styles';
import { TextInput } from 'react-native-paper';
import { FlatList } from 'react-native-web';

const BuscarAnimal = () => {
    const [getNameAnimal, setNameAnimal] = useState('');
    const [getAnimal, setAnimal] = useState([]);

    async function queryAnimal(name = null) {
        try{
            const queryList = query(collection(db, 'animal'), where('nome', '==', name));
            const queryResult = await getDocs(queryList);
            
            const Animal = [];
            queryResult.forEach((doc) => {
                Animal.push(doc.data());
            });

            setAnimal(Animal);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        queryAnimal(getNameAnimal);

    }, [getNameAnimal]);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={[styles.title, styles.bold]}>Busque o Animal:</Text>
            </View>
            <View style={styles.content}>
                <TextInput label='Nome do Animal' value={getNameAnimal} onChangeText={setNameAnimal} />
            </View>
            <View style={styles.content}>
                <FlatList data={getAnimal} renderItem={({item}) => (
                    <View>
                        <Text style={styles.bold}>Nome: {item.nome}</Text>
                        <Text style={styles.bold}>idade: {item.idade}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};

export default BuscarAnimal;