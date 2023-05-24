import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../utils/styles';
const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.bold]}>Paginas de Busca</Text>
            <View style={styles.content}>
                <Button style={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar Cor')}>Busca Cor</Button>
            </View>
            <View style={styles.content}>
                <Button style={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar Carro')}>Busca Carro</Button>
            </View>
            <View style={styles.content}>
                <Button style={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar Pessoa')}>Busca Pessoa</Button>
            </View>
            <View style={styles.content}>
                <Button style={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar Fruta')}>Busca Fruta</Button>
            </View>
            <View style={styles.content}>
                <Button style={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar Produto')}>Busca Produto</Button>
            </View>
            <View style={styles.content}>
                <Button style={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar Animal')}>Busca Animal</Button>
            </View>
        </View>
    );
};

export default HomeScreen;