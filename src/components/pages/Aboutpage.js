import React, { Component } from 'react';

import AboutIntro from '../about/AboutIntro';
import ProfileBox from '../about/ProfileBox';
import SkillsBox from '../about/SkillsBox';

class Aboutpage extends Component {
  render() {
    return (
      <div>
        <AboutIntro/>
        <ProfileBox/>
        <SkillsBox/>
      </div>
    );
  }
}

export default Aboutpage;
