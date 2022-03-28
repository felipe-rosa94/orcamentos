import React from 'react'
import {Button, StyleSheet, View} from 'react-native'

class Home extends React.Component {
    render() {
        return (
            <View style={styles.home}>
                <View style={styles.container_botao}>
                    <Button title="Criar orçamento teste 1" onPress={() => this.props.navigation.navigate('Criar')}/>
                </View>
                <View style={styles.container_botao}>
                    <Button title="Ver lista de orçamentos" onPress={() => this.props.navigation.navigate('Lista')}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
    },
    container_botao: {
        marginTop: 10
    }
})

export default Home
