import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ImageBackground } from 'react-native';

const CustomButton = ({ title, onPress, buttonStyle }) => (
  <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const Scoreboard = ({
  teamA,
  teamB,
  scoreA,
  scoreB,
  incrementScoreA,
  decrementScoreA,
  incrementScoreB,
  decrementScoreB,
  resetScores,
}) => {
  const winnerTextOpacity = new Animated.Value(0);

  if (scoreA >= 10 || scoreB >= 10) {
    Animated.timing(winnerTextOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <ImageBackground 
      source={require('../components/Basket.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.scoreboardContainer}>
        <View style={[styles.teamContainer, styles.leftTeam]}>
          <Text style={styles.teamName}>{teamA}</Text>
          <Text style={styles.score}>{scoreA}</Text>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="+"
              onPress={incrementScoreA}
              buttonStyle={styles.buttonA}
            />
            <CustomButton
              title="-"
              onPress={decrementScoreA}
              buttonStyle={styles.buttonA}
            />
          </View>
        </View>

        <View style={[styles.teamContainer, styles.rightTeam]}>
          <Text style={styles.teamName}>{teamB}</Text>
          <Text style={styles.score}>{scoreB}</Text>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="+"
              onPress={incrementScoreB}
              buttonStyle={styles.buttonB}
            />
            <CustomButton
              title="-"
              onPress={decrementScoreB}
              buttonStyle={styles.buttonB}
            />
          </View>
        </View>
      </View>

      <Animated.View style={[styles.winnerSection, { opacity: winnerTextOpacity }]}>
        {scoreA >= 50 && <Text style={styles.winnerText}>{teamA} Wins!</Text>}
        {scoreB >= 50 && <Text style={styles.winnerText}>{teamB} Wins!</Text>}
      </Animated.View>

      <CustomButton 
        title="Reset" 
        onPress={resetScores} 
        buttonStyle={styles.buttonReset} 
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scoreboardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    width: '100%',
  },
  buttonReset: {
    backgroundColor: '#ffc107',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    marginTop: 20,
  },
  teamContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 25,
    borderRadius: 15,
    width: '40%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    marginVertical: 15,
  },
  teamName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2a3d6d',
    marginBottom: 10,
  },
  score: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#4e5d6c',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginHorizontal: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonA: {
    backgroundColor: '#28a745',
  },
  buttonB: {
    backgroundColor: '#dc3545',
  },
  leftTeam: {
    alignSelf: 'flex-start',
  },
  rightTeam: {
    alignSelf: 'flex-end',
  },
  winnerSection: {
    alignItems: 'center',
    marginVertical: 20,
    paddingTop: 10,
  },
  winnerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#38b000',
    textTransform: 'uppercase',
  },
});

export default Scoreboard;
