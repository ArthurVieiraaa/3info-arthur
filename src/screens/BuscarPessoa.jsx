import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { db } from '../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import styles from '../utils/styles';
import { TextInput } from 'react-native-paper';
import { FlatList } from 'react-native-web';

const BuscarPessoa = () => {

    const [getNamePessoa, setNamePessoa] = useState('');
    const [getPessoa, setPessoa] = useState([]);
    async function queryPessoa(name = null) {
        try{
            const queryList = query(collection(db, 'pessoa'), where('nome', '==', name));
            const queryResult = await getDocs(queryList);
            
            const Pessoa = [];
            queryResult.forEach((doc) => {
                Pessoa.push(doc.data());
            });

            setPessoa(Pessoa);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        queryPessoa(getNamePessoa);

    }, [getNamePessoa]);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={[styles.title, styles.bold]}>Busque o Pessoa:</Text>
            </View>
            <View style={styles.content}>
                <TextInput label='Nome do Pessoa' value={getNamePessoa} onChangeText={setNamePessoa} />
            </View>
            <View style={styles.content}>
                <FlatList data={getPessoa} renderItem={({item}) => (
                    <View>
                        <Text style={styles.bold}>Nome: {item.nome}</Text>
                        <Text style={styles.bold}>idade: {item.idade}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};

export default BuscarPessoa;