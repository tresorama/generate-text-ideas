import './App.css';
import { generateTextPermutation } from '@tresorama-test-lib/generate-text-permutation';

const demoResult = generateTextPermutation([
  ["Mario", "Luigi", "Silvio"],
  ["gioca a pallone", "scrive una lettera", "salta la corda"],
  ["in cortile", "al bar", "in camera"],
]);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <pre style={{ maxWidth: '45ch', marginInline: 'auto' }}>
          {JSON.stringify(demoResult, null, 2)}
        </pre>
      </header>
    </div>
  );
}

export default App;
