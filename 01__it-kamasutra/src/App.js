import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';


const App = (props) => {

	return (
		<div className="App">
			<div className="app-wrapper">
				{/* <Header /> */}
				<div className="nav">
					<NavBar />
				</div>
				<div className="app-wrapper__content">
					<Route
						path="/dialogs"
						render={() => <Dialogs
							messages={props.state.DialogsPage.allMessage}
							companions={props.state.DialogsPage.allMessage_Companion}
							createMessage={props.createMessage} />}
					/>
					<Route
						path={"/profile"}
						render={() => <Profile
							posts={props.state.ProfilePage.allPost_User}
							userData={props.state.userData}
							createPost={props.createPost} />}
					/>
					<Route
						path={"/news"}
						render={() => <News allPosts={props.state.NewsPage.allPost_News} />}
					/>
					<Route
						path={"/ "}
						render={() => <News />}
					/>
					<Route
						path={"/music"}
						render={() => <Music allTreak={props.state.MusicPage.allTreak} />}
					/>
					<Route
						path={"/settings"}
						render={() => <Setting userData={props.state.userData} />}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;