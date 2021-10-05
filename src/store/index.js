import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headContent: {
      logo: '../assets/logo.png',
      nav: ['Home', 'Location', 'Blog', 'About', 'Contact'],
      btn: ['Booking now', 'Explore more'],
      contentText: ['Railtrips To Here, There And Everywhere!', 'We all wish to start our year the best way possible and also according to a common belief if you have a great start to your.']
    },
    popularContent: {
      contentText: {
        title: 'Popular Location',
        text: `'For every one of us, travel came first.We’ve spent years living as nomads, pioneers, and voyagers— from island hopping in the`
      },
      Card: [{
        turkey: {
          img: '../assets/imgTurkey.png',
          title: 'Istanbul, Turkey',
          text: 'Istanbul is a major city in Turkey that straddles Europe.'
        },
        malaysia: {
          img: '../assets/imgTurkey.png',
          title: 'Kuala Lumpur, malaysia',
          text: 'A 272-step long trek leads you to this century.'
        },
        korea: {
          img: '../assets/imgTurkey.png',
          title: 'Seoul, South Korea',
          text: 'South Korea officially the Republic of Korea is a country in East Asia.'

        }
      }]
    },
    sliderContent: {
      contentText: {
        title: 'Special Offers',
        text: 'With the New Year comes a refreshing sense of wanderlust, a longing in our souls to escape to warmer climates, ',
      },
      sliderCard: {
        newYork: {
          img: '../assets/newYork.png',
          title: 'Statue of Liberty.',
          name: 'New York',
          grade: '4.8',
          term: '4 Day 5 Nights',
          price: '$450/person'
        },
        china: {
          img: '../assets/china.png',
          title: 'The Great Wall',
          name: 'China',
          grade: '4.9',
          term: '7 Day 8 Nights',
          price: '$850/person'
        },
        iran: {
          img: '../assets/iran.png',
          title: 'Dizin',
          name: 'Iran',
          grade: '4.8',
          term: '5 Day 6 Nights',
          price: '$550/person'
        },
        bangladeshork: {
          img: '../assets/bangladesh.png',
          title: 'Sajek Valley',
          name: 'Bangladesh',
          grade: '4.7',
          term: '3 Day 4 Nights',
          price: '$400/person'
        },
        japan: {
          img: '../assets/japan.png',
          title: 'Osaka Castle',
          name: 'Japan',
          grade: '4.7',
          term: '4 Day 5 Nights',
          price: '$700/person'
        }

      }
    },
    newsContent: {
      contentText: {
        title: 'Osaka Castle',
        context: 'Welcome to Community Conversations, a new interview series featuring Intrepid travellers, creatives and activists in our community.'
      },
      newsCard: {
        nationalPark: {
          img: '../assets/nationalPark.png',
          title: 'Banff National Park',
          text: "Banff National Park lies in the heart of the majestic Rocky Mountains in the province of Alberta, and showcases some of Canada's most beautiful scenery. Turquoise-colored lakes, snow-capped peaks, and glaciers are all easily accessible"
        },
        hiroshimaPeace: {
          img: '../assets/hiroshimajapan.png',
          title: 'The Hiroshima Peace!',
          text: 'It was formally opened to the public in August that year.',
        },
        faithfulPrayers: {
          img: '../assets/india-top.png',
          title: 'The faithful prayers!',
          text: 'A major pilgrimage center for Hindus, the holy city.',
        },
        colourFulWaters: {
          img: '../assets/valley.png',
          title: 'ColourFul waters!',
          text: 'Forest-driven water and energy cycles are poorly.'
        },
      }
    },
    footerContent: {
      contactBlock: {
        logo: '../assets/logo.png',
        text: 'Contact us',
        email: '@shovasatkhira88.com',
        icon: ['../assets/facebookIcon.png', '../assets/instaIcon.png', '../assets/twittIcon.png', '../assets/googleIcon.png']
      },
      serviceBlock: ['Services', 'About', 'Our story', 'Benefits', 'Branding',],
      legalBlock: ['Legal', 'Terms & Conditions', 'Privecy Policy', 'Terms of use'],
    },
  },
  mutations: {
    SET_NAME: (state, payload) => {
      state.name = payload;
    },
  },
  getters: {
    HEAD: state => {
      return state.headContent;
    },
    POPULAR: state => {
      return state.popularContent;
    },
    SLIDER: state => {
      return state.sliderContent;
    },
    NEWS: state => {
      return state.newsContent;
    },
    FOOTER: state => {
      return state.footerContent
    },
  },
  actions: {
  },
  modules: {
  }
})
