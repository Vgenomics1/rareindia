
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProgramOverview from '../components/ProgramOverview';
import Offerings from '../components/Offerings';
import Collaboration from '../components/Collaboration';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  React.useEffect(() => {
    // Update page title
    document.title = "RARE-INDIA | Rare Disease Alliance for Research & Evidence";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProgramOverview />
        <Offerings />
        <Collaboration />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
