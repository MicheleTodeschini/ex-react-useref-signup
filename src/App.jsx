
import { useState, useMemo, useRef } from 'react'
import './App.css'

function App() {

  const fullNameRef = useRef()
  const fullName = fullNameRef.current.value
  const emailRef = useRef()
  const email = emailRef.current.value
  const anniEsperienzaRef = useRef()
  const anniesperienza = anniEsperienzaRef.current.value
  const specializzazioneRef = useRef()
  const specializzazione = specializzazioneRef.current.value

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [textArea, setTextArea] = useState('')

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = `!@#$%^&*()-_=+[]{}|;:'\\",.<>?/\\\`~`;

  function stampaConsole(e) {
    e.preventDefault()
    console.log(`
    Nome completo: ${fullName}
    UserName: ${userName}
    Mail: ${email}
    Password: ${password}
    Anni di Esperienza: ${anniesperienza}
    specializzazione: ${specializzazione}
    textArea: ${textArea}
    `);
    setUserName('')
    setPassword('')
    setTextArea('')
    fullNameRef.current.value = ''
    emailRef.current.value = ''
    anniEsperienzaRef.current.value = ''
    specializzazioneRef.current.value = ''
  }

  const checkUsername = useMemo(() => {
    const valido = userName.split('').every(char =>
      letters.includes(char.toLocaleLowerCase()) || numbers.includes(char)
    )
    return valido && userName.length >= 6
  }, [userName])

  const checkPassword = useMemo(() => {
    const lettera = password.split('').some(char => letters.includes(char))
    const numero = password.split('').some(char => numbers.includes(char))
    const simbolo = password.split('').some(char => symbols.includes(char))
    return password.length >= 8 && lettera && numero && simbolo
  }, [password])

  const checkDescription = useMemo(() => {
    const valida = textArea.trim().length > 10 && textArea.trim().length < 100
    return valida
  }, [textArea])


  return (
    <>
      <h1>Benvenuto nella pagina di registrazione!</h1>
      <form className='needs-validation' onSubmit={stampaConsole}>
        <div className="mb-3 w-50">
          <input type="text"
            className="form-control "
            placeholder='Nome completo'
            ref={fullNameRef}
            required />
        </div>
        <div className="mb-3 w-50">
          <input type="text"
            className="form-control "
            placeholder='UserName'
            value={userName}
            onChange={e => setUserName(e.target.value)}
            required />
          <p style={{ color: checkUsername ? 'green' : 'red' }}>
            {checkUsername
              ? 'Username valido '
              : 'Minimo 6 caratteri e niente caratteri speciali'}
          </p>
        </div>
        <div className="mb-3 w-50">
          <input type="email"
            className="form-control "
            placeholder='email@example.com'
            ref={emailRef}
            required />
        </div>
        <div className="mb-3 w-50">
          <input type="password"
            className="form-control"
            placeholder='inserisci la password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required />
          <p style={{ color: checkPassword ? 'green' : 'red' }}>
            {checkPassword ? 'Password valida' : 'La password deve avere almeno 8 caratteri e contenere minimo 1 lettera, 1 simbolo e 1 numero'}
          </p>
        </div>
        <div className="mb-3 w-50">
          <input type="number"
            className="form-control"
            placeholder='Anni di esperienza'
            ref={anniEsperienzaRef}
            min="0"
            max='100'
            required />
        </div>
        <div className="mb-3 w-50">
          <select className="form-select"
            ref={specializzazioneRef} required>
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
            onChange={e => setTextArea(e.target.value)}
          ></textarea>
          <p style={{ color: checkDescription ? 'green' : 'red' }}>
            {checkDescription ? 'Va bene' : 'minimo 10 caratteri max 100'}</p>
        </div>
        <button type="submit" className="btn btn-primary"
        >Submit</button>
      </form>
    </>
  )
}

export default App
