import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

function Home () {

    return (
        <SafeAreaView style={{flex: 1}}>

            <View style={styles.headerView}>
                <Image 
                source={require('../../assets/logo.png')} 
                style={styles.logo}
                />
            </View>

            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor={'#808080'}
                        
                    />
                    <TouchableOpacity style={styles.buttom}>
                        <Feather name="plus-circle" size={15} color="white" />
                    </TouchableOpacity> 
                </View>

                <View style={styles.containerLabel}>
                    <View style={styles.viewLabel}>
                        <Text style={[styles.label, {color: '#4EA8DE'}]}>Criadas</Text>
                        <Text style={styles.valueLabel}>{0}</Text>
                    </View>
                    <View style={styles.viewLabel}>
                        <Text style={[styles.label, {color: '#8284FA'}]}>Concluídas</Text>
                        <Text style={styles.valueLabel}>{0}</Text>
                    </View>
                </View>
                <View style={styles.containerList}>
                    <View style={styles.emptyContainer}>
                        <Ionicons name="md-clipboard-outline" size={65} color="#333333" style={styles.emptyIcon}/>
                        <Text style={[styles.emptyLabel, {fontWeight: '800'}]}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={styles.emptyLabel}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;