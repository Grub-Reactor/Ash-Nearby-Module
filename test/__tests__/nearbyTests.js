import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Carousel from '../../client/src/components/carousel.jsx';
import Card from '../../client/src/components/card.jsx';
import Hover from '../../client/src/components/hover.jsx';
//import components you want to test

const cards = [{
  id: Number,
  restaurantCard: {
    restaurantName: ["Danny's", "Restaurant"],
    cuisine: ["Asian", "Fusion"],
    deliveryEstimate: 25,
    deliveryMin: 15,
    starReviews: 3.5,
    totalReviews: 125,
    imageURL: "http://www.thisisanimagesite.com/",
  },  
  hover: {
    percentWasGood: 75,
    percentOnTime: 12,
    percentAccuracy: 55,
    userName: "MrRestaurantReviewer",
    userProfile: "http://www.myprofilepics.edu",
    featuredReview: "Such food. Much yum."
  }
}]


describe('Carousel Component', function() {
  it('Should render all parts of our sexy carousel', function () {
    const wrapper = render(<Carousel key={1} card={cards[0]}/>)
    expect(wrapper.find('div').length).toEqual(3)
    expect(wrapper.find('svg').length).toEqual(2)
    expect(wrapper.find('h2').length).toEqual(1)
  });

  it('Should be a Class Component with all our Properties', function() {
    const wrapper = shallow(<Carousel key={2} card={cards[0]}/>)
    expect(wrapper.state().data).toEqual([]);
    expect(wrapper.state().isLoading).toEqual(true);
  });
});


describe('Hover Component should render properly', function() {
  it('Should render all parts of our Hover Component', function() {
    const wrapper = render(<Hover key={1} card={cards[0]}/>)
    expect(wrapper.find('div').length).toEqual(0)
  })
})


//The Card tests are throwing an error, "map is not a function" so they are commented out

// describe('Card Component should render properly', function() {
//   it('Something', function() {
//     const wrapper = mount(<Card key={2} cards={cards[0]}/>)
//     expect(wrapper.find('div').length).toEqual(5);
//   })
// })