import React from 'react'
import {Button, Alert, Modal, StyleSheet, Pressable, Text, View, TextInput} from 'react-native'

class Criar extends React.Component {

    state = {
        isAdicionar: true,
        itens: []
    }

    handleInput = (name, value) => {
        this.setState({[name]: value})
    }

    onClickConfirmar = () => {
        const {quantidade, valor, itens} = this.state
        let array = itens
        array.push({quantidade: parseFloat(quantidade), valor: parseFloat(valor)})
        this.setState({isAdicionar: false, itens: array})
    }

    render() {
        const {isAdicionar, itens} = this.state
        return (
            <View style={styles.criar}>
                <Text style={styles.titulo}>Adicione itens ao orçamento</Text>
                <View style={styles.container_botao}>
                    <Button title="Adicionar" onPress={() => this.setState({isAdicionar: true})}/>
                </View>

                <View>
                    {
                        itens.map(i => (
                            <Text>{`Quantidade: ${i.quantidade} x Valor: ${i.valor} = Total: ${i.quantidade * i.valor}`}</Text>
                        ))
                    }
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isAdicionar}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.')
                        this.setState({isAdicionar: false})
                    }}
                >
                    <View style={styles.container_modal}>
                        <View style={styles.modal}>

                            <Text>Adicione os valores</Text>

                            <View style={styles.view_inputs}>
                                <TextInput keyboardType="numeric" style={styles.text_input} placeholder="Quantidade"
                                           onChangeText={(e) => this.handleInput('quantidade', e)}/>
                                <TextInput keyboardType="numeric" style={styles.text_input} placeholder="Valor"
                                           onChangeText={(e) => this.handleInput('valor', e)}/>
                            </View>

                            <View style={styles.botoes}>
                                <Pressable
                                    style={styles.botao_cancelar}
                                    onPress={() => this.setState({isAdicionar: false})}
                                >
                                    <Text style={styles.texto_botao}>Cancelar</Text>
                                </Pressable>
                                <Pressable
                                    style={styles.botao_confirmar}
                                    onPress={this.onClickConfirmar}
                                >
                                    <Text style={styles.texto_botao}>Confirmar</Text>
                                </Pressable>
                            </View>

                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    criar: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
    },
    titulo: {
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center'
    },
    container_botao: {
        flex: 1,
        marginTop: 10
    },
    container_modal: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    botao_confirmar: {
        backgroundColor: '#21ad10',
        padding: 10,
        borderRadius: 10,
        margin: 5
    },
    botao_cancelar: {
        backgroundColor: '#e50e0e',
        padding: 10,
        borderRadius: 10,
        margin: 5
    },
    texto_botao: {
        color: '#fff'
    },
    botoes: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    text_input: {
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5
    },
    view_inputs: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    }
})

export default Criar
