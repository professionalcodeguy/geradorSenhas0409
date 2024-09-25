import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { ModalPassword } from './src/components/modal/index'
let charset = "abcdefghijklmnopqrstuvwxyz!@#$%¨*&(0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export default function App() {
  const [senhaGerada, setSenhaGerada] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  function gerarSenha(){
    
    let senha = "";

    for (let i = 0, n = charset.length; i < 10; i++){
      senha += charset.charAt(Math.floor(Math.random() * n));
    }

    setSenhaGerada(senha);
    setModalVisible(true);

  }


  return (    
    <View style={styles.container}>
      <Image
        source={require("./src/img/logo.png")}
        style={styles.logo}


      />

      <Text style={styles.title}> LockGen </Text>

      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.textButton}> Gerar Senha </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword senha={senhaGerada} handleClose={() => setModalVisible(false)}/>
      </Modal>
      <Text style={styles.senha}> {senhaGerada} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#333',
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 6,    
  },
  textButton:{
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  senha: {
    marginTop: 20,
    color: '#333',
    fontSize: 15,
    fontWeight: 'bold',
  },
});