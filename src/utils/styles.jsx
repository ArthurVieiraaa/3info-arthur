import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(103, 80, 164)',
      paddingBottom: 2,
      marginBottom: 10,
    },
    content:{
      textAlign: 'center',
      margin: 5,
    },
    bold:{
      fontWeight: 'bold',
    },
    modalContainer:{
      backgroundColor: 'rgba(103, 80, 164, .1)',
      borderRadius: '5px',
      padding: '10px',
      textAlign: 'left',
      width: '50%',
    },
    li:{
      textDecorationStyle: 'dotted',
    }
  }
);

export default styles;