import './App.css';
import Route from './route/route'
import Menu from "./components/menu/menu";
import MenuItems from './api/menu-items.json'

export default function App() {
  return (
    <div className="App">
      <Menu  Items={MenuItems}/>
      <Route/>
    </div>
  );
}