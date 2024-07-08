import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import CreatePost from "./Components/CreatePost.jsx";
import ListOfPosts from "./Components/ListsOfPosts.jsx";
import { useState } from "react";
import PostListProvider from "./Store/postList-store.jsx";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="right-container">
          <Header></Header>
          {selectedTab === "Home" ? (
            <ListOfPosts></ListOfPosts>
          ) : (
            <CreatePost />
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}
export default App;
