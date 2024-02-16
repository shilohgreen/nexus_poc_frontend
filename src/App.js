import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function App() {

  const [data, setData] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    if (window.Telegram) {
      window.Telegram.WebApp.sendData(JSON.stringify(data));
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form onSubmit={e => { handleSubmit(e) }}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Welcome to Nexus!</Form.Label>
            <Form.Control onChange={e => setData(e.target.value)} />
          </Form.Group>
          <Button variant="outline-primary" type="submit">Send Data</Button>{''}
        </Form>

      </header>
    </div>
  );
}

export default App;
