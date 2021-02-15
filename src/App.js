import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      {/* Header */}
      <Header/>
      <div className="app_page">
        <Sidebar/>
        <RecommendedVideos/>
         {/* SIde bar */}
         {/* RecommendedVideos */}
      </div>
     
     
    </div>
  );
}

export default App;
