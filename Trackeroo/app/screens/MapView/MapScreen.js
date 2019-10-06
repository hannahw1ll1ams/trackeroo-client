import styles from './SharedStyles';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
// import Map from '../../components/Map';
// import StopWatch from '../../components/StopWatch';
import AlternativeMap from '../../components/AlternativeMap'
import AlternativeStopWatch from '../../components/AlternativeStopWatch';

class MapScreen extends Component {

  state = {
    isRunning: false,
    endTime: '',
    peopleRunning: ['John'],
    joiningRun: false
  }

  updateActivityStatus = (boolean, endTime) => {
    this.setState({ isRunning: boolean, endTime }, () => {
      console.log(this.state.isRunning, '<--updatedState')
      console.log(this.state.endTime, '<--endTime')
    })
  }

  toggleStopWatch = () => {
    this.setState({ joiningRun: !this.state.joiningRun })
  }

  render() {
    const { isRunning, peopleRunning } = this.state;
    return (
      <View style={styles.wholeContainer}>
        <AlternativeMap isRunning={isRunning} />

        {peopleRunning.length === 0 && <Text style={styles.text}>Start a run?</Text>}
        {peopleRunning.length === 0 && <Button title={!this.state.joiningRun ? 'START' : 'HIDE'} onPress={this.toggleStopWatch} />}


        {peopleRunning.length > 0 && <Text style={styles.text}>Currently Running:</Text>}
        {peopleRunning.length > 0 &&
          peopleRunning.map(person => {
            return <Text key={person}>{person}</Text>
          })
        }
        {peopleRunning.length > 0 && <Text style={styles.statsBox}>JOHN's LIVE DISTANCE, TIME, SPEED</Text>}

        {peopleRunning.length > 0 &&
          <Button title={!this.state.joiningRun ? 'JOIN' : 'HIDE'} onPress={this.toggleStopWatch} />}

        {this.state.joiningRun === true && <AlternativeStopWatch style={styles.stopwatch} updateActivityStatus={this.updateActivityStatus} />}

      </View>
    );
  }
}

export default MapScreen;
