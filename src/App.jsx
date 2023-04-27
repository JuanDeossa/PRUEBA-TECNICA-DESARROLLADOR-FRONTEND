import "./App.css";
import { SideBar } from "./components/SideBar/SideBar";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";


export const App = () => {

  return (
    <div className="h-screen bg-slate-100 flex">
      <div className="w-1/6">
        <SideBar/>
      </div>
      <div className="w-2/6">
        <Page1/>
      </div>
      <div className="w-2/6">
        <Page2/>
      </div>
    </div>
  );
};