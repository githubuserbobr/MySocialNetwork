import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import Friends from './Components/Friends/Friends';



const App = ({state}) => {
  debugger
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
       <Navbar friendsName={state.sidebar.sideBarData} />
       <div className='app-wrapper-content'>
   <Route path='/profile'  render={() => <Profile postsData={state.profilePage.postsData} inputPost={state.profilePage.inputPost}  />} /> 
          <Route path='/dialogs' render={() => <DialogsContainer dispatch={state.dispatch}  messages={state.messagesPage.messagesData} dialogs={state.messagesPage.dialogsData} />}  />
          <Route path='/news' render={() => <News/>} />
           <Route path='/music' render={() => <Music />} />
         <Route path='/settings' render={() => <Settings />} />
         <Route path='/friends' render={() => <Friends Sidebar={state.sidebar} />} />  
          </div>  
    </div>
    </BrowserRouter>
    )
}
export default App;


