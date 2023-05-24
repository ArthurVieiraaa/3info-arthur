import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { db } from '../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import styles from '../utils/styles';
import { TextInput } from 'react-native-paper';
import { FlatList } from 'react-native-web';

const BuscarFruta = () => {

    const [getNameFruta, setNameFruta] = useState('');
    const [getFruta, setFruta] = useState([]);
    async function queryFruta(name = null) {
        try{
            const queryList = query(collection(db, 'fruta'), where('nome', '==', name));
            const queryResult = await getDocs(queryList);
            
            const Fruta = [];
            queryResult.forEach((doc) => {
                Fruta.push(doc.data());
            });

            setFruta(Fruta);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        queryFruta(getNameFruta);

    }, [getNameFruta]);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={[styles.title, styles.bold]}>Busque o Fruta:</Text>
            </View>
            <View style={styles.content}>
                <TextInput label='Nome do Fruta' value={getNameFruta} onChangeText={setNameFruta} />
            </View>
            <View style={styles.content}>
                <FlatList data={getFruta} renderItem={({item}) => (
                    <View>
                        <Text style={styles.bold}>Nome: {item.nome}</Text>
                        <Text style={styles.bold}>Preço: {item.preco}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};

export default BuscarFruta;