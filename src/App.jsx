import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";

import ChallengesPage from "./pages/Challenges/ChallengesPage";
import SingleChallengePage from "./pages/Challenges/SingleChallengePage";
import CreateChallengePage from "./pages/Challenges/CreateChallengePage";
import EditChallengePage from "./pages/Challenges/EditChallengePage";

import CreationsPage from "./pages/Creations/CreationsPage";
import SingleCreationPage from "./pages/Creations/SingleCreationPage";
import CreateCreationPage from "./pages/Creations/CreateCreationPage";
import SpecificChallengeCreationPage from "./pages/Creations/SpecificChallengeCreationPage";
import EditCreationPage from "./pages/Creations/EditCreationPage";

import ProfilePage from "./pages/Profile/ProfilePage";


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
          <Route path="/challenges/:challengeId/edit" element={<EditChallengePage />}></Route> {/* edit single challenge if logged in */}
          <Route path="/challenges/:challengeId/delete"></Route> {/* delete single challenge if logged in */}
          <Route path="/challenges/:challengeId/create" element={<SpecificChallengeCreationPage />} ></Route> {/* create a specific challenge */}
      
        {/* CREATIONS ROUTES */}
          <Route path="/creations" element={<CreationsPage />}></Route> {/* list of all creations */}
          <Route path="/creations/:creationId" element={<SingleCreationPage />}></Route> {/* single creation */}
          <Route path="/creations/:creationId/edit" element={<EditCreationPage />}></Route> {/* edit single creation if logged in */}
          <Route path="/creations/:creationId/delete"></Route> {/* delete single creation if logged in */}
          
        {/* PROFILE ROUTES */}
          <Route path="/profile" element={<Navigate to='/profile/DADDA3C9-C1F8-4BAF-AC74-05AABED44DD5' />}></Route> {/* redirect to profile/:id */}
          <Route path="/profile/:userId" element={<ProfilePage />}></Route> {/* user's profile when logged in */}
          <Route path="/profile/:userId/edit"></Route> {/* edit profile if logged in */}
          <Route path="/profile/:userId/delete"></Route> {/* delete profile if logged in */}
          <Route path="/profile/:userId/challenges"></Route> {/* list of all challenges associated with user's profile*/}
          <Route path="/profile/:userId/creations"></Route> {/* list of all creations associated with user's profile*/}
          
        {/* CREATE ROUTE */}
          <Route path="/create/challenge" element={<CreateChallengePage />}></Route>
          <Route path="/create/creation" element={<CreateCreationPage />}></Route>
        
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
