import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
  interpolate,
  Easing
} from "react-native-reanimated";
import styles from './styles';

const config = {
  duration: 500,
  easing: Easing.bezier(0.5, 0.01, 0, 1),
};

const Bubble = ({ delay, pos }) => {
  const bubble = useSharedValue(0);

  const ringStyle = useAnimatedStyle(() => {
    return {
      left: pos,
      opacity: 1 - bubble.value * 0.1,
      top: 600 - bubble.value * 100,
      height: interpolate(bubble.value, [0, 5], [0, 12]),
    };
  });
  useEffect(() => {
    bubble.value = withDelay(
      delay,
      withRepeat(
        withTiming(11, {
          duration: 6500,
        }),
        -1,
        false
      )
    );
  }, []);
  return <Animated.View style={[styles.bubble, ringStyle]} />;
};

export default Bubble;