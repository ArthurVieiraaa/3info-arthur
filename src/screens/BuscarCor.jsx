import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { db } from '../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import styles from '../utils/styles';
import { TextInput } from 'react-native-paper';
import { FlatList } from 'react-native-web';

const BuscarCor = () => {

    const [getNameColor, setNameColor] = useState('');
    const [getColor, setColor] = useState([]);
    const [getAllColors, setAllColors] = useState([]);
    async function queryColor(name = null) {
        try{
            const queryList = query(collection(db, 'cor'), where('nome', '==', name));
            const queryResult = await getDocs(queryList);
            
            const color = [];
            queryResult.forEach((doc) => {
                color.push(doc.data());
            });

            setColor(color);
        }catch (error) {
            console.log(error);
        }
    };

    async function queryAllColors() {
        try{
            const allList = query(collection(db, 'cor'));
            const queryAllResult = await getDocs(allList);

            const allNames = [];
            queryAllResult.forEach((doc) => {
                allNames.push(doc.data());
            });
            
            setAllColors(allNames);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        queryColor(getNameColor);
        queryAllColors();
    }, [getNameColor]);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={[styles.title, styles.bold]}>Busque a Cor:</Text>
            </View>
            <View style={styles.content}>
                <TextInput label='Nome do Cor' value={getNameColor} onChangeText={setNameColor} />
            </View>
            <View style={styles.content}>
                <FlatList data={getColor} renderItem={({item}) => (
                    <View>
                        <Text style={styles.bold}>Nome: {item.nome}</Text>
                        <Text style={[styles.bold, {backgroundColor: item.hex, padding: 0}]}>HEX: {item.hex}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};

export default BuscarCor;