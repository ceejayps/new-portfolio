
import './App.css';
import Hero from './components/hero';
import SkillSection from './components/SkillSection';
import WorkSection from './components/WorkSection';

import ContactForm from './components/ContactForm'
import WorkExpierence from './components/WorkExpierence';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  
  return (
    <div className="App">
      <Hero/>
      <About/>
      <SkillSection/>
      <WorkSection/>
      <WorkExpierence/>
      <ContactForm/>
      <Footer/>
      
    </div>
  );
}

export default App;
