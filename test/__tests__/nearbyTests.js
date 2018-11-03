import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from '../../src/components/carousel.jsx'

//import components you want to test



describe("It should exist", function() {
  it("should have a div", function() {
    const mounted = mount(<Card cards = {props}></Card>)
    console.log(mounted);
  })
})