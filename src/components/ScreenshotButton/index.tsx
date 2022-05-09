import { Trash, Camera } from 'phosphor-react-native';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props {
    screenSchot: string | null;
    onTakeShot: () => void;
    onRemoveShot: () => void;
}

export function ScreenshotButton({screenSchot,onTakeShot,onRemoveShot}:Props) {
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={screenSchot ? onRemoveShot : onTakeShot}
    >
        {
            screenSchot
            ?
            <View>
                <Image 
                style={styles.image}
                source={{uri:screenSchot}}
                />
                <Trash 
                    size={22}
                    color={theme.colors.text_secondary}
                    weight="fill"
                    style={styles.removeIcon}
                />
            </View>
            :
            <Camera 
                size={24}
                color={theme.colors.text_secondary}
                weight="bold"
            />
        }
    </TouchableOpacity>
  );
}