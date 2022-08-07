import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const imageProfile =
  'https://media-exp1.licdn.com/dms/image/C4D03AQEnqTpp7pSPzg/profile-displayphoto-shrink_200_200/0/1651165007341?e=1665014400&v=beta&t=LQwGaEBp3AssHBI6busnFRjj5GtHuVqJlgOd9iqBvxM';
const colorFontGithub = '#C9D1D9';
const urlToGithub = 'https://github.com/ThiagoSeiji96';

const App = () => {
  const handlePressGoToGithub = async () => {
    console.log('verificando link');
    const res = await Linking.canOpenURL(urlToGithub);
    if (res) {
      console.log('link aprovado');
      console.log('abrindo link...');
      await Linking.openURL(urlToGithub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        backgroundColor={colorGithub}
        barStyle="light-content"></StatusBar>
      <View style={style.content}>
        <Image
          style={style.avatar}
          source={{uri: imageProfile}}
          accessibilityLabel="Thiago com parede de fundo amarela"></Image>
        <Text
          style={[style.defaulText, style.name]}
          accessibilityLabel="Nome: Thiago Rozner">
          Thiago Rozner
        </Text>
        <Text
          accessibilityLabel="Descrição: Desenvolvedor Front-end | Web Designer na JOBIN"
          style={[style.defaulText, style.sub]}>
          Desenvolvedor Front-end | Web Designer na JOBIN
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.textButton, style.defaulText]}>
              Open in GitHub
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1, //expandir para tela inteira
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaulText: {
    color: 'white',
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
    color: colorFontGithub,
  },
  sub: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 14,
    color: colorFontGithub,
  },
  button: {
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
