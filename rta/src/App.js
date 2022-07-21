import './App.css';
import Navigation from './components/navbar';
import Content from './components/content';
import Testimonials from './components/testimonial';
import Timeline from './components/timeline';
import Footer from './components/footer';
import Video from './components/video';
import { BrowserRouter as Router } from 'react-router-dom';
import PowerG from './images/pg.png';
function App() {
  return (
    <Router>
      <Navigation />
      <div className="container mx-auto rounded-xl shadow border p-8 m-10 bg-stone-600">
        <img className="h-50 w-80 mx-auto rounded-t-md" src={PowerG} alt="UGA Logo" />
      </div>

      <Content />
      <div className="p-4">
        <Testimonials />
      </div>
      <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">2022 College Football Playoff National Champions</h3>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0">
          A look back at the University of Georgia's historic season.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Video />
      </div>


      <Timeline />
      <Footer />
    </Router>

  );
}
export default App;
