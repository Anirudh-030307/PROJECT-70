import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    backgroundColor={'pink'}
                    centerComponent={{
                        text: 'STORY HUB',
                        style: { color: 'black', fontSize: 30 }
                    }}
                />
                <TextInput
                    placeholder="STORY TITLE"
                    onChangeText={(text) => {
                        this.setState({
                            title: text
                        })
                    }}
                    style={styles.title} />
                <TextInput
                    placeholder="Author"
                    onChangeText={(text) => {
                        this.setState({
                            author: text
                        })
                    }}
                    style={styles.author} />
                <TextInput
                    placeholder="WRITE YOUR STORY"
                    onChangeText={(text) => {
                        this.setState({
                            storyText: text
                        })
                    }}
                    style={styles.storyText}
                />

                <TouchableOpacity
                    style={styles.submitButton}
                >
                    <Text style={styles.buttonText}>SUMBIT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        height: 40,
        borderWidth: 2,
        marginTop: 40,
        margin: 10,
        color: 'black',
        padding: 6,

    },
    author: {
        height: 40,
        borderWidth: 2,
        margin: 10,
        padding: 6,
    },
    storyText: {
        height: 250,
        borderWidth: 2,
        margin: 10,
        padding: 6,
    },
    submitButton: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'pink',
        width: 80,
        height: 40, color: 'black',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        color: 'black',
    }
});