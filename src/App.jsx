
import { useState } from 'react'
import './App.css'

function App() {

  const [fullName, setFullName] = useState('')
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [anniEsperienza, setAnniEsperienza] = useState('')
  const [specializzazione, setSpecializzazione] = useState('')
  const [textArea, setTextArea] = useState('')

  function stampaConsole(e) {
    e.preventDefault()
    console.log(`
        Nome completo: ${fullName}
        Mail: ${mail}
        Password: ${password}
        Anni di Esperienza: ${anniEsperienza}
        specializzazione: ${specializzazione}
        textArea: ${textArea}
        `);
    setFullName('')
    setMail('')
    setPassword('')
    setAnniEsperienza('')
    setSpecializzazione('')
    setTextArea('')

  }


  return (
    <>
      <h1>Benvenuto nella pagina di registrazione!</h1>
      <form className='needs-validation'>
        <div className="mb-3 w-50">
          <input type="text"
            className="form-control "
            placeholder='Nome completo'
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            required />
        </div>
        <div className="mb-3 w-50">
          <input type="email"
            className="form-control "
            placeholder='email@example.com'
            value={mail}
            onChange={e => setMail(e.target.value)}
            required />
        </div>
        <div className="mb-3 w-50">
          <input type="password"
            className="form-control"
            placeholder='inserisci la password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required />
        </div>
        <div className="mb-3 w-50">
          <input type="number"
            className="form-control"
            placeholder='Anni di esperienza'
            value={anniEsperienza}
            onChange={e => setAnniEsperienza(e.target.value)}
            min="0"
            required />
        </div>
        <div className="mb-3 w-50">
          <select className="form-select"
            value={specializzazione}
            onChange={e => setSpecializzazione(e.target.value)} required>
            <option value="" >Seleziona la specializzazione</option>
            <option value="1">Full Stack</option>
            <option value="2">Backend</option>
            <option value="3">Frontend</option>
          </select>
        </div>
        <div className="mb-3 w-50">
          <label className="form-label fw-bold" >Parlaci di te</label>
          <textarea className="form-control" rows="3"
            value={textArea}
            onChange={e => setTextArea(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary"
          onClick={stampaConsole}>Submit</button>
      </form>
    </>
  )
}

export default App
