import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles, primaryColor, secondaryColor } from "./styles";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import { Task } from "../../components/Task";
import React from "react";


type TaskType = {
    description: string;
    completed: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [input, setInput] = useState("");

    function handleAddTask() {
        if (input.length > 0) {
            console.log('Task adicionada.');
            setTasks([...tasks, {description: input, completed: false}]);
            setInput("");
        }
    }
    
    function handleRemoveTask(index: number) {
        console.log('Task removida.');
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function handleCompleteTask(index: number) {
        console.log('Task concluída.')
        setTasks(tasks.map((task, i) => 
            i === index ? {...task, completed: !task.completed} : task
        ));
    }

    const created = tasks.length
    const completed = tasks.filter(task => task.completed).length
    
    return(
        <View style={styles.container}>
            <View style={styles.icon}>
                <FontAwesome6
                    name="list-check"
                    size={34}
                    color = {primaryColor}
                    style={{
                        marginRight: 10
                    }} />
                <Text style={styles.to}>to</Text>
                <Text style={styles.do}>do</Text>
            </View>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Adicione uma tarefa"
                    placeholderTextColor='white'
                    value={input}
                    onChangeText={setInput}
                />
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={handleAddTask}
                >
                    <Ionicons 
                        name="add-circle-outline" 
                        size={30} 
                        color="white"
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.statistics}>
                <Text style={styles.created}>
                    Criadas: {created}
                </Text>
                <Text style={styles.completed}>
                    Concluídas: {completed}
                </Text>
            </View>
            
            <FlatList
                style={styles.flatList}
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <Task
                        description={item.description}
                        onRemove={() => handleRemoveTask(index)}
                        onComplete={() => handleCompleteTask(index)}
                        completed={item.completed}
                    />
                )}
            />

            {/* <FlatList
                data={tasks.filter(task => task.completed)}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <TaskCompleted
                        description={item.description}
                        onRemove={() => handleRemoveTask(index)}
                        onComplete={() => handleCompleteTask(index)}
                    />
                )}
            /> */}
        </View>
    )
}