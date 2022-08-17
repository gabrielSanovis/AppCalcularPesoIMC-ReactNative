import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import ResultIMC from './ResultIMC/index';
import styles from './style'

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc() {
        if(weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc(`Seu IMC é igual: `)
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e a altura")
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setHeight}
                value={height}
                placeholder='Ex. 1.85'
                keyboardType='numeric'
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setWeight}
                value={weight}
                placeholder='Ex. 85.3'
                keyboardType='numeric'
                />
                <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() => {
                    validationImc()
                }}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
                
            </View>
            <ResultIMC messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}