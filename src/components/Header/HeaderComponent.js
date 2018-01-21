import React, { Component } from 'react';
import './Header.css';
import logo from './Clock.svg';
import image from './Cat.jpeg';
import mem from './Mem.jpg';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
    }
  }

  render() {
    return (
      <div className='button-container'>
      <button className='button-react' onClick={() => this.setState({clicked: 1})}>
        Выбрать мемчанского
      </button>
      <span> </span>
      <button className='button-react' onClick={() => this.setState({clicked: 2})}>
        Посмотреть статистику
      </button>
      </div>
    )
  }
};

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <header>
        <div className='left-header'>
          <img className='side-logo' src={image} />
        </div>
        <div className='right-header'>
          <div className='article'>
            <span>Memes Time</span>
            <img className='main-logo' src={logo} />
          </div>
          <img className='mem-logo' src={mem} />
        <Buttons />
        </div>
      </header>
    )
  }
}
