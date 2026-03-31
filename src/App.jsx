
import './App.css'

function App() {


  return (
    <>
      <h1>Benvenuto nella pagina di registrazione!</h1>
      <form className='needs-validation'>
        <div className="mb-3 w-50">
          <input type="text"
            className="form-control "
            placeholder='Nome completo'
            required />
        </div>
        <div className="mb-3 w-50">
          <input type="email"
            className="form-control "
            placeholder='email@example.com'
            required />
        </div>
        <div className="mb-3 w-50">
          <input type="password"
            className="form-control"
            placeholder='inserisci la password'
            required />
        </div>
        <div className="mb-3 w-50">
          <input type="number"
            className="form-control"
            placeholder='Anni di esperienza'
            min="0"
            required />
        </div>
        <div className="mb-3 w-50">
          <select className="form-select" required>
            <option value="" >Seleziona la specializzazione</option>
            <option value="1">Full Stack</option>
            <option value="2">Backend</option>
            <option value="3">Frontend</option>
          </select>
        </div>
        <div className="mb-3 w-50">
          <label className="form-label fw-bold">Parlaci di te</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default App
