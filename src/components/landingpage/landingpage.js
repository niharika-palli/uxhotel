import React from 'react';
import axios from 'axios';

import { Hero,Features,Aboutcomp} from './dependencies';

let aboutContent = {
  string_1: "Welcome to our website built on React. This is a Hotel Booking Website consisting of 25 hotels around. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.",
  string_2: "Germany",
  string_3:"Try searching for a city, a specific hotel, or even a landmark!",
  string_4:"All our rooms are air conditioned and Wi-Fi enabled, split into categories of Luxury rooms, Balcony rooms and Suites. Disabled-friendly and interlinked rooms with common door is also available at our facility.",
  string_5:"Consistently High Guest Satisfaction",
  string_6:"One of the top Ranked Hotels in vizag",
  string_7:"ADDING CARE TO YOUR STAY",
};

let heroContent={
  str1:"Find the best answer to the future of people of people and the earth. To realize a sustainable society",
  str2:"Wallow yourselves in the most appetizing meals of the day at any of our restaurants throughout the year. The hotel also features a full-fledged bar and a shared lounge to complete the luxuriousness of your holiday.",
  str3:"What our Customers Say",
  str4:"We take the pleasure of serving variety on your plate from a wide range of Indian, regional and continental cuisines.",
  str5:"Wellness",

};

let featuresContent={
  word1:"Special event, party or meeting?",
  word2:"Beautiful banquets, lively spaces and immaculate services. Make your celebrations memorable with our sought-after banquets and lawns.",
  word3:"Event organizing made convenient as well.Our well-equipped event spaces offer comfortable and functional options for seminars, conferences, new launches and much more.",
  word4:"These halls have Wi-Fi enabled LCD projectors and screens for a complete visual and audio experience in meetings",
  word5:"An air-conditioned hall with an area of 2057 sq. ft. accommodating 250 pax in theatre style and 100 pax in cluster. Ideal place for meetings and get-togethers.",
  word6:"Mini Fridge",
  word7:"Free High-Speed Internet",
  word8:"24/7 Security",
  word9:"Enjoy your stay",
  word10:"An expanse of gorgeous interiors with air conditioning and comfortable king-sized bed.",
  word11:" Complimentary buffet or continental breakfast.",
  word12:"Balcony Rooms These rooms promise a comfortable and peaceful stay with a sit out to enjoy the nature whilst sleeping in our warm king-sized/ twin beds.",
  word13:"please aware",
  word14:"Flat screen TV",
  word15:"Kettle",
  word16:"desk",
  word17:"Wardrobes equipped with safety lockers",
  word18:"Balcony Rooms These rooms promise a comfortable and peaceful stay with a sit out to enjoy the nature whilst sleeping in our warm king-sized/ twin beds.",
};

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about_content: {string_3:""},
      fetched: false
    }
  }

  componentDidMount() {
    console.log('Component did mount!')
    this.getList();
  }

  getList() {
    axios.get("http://localhost:8080/test/about")
      .then(response => {
        console.log(response.data);
         console.log(this.state);
        // this.setState({ fetched: true, contact_content: response.data });
        
        this.setState((state) => {
          // Important: read `state` instead of `this.state` when updating.
          return { fetched: true, about_content: response.data };

        });
        console.log(this.state);
    })
  }

render() {
  return (
    <React.Fragment>
      <Hero content ={heroContent}/>
      <Aboutcomp content = {this.state.about_content} />
      <Features content ={featuresContent}/>

    </React.Fragment>
  );
}
}

export default LandingPage;