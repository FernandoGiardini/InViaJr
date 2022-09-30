import React from 'react';
import './App.css';
import { SafeAreaView} from 'react-native-web';
import { Home } from './routes/home';


function App() {

  

  return (
    <SafeAreaView className="App">
      <Home/>
    </SafeAreaView>
  );
}

export default App;
