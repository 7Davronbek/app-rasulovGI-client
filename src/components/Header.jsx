import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);


const Header = () => {
  return (
    <div className='Header'>
      <div className="container">
        <div className="row">
          <div className="col-12">

            <AutoplaySlider
              play={true}
              animation="foldOutAnimation"
              cssModule={[CoreStyles, AnimationStyles]}
              cancelOnInteraction={false} // should stop playing on user interaction
              interval={6000}>
              <div data-src="/img/header.png" />
              <div data-src="/img/header.png" />
              <div data-src="/img/header.png" />
            </AutoplaySlider>

          </div>
        </div>
      </div>
    </div >
  )
}

export default Header