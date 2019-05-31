import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getSecretWord } from './actions'
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import Input from './Input'
import './App.css';

export class UnconnectedApp extends Component {

  /**
   * @method componentDidMount
   * @memberof App
   * @returns {undefined}
   */
  componentDidMount () {
    // get the secret word
    this.props.getSecretWord()
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        {this.props.secretWord}
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    )
  }
}

const mapStateToProps = ({ success, secretWord, guessedWords }) => {
  return { success, secretWord, guessedWords }
}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
