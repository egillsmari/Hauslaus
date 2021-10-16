import React, {useState}  from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Animated, Text, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';

import easyBackgroundImage from '../../resources/easy_card.png'
import normalBackgroundImage from '../../resources/hard_card.png'
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const CardContainer = ({
  shuffleRules,
  rule,
  goHome,
  player,
}

) => {
  if (rule === 0){
    shuffleRules()
  }
  const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

  const [value] = useState(new Animated.Value(0))

    useEffect(()=>{
        Animated.timing(value, {
            toValue: 1,
            duration: 100,
        }).start()
    }, [1])

    const opacityBackground = value.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
    })

    if (rule.catagory === 'normal'){
      return (
          <SafeAreaView style={{flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: opacityBackground}}>
          <ImageBackground source={easyBackgroundImage} resizeMode="cover" style={styles.image}>
          <TouchableOpacity style={styles.back}
        onPress={() => goHome()}
        >
        <Ionicons name="arrow-back" size={32} color="#ec9d00" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButtonContainer}
        onPress={() => shuffleRules()}
        >
          <AnimatedButton style={styles.playerPop}>
          <Text style={styles.nextButton}>Ný regla</Text>
          </AnimatedButton>
        </TouchableOpacity>
        
        
          <View style={styles.playerContainer}>
            <View style={styles.playerInner}><Text style={styles.playerText}> {player}</Text></View>
          <Text style={styles.title}>{rule.title}</Text>
        </View>
        </ImageBackground>
        </SafeAreaView>
      )
    }
    if (rule.catagory === 'normal'){
      return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground source={normalBackgroundImage} resizeMode="cover" style={styles.image}>
        <TouchableOpacity style={styles.back}
      onPress={() => goHome()}
      >
        <View style={styles.fastSips}></View>
      <Ionicons name="arrow-back" size={32} color="#00ff11" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButtonContainer}
      onPress={() => shuffleRules()}
      >
        <View style={styles.playerPopHard}>
        <Text style={styles.nextButton}>Ný regla</Text>
        </View>
      </TouchableOpacity>
      
      
        <View style={styles.playerContainerHard}>
          <View style={styles.playerInner}><Text style={styles.playerTextHard}> {player}</Text></View>
        <Text style={styles.titleHard}>{rule.title}</Text>
      </View>
      </ImageBackground>
      </SafeAreaView>
    )
    }
    else{
    return (
      <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ImageBackground source={easyBackgroundImage} resizeMode="cover" style={styles.image}>
      <TouchableOpacity style={styles.back}
    onPress={() => goHome()}
    >
    <Ionicons name="arrow-back" size={32} color="#ec9d00" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.nextButtonContainer}
        onPress={() => shuffleRules()}
        >
          <View style={styles.playerPop}>
          <Text style={styles.nextButton}>Ný regla</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.playerContainer}>
          <Text style={styles.title}>{rule.title}</Text>
        </View>
    </ImageBackground>
    </SafeAreaView>
    )
  }
  };

export default CardContainer;
