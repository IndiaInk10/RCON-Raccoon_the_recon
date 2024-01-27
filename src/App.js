import './App.css';

import Header from './components/Header';
import ServerSection from './components/ServerSection';
import CommandSection from './components/CommandSection';

function App() {
  return (
    <div className="App">
        <Header />
        <section className="App-section">
          <ServerSection />
          <CommandSection />
        </section>
    </div>
  );
}

export default App;
