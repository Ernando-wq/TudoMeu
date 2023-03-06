
function App() {

  const a = 2
  const b = 5
  const total = ''
  function soma() {

    const somatoria = a + b

    total = somatoria

  }

  const nome = 'Chico'
  return (
    <div >
      <button onClick={soma} >Chico</button>
      <p>
        {total}

      </p>

    </div>
  );
}

export default App;
