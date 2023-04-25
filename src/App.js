import logo from './logo.svg';
import './App.css';
import Hero from './components/hero';
import SkillSection from './components/SkillSection';
import WorkSection from './components/WorkSection';

function App() {
  return (
    <div className="App">
      <Hero/>
      <SkillSection/>
      <WorkSection/>
    </div>
  );
}

export default App;
