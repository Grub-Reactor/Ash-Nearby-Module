import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Carousel from '../../client/src/components/carousel.jsx'

//import components you want to test


describe('It should behave the way I expect!', function() {
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) === true) {
      throw new Error('10 should be even!');
    }
  });
});
