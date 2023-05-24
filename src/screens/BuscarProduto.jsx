import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { db } from '../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import styles from '../utils/styles';
import { TextInput } from 'react-native-paper';
import { FlatList } from 'react-native-web';

const BuscarProdutos = () => {
    const [getNameProdutos, setNameProdutos] = useState('');
    const [getProdutos, setProdutos] = useState([]);
    async function queryProdutos(name = null) {
        try{
            const queryList = query(collection(db, 'produtos'), where('NomeDoProduto', '==', name));
            const queryResult = await getDocs(queryList);
            
            const Produtos = [];
            queryResult.forEach((doc) => {
                Produtos.push(doc.data());
            });

            setProdutos(Produtos);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        queryProdutos(getNameProdutos);

    }, [getNameProdutos]);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={[styles.title, styles.bold]}>Busque o Produtos:</Text>
            </View>
            <View style={styles.content}>
                <TextInput label='Nome do Produtos' value={getNameProdutos} onChangeText={setNameProdutos} />
            </View>
            <View style={styles.content}>
                <FlatList data={getProdutos} renderItem={({item}) => (
                    <View>
                        <Text style={styles.bold}>Nome: {item.NomeDoProduto}</Text>
                        <Text style={styles.bold}>Preço: {item.Preco}</Text>
                        <Text style={styles.bold}>Quantidade: {item.Quantidade}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};

export default BuscarProdutos;