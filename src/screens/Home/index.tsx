import { Alert, FlatList, Image, Keyboard, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import Task from '../../components/task';

type Task = {
    value: string
    done: boolean
}

function Home () {

    const [tasks, setTasks] = useState<Task[]>([{
        value: 'Finalizar o desafio 01 da rocketseat com sucesso e aprender cada vez mais',
        done: false
    }])
    const [taskName, setTaskName] = useState<string>('')

    function changeDone(item: Task) {
        tasks.map(task => {
            if(task.value == item.value) {
                setTasks(prevState => prevState.filter(obj => obj.value != task.value))
                setTasks((prevState) => [...prevState, {value: item.value, done:!item.done}])
            }
        })
    }

    function addTask (){
        if(taskName == ''){
            return Alert.alert('Preencha o campo com o nome da nova task')
        }
        // não funcionando 
        if(tasks.some(item => item.value === taskName)){
            console.log('repetiu')
            return Alert.alert("Já existe está tarefa")
        }
        setTasks(prevState => [...prevState, {value: taskName, done: false}])
        setTaskName('')
        Keyboard.dismiss()
    }

    function removeTask (task: Task){
        Alert.alert('Remover', `Deseja remover "${task.value}" da lista?`, [
            {
                text: 'Sim',
                onPress: () => {setTasks(prevState => prevState.filter(item => item.value != task.value))} // fazer função
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function counterDone () {
        var count = 0
        tasks.map(obj => {
            obj.done == true ? count = count + 1 : 0
        })
        return <Text style={styles.valueLabel}>{count}</Text>
    }

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
                        style={[styles.input,
                            taskName != '' && {borderColor: '#5E60CE'}
                        ]}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor={'#808080'}
                        value={taskName}
                        onChangeText={setTaskName}
                        
                    />
                    <TouchableOpacity style={[styles.buttom, taskName == '' && {backgroundColor: '#808080'}]} onPress={() => addTask()}>
                        <Feather name="plus-circle" size={15} color="white" />
                    </TouchableOpacity> 
                </View>

                <View style={styles.containerLabel}>
                    <View style={styles.viewLabel}>
                        <Text style={[styles.label, {color: '#4EA8DE'}]}>Criadas</Text>
                        <Text style={styles.valueLabel}>{tasks.length}</Text>
                    </View>
                    <View style={styles.viewLabel}>
                        <Text style={[styles.label, {color: '#8284FA'}]}>Concluídas</Text>
                        {counterDone()}
                    </View>
                </View>
                <View style={styles.containerList}>
                    <FlatList
                        data={tasks}
                        renderItem={({item}) => (
                            <Task 
                                task={item}
                                changeDone={() => changeDone(item)}
                                removeTask={() => removeTask(item)}
                            />
                        )}
                        ListEmptyComponent={() => (
                            <View style={styles.emptyContainer}>
                                <Ionicons name="md-clipboard-outline" size={65} color="#333333" style={styles.emptyIcon}/>
                                <Text style={[styles.emptyLabel, {fontWeight: '800'}]}>Você ainda não tem tarefas cadastradas</Text>
                                <Text style={styles.emptyLabel}>Crie tarefas e organize seus itens a fazer</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;