import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ChallengesPage from "./pages/ChallengesPage/ChallengesPage";
import SingleChallengePage from "./pages/SingleChallengePage/SingleChallengePage";

import CreationsPage from "./pages/CreationsPage/CreationsPage";
import SingleCreationPage from "./pages/SingleCreationPage/SingleCreationPage";

import ProfilePage from "./pages/ProfilePage/ProfilePage";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
        {/* ROOT ROUTE */}
          <Route path="/" element={<ChallengesPage />}></Route>

        {/* CHALLENGES ROUTES */}
          <Route path="/challenges" element={<ChallengesPage />}></Route> {/* list of all challenges */}
          <Route path="/challenges/:challengeId" element={<SingleChallengePage />}></Route> {/* single challenge */}
          <Route path="/challenges/:id/edit"></Route> {/* edit single challenge if logged in */}
          <Route path="/challenges/:id/delete"></Route> {/* delete single challenge if logged in */}
        
        {/* CREATIONS ROUTES */}
          <Route path="/creations" element={<CreationsPage />}></Route> {/* list of all creations */}
          <Route path="/creations/:creationId" element={<SingleCreationPage />}></Route> {/* single creation */}
          <Route path="/creations/:id/edit"></Route> {/* edit single creation if logged in */}
          <Route path="/creations/:id/delete"></Route> {/* delete single creation if logged in */}
          
        {/* PROFILE ROUTES */}
          <Route path="/profile"></Route> {/* redirect to profile/:id */}
          <Route path="/profile/:userId" element={<ProfilePage />}></Route> {/* user's profile when logged in */}
          <Route path="/profile/:id/edit"></Route> {/* edit profile if logged in */}
          <Route path="/profile/:id/deletee"></Route> {/* delete profile if logged in */}
          <Route path="/profile/:id/challenges"></Route> {/* list of all challenges associated with user's profile*/}
          <Route path="/profile/:id/creations"></Route> {/* list of all creations associated with user's profile*/}
          
        {/* SIGN UP ROUTE */}
          <Route path="/signup"></Route>

        {/* LOG IN ROUTE */}
          <Route path="/login"></Route>
        </Routes>

      </main>
    </BrowserRouter>
  );
}

export default App;
