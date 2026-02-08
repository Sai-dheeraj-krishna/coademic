import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Services from './components/Services';
import Placement from './components/Placement';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      <Background />
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Courses />
        <Services />
        <Placement />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
