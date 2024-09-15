import { Text, View, TouchableOpacity } from "react-native"
import { styles } from "./style"
import { primaryColor } from "../../screens/Home/styles";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from "react";

type Props = {
    description: string,
    onRemove: () => void,
    onComplete: () => void,
    completed: boolean
}

export function Task({description, onRemove, onComplete, completed}: Props) {
    return(
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={onComplete}
                >
                    <MaterialCommunityIcons 
                        name= {completed ? "circle-slice-8" : "circle-outline"}
                        size={24}
                        color={primaryColor}
                    />
                    
                </TouchableOpacity>

                <Text style={
                    [styles.description,
                    completed && {textDecorationLine: 'line-through'}
                ]}
                >
                    {description}
                </Text>

                <TouchableOpacity 
                    style={styles.removeButton}
                    onPress={onRemove}
                >
                    <FontAwesome5 
                        name="trash"
                        size={20} 
                        color="white" 
                    />
                </TouchableOpacity>
            </View>
    )
    
}

// export function TaskCompleted({description, onRemove, onComplete}: Props) {
//     return(
//             <View style={styles.container}>
//                 <TouchableOpacity
//                     onPress={onComplete}
//                 >
//                     <MaterialCommunityIcons 
//                         name="circle-slice-8" 
//                         size={24} 
//                         color={primaryColor} 
//                     />
//                 </TouchableOpacity>

//                 <Text 
//                     style={
//                         [styles.description, 
//                         {textDecorationLine:"line-through"}]
//                     }
//                 >
//                     {description}
//                 </Text>

//                 <TouchableOpacity 
//                     style={styles.removeButton}
//                     onPress={onRemove}
//                 >
//                     <FontAwesome5 
//                         name="trash" 
//                         size={20} 
//                         color="white" 
//                     />
//                 </TouchableOpacity>
//             </View>
//     )
    
// }



