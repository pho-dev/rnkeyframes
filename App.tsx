import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { styles } from './styles';
import { Message } from './src/components/Message';
import { useState } from 'react';

export default function App() {
  const [show, setShow ] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Message />
      <Button title={show ? "Fechar Mensagem" : "Exbir Mensagem"} />
    </View>
  );
}

