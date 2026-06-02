import { useState } from 'react'
import Question from './components/QuestionPage.jsx'
import YesPage from './components/YesPage.jsx'
import PlacesPage from './components/PlacesPage.jsx'
import TimePage from './components/TimePage.jsx'
import SummaryPage from './components/SummaryPage.jsx'
import './App.css'

function App() {
  // Steps: 'question' | 'yes' | 'places' | 'time' | 'summary'
  const [step, setStep] = useState('question');
  const [selectedPlace, setSelectedPlace] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <div className="app">
      {step === 'question' && (
        <Question onYesClick={() => setStep('yes')} />
      )}
      {step === 'yes' && (
        <YesPage onContinue={() => setStep('places')} />
      )}
      {step === 'places' && (
        <PlacesPage onSelect={(place) => { setSelectedPlace(place); setStep('time'); }} />
      )}
      {step === 'time' && (
        <TimePage onConfirm={(time) => { setSelectedTime(time); setStep('summary'); }} />
      )}
      {step === 'summary' && (
        <SummaryPage place={selectedPlace} time={selectedTime} />
      )}
    </div>
  );
}

export default App;
