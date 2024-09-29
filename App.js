import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ProgressBarAndroid, Button } from 'react-native';
import { Pedometer } from 'expo-sensors';

export default function App() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [stepCount, setStepCount] = useState(0);
  const [stepGoal, setStepGoal] = useState(10000); // Daily goal of 10,000 steps

  useEffect(() => {
    // Check if the pedometer is available
    Pedometer.isAvailableAsync().then(
      (result) => setIsPedometerAvailable(String(result)),
      (error) => setIsPedometerAvailable('Could not get pedometer availability: ' + error)
    );

    // Subscribe to step count updates
    const subscription = Pedometer.watchStepCount((result) => {
      setStepCount(result.steps);
    });

    // Cleanup the subscription when component unmounts
    return () => subscription && subscription.remove();
  }, []);

  // Get steps for today (since midnight)
  const getStepsForToday = async () => {
    const end = new Date();
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    try {
      const result = await Pedometer.getStepCountAsync(start, end);
      setStepCount(result.steps);
    } catch (error) {
      console.log('Error fetching steps:', error);
    }
  };

  useEffect(() => {
    getStepsForToday();
  }, []);

  const progress = stepCount / stepGoal; // Calculate progress towards the goal

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fitness Tracker</Text>

      <Text style={styles.infoText}>Pedometer available: {isPedometerAvailable}</Text>

      <View style={styles.progressContainer}>
        <Text style={styles.stepsText}>Steps taken today: {stepCount}</Text>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={progress}
          color="#4CAF50"
        />
        <Text style={styles.stepsText}>
          {stepCount} / {stepGoal} steps
        </Text>
      </View>

      <Button title="Refresh Step Count" onPress={getStepsForToday} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  progressContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  stepsText: {
    fontSize: 20,
    marginBottom: 10,
  },
});
