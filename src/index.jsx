import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="friends" element={<FriendForm />} />
          <Route path="res" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}



import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FriendForm from "./components/FriendForm";
import { FriendsProvider } from "./hooks/FriendsContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FriendsProvider>
      <App />
    </FriendsProvider>
  </React.StrictMode>,
)

export default App