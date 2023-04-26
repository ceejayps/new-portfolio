import logo from './logo.svg';
import './App.css';
import Hero from './components/hero';
import SkillSection from './components/SkillSection';
import WorkSection from './components/WorkSection';
import WorkExpierence from './components/WorkExpierence';
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className="App">
      <Hero/>
      <SkillSection/>
      <WorkSection/>
      <WorkExpierence/>
      <ContactForm/>
      
    </div>
  );
}

export default App;
