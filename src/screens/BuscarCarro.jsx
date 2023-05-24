import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { db } from '../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import styles from '../utils/styles';
import { TextInput } from 'react-native-paper';
import { FlatList } from 'react-native-web';

const BuscarCarro = () => {
    const [getNameCarro, setNameCarro] = useState('');
    const [getCarro, setCarro] = useState([]);
    async function queryCarro(name = null) {
        try{
            const queryList = query(collection(db, 'carro'), where('nome', '==', name));
            const queryResult = await getDocs(queryList);
            
            const Carro = [];
            queryResult.forEach((doc) => {
                Carro.push(doc.data());
            });

            setCarro(Carro);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        queryCarro(getNameCarro);

    }, [getNameCarro]);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={[styles.title, styles.bold]}>Busque o Carro:</Text>
            </View>
            <View style={styles.content}>
                <TextInput label='Nome do Carro' value={getNameCarro} onChangeText={setNameCarro} />
            </View>
            <View style={styles.content}>
                <FlatList data={getCarro} renderItem={({item}) => (
                    <View>
                        <Text style={styles.bold}>Nome: {item.nome}</Text>
                        <Text style={styles.bold}>Marca: {item.marca}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};

export default BuscarCarro;