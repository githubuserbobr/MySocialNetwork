import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import Friends from './Components/Friends/Friends';



const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar friendsName={props.sidebar} />
       <div className='app-wraper-content'>
   <Route path='/profile'  render={() => <Profile  posts={props.postsData}  dispatch={props.dispatch} inputPost={props.inputPost} />} /> 
          <Route path='/dialogs' render={() => <Dialogs 
          dialogs={props.dialogsData} 
          messages={props.messages} 
          addMessage={props.addMessage}
          handleInputMessage={props.handleInputMessage}
          inputMessage={props.inputMessage} />}  />
          <Route path='/news'render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/friends' render={() => <Friends Sidebar={props.sidebar} />} />
        </div>
        
    </div>
    </BrowserRouter>
    )
}
export default App;


