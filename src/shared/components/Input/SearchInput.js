import React from "react";
import { TextInput } from "react-native-gesture-handler";

import styles from './styles';

export const SearchInput = (props) => {
    const { onEndEditing, value, onChangeText } = props
    return (
        <TextInput
            style={styles.inputStyle}
            placeholder="Search what your tongue demanding..."
            onEndEditing={onEndEditing}
            value={value}
            onChangeText={onChangeText}
        />
    )
}