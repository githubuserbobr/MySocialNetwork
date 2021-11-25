import dialogsReducer from "./Reducers/dialogs-Reducer";
import sidebarReducer from "./Reducers/sidebar-Reducer";
import profileReducer from "./Reducers/profile-Reducer";

 let store = {
  
  _state: {
   
   
    ProfilePage: {
      inputPost: '',
      PostsData: [
        { id: "1", message: "Hi,how are you?", likeCounts: "13" },
        { id: "2", message: "It's my first post!", likeCounts: "8" },
      ],
      DialogsData: [
        { id: "1", name: "Valera", img: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTeE1nZdrpYj2aa4n3UbyI2um8KVzcGoMyZz2bozHtp-CaSCrm14ZCkzozeWz93" },
        { id: "2", name: "Sanek", img: "https://www.hockeydb.com/ihdb/photos/pavel-datsyuk-2016-34.jpg" },
        { id: "3", name: "Dimych", img: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471214.jpg" },
        { id: "4", name: "Anna", img: "https://64.media.tumblr.com/ab073be42bbdf2e84a7c4e0b31a271b6/6737e8d5f53a1326-f2/s640x960/e6187b4a127a44dfc11b34c2cba1787e0c79a120.jpg" },
      ],
    },
    MessagesPage: {
      inputMessage: '',
      MessagesData: [
        { id: "1", message: "Kogda trenya?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/%D0%A1%D0%B5%D1%80%D1%8B%D0%B9_%D1%86%D0%B2%D0%B5%D1%82-_2014-03-15_18-16.jpg/220px-%D0%A1%D0%B5%D1%80%D1%8B%D0%B9_%D1%86%D0%B2%D0%B5%D1%82-_2014-03-15_18-16.jpg" },
        { id: "2", message: "Pognali hockey smotret", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/%D0%A1%D0%B5%D1%80%D1%8B%D0%B9_%D1%86%D0%B2%D0%B5%D1%82-_2014-03-15_18-16.jpg/220px-%D0%A1%D0%B5%D1%80%D1%8B%D0%B9_%D1%86%D0%B2%D0%B5%D1%82-_2014-03-15_18-16.jpg" },
        { id: "3", message: "Mozhno u tebya lentu vzyat?)))", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/%D0%A1%D0%B5%D1%80%D1%8B%D0%B9_%D1%86%D0%B2%D0%B5%D1%82-_2014-03-15_18-16.jpg/220px-%D0%A1%D0%B5%D1%80%D1%8B%D0%B9_%D1%86%D0%B2%D0%B5%D1%82-_2014-03-15_18-16.jpg" },
      ],
    },
    sidebar: {
      DialogsData: [
        { id: "1", name: "Valera", img: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTeE1nZdrpYj2aa4n3UbyI2um8KVzcGoMyZz2bozHtp-CaSCrm14ZCkzozeWz93" },
        { id: "2", name: "Sanek", img: "https://www.hockeydb.com/ihdb/photos/pavel-datsyuk-2016-34.jpg" },
        { id: "3", message: "Mozhno u tebya lentu vzyat?)))" },
      ],
    },
    dispatch(action) {
      this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
      dialogsReducer(this._state, action)
      sidebarReducer(this._state, action)  
      this._state._callSubscriber(this._state)
      },
      _callSubscriber() {
     
        console.log('State changed')
      },
      getState() {
        return this._state
      },
      subscribe(observer) {   
      
        this._callSubscriber = observer;
      },
  },
  

  }






export default store;
