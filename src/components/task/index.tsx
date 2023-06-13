import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

type Task = {
    task: {
        value: string,
        done: boolean
    },
    changeDone: () => void,
    removeTask: () => void
}

export default function Task ( {task, changeDone, removeTask} : Task) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => changeDone()}>
                {task.done 
                    ? <Ionicons name="checkmark-circle-sharp" size={24} color="#5E60CE" />
                    : <Entypo name="circle" size={20} color="#4EA8DE" />
                }
            </TouchableOpacity>
            <Text 
            style={[
                styles.label, 
                task.done && {textDecorationLine: 'line-through', textDecorationStyle: 'solid'}
            ]}>
                    {task.value}
            </Text>
            <TouchableOpacity onPress={() => removeTask()}>
                <FontAwesome name="trash-o" size={20} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}