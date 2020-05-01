import React from 'react';

import { View, Button, StyleSheet } from 'react-native';

import DailySchedule from '../components/DailySchedule';

const HomeScreen = ({ navigation }) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    onPress={() => navigation.navigate('Download')} title='Download' color="white" />
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <DailySchedule></DailySchedule>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default HomeScreen;
