
import './App.css';
// import UseStateExample from './component/useStateExample';
import UseReducerExample from './component/useStateExample';

function App() {
  return (
    <div className="App">
      <h1>REDUCER KULLANIMI</h1>
      <p>Detaylı Açıklamaları Github'ta yaptım.</p>
      <p>Faydası olması dileklerimle.</p>

      <UseReducerExample/>
      
      { /* REDUCER FONKSİYONU KULLANILMADAN ÖNCEKİ COMPONENT <UseStateExample/> */} 
    </div>
  );
}

export default App;
