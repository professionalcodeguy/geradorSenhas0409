import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message'

export function ModalPassword({senha, handleClose}) {

    function copyToClipboard() {
        Clipboard.setStringAsync(senha)
        Toast.show({
            type: 'success',
            text1: 'Senha copiada!',
            text2: 'A senha foi copiada para a área de transferência',
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>

                <Pressable style={styles.innerPassword} onPress={copyToClipboard}>
                    <Text style={styles.text}>
                        {senha}
                    </Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Toast />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    content:{
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000",
        marginBottom: 24,
    },

    innerPassword:{
        backgroundColor: "#e0e0e0",
        width: "90%",
        padding: 14,
        borderRadius: 8,
    },

    text:{
        color: "#000",
        textAlign: "center",
    },

    buttonArea:{
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between",
    },

    button:{
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
    },

    buttonSave:{
        backgroundColor: "#392DE9",
        borderRadius: 8,
    },

    buttonSaveText:{
        color: "#FFF",
        fontWeight: 'bold',
    },
})