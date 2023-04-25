import logo from './logo.svg';
import './App.css';
import Hero from './components/hero';
import SkillSection from './components/SkillSection';
import WorkSection from './components/WorkSection';
import WorkExpierence from './components/WorkExpierence';

function App() {
  return (
    <div className="App">
      <Hero/>
      <SkillSection/>
      <WorkSection/>
      <WorkExpierence/>
      
    </div>
  );
}

export default App;
