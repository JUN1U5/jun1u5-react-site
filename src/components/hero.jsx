import React, { Component } from 'react'
import HeroImg from '../img/B_illustrated_purple.png';

export default class Hero extends Component {
  render() {
    return (
      <div>
        <section className="hero-section" data-section="hero">
              <div className="title-wrapper">
                <h2 className="label-h2"> Experience Design </h2>
                <h1 className="main-h1">Brandon Jernigan</h1>
              </div>
              <div className="hero-content">
                <img className="hero-image" src={HeroImg} />
              </div>
        </section>
      </div>
    )
  }
}
