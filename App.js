// App.js
import { StyleSheet, View, Text } from 'react-native';
import MyNewsCard from './Components/MyNewsCard';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'orange', fontSize: 35, fontWeight: '700', marginTop: 5, paddingLeft: 4 }}>
        Tanveer News App
      </Text>
      <View style={styles.allnewscontainer}>
        <MyNewsCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#282828',
  },
  allnewscontainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default App;
