import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import Friends from './Components/Friends/Friends';
import DialogsContainer from './Components/Dialogs/DialogsContainer';


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/friends' render={() => <Friends />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;


