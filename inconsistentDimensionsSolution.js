```javascript
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, Text, LayoutAnimation } from 'react-native';

const { width, height } = Dimensions.get('window');

const MyComponent = () => {
  const [dimensions, setDimensions] = useState({ width, height });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setDimensions({ width: window.width, height: window.height });
    });
    return () => subscription?.remove();
  }, []);

  return (
    <View style={[styles.container, { width: dimensions.width, height: dimensions.height }]}>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyComponent;
```