import React, { useState } from 'react';
import './intro.css';
import axios from 'axios';


const Intro = () => {
  // State variables to store answers
  const [answers, setAnswers] = useState({
    problemA: '',
    problemB: '',
    problemC: '',
    problemD: '',
    problemE: '',
    problemF: '',
    problemG: '',
  });

  // Function to handle form submission
  const handleSubmitA = async (e) => {
    e.preventDefault();

    try {
      // Send answers to backend      
      const url = 'http://localhost:3003/solution/A';
      const data = {
        data : answers.problemA
      }
      console.log(data.data);
      await axios.post(url , data);

    } catch (error) {
        console.error('Error saving answers:', error);
    }
  };

  const handleSubmitB = async (e) => {
    e.preventDefault();

    try {
      // Send answers to backend      
      const url = 'http://localhost:3003/solution/B';
      const data = {
        data : answers.problemB
      }
      console.log(data.data);
      await axios.post(url , data);

    } catch (error) {
        console.error('Error saving answers:', error);
    }
  };

  const handleSubmitC = async (e) => {
    e.preventDefault();

    try {
      // Send answers to backend      
      const url = 'http://localhost:3003/solution/C';
      const data = {
        data : answers.problemC
      }
      console.log(data.data);
      await axios.post(url , data);

    } catch (error) {
        console.error('Error saving answers:', error);
    }
  };

  const handleSubmitD = async (e) => {
    e.preventDefault();

    try {
      // Send answers to backend      
      const url = 'http://localhost:3003/solution/D';
      const data = {
        data : answers.problemD
      }
      console.log(data.data);
      await axios.post(url , data);

    } catch (error) {
        console.error('Error saving answers:', error);
    }
  };

  const handleSubmitE = async (e) => {
    e.preventDefault();

    try {
      // Send answers to backend      
      const url = 'http://localhost:3003/solution/E';
      const data = {
        data : answers.problemE
      }
      console.log(data.data);
      await axios.post(url , data);

    } catch (error) {
        console.error('Error saving answers:', error);
    }
  };

  const handleSubmitF = async (e) => {
    e.preventDefault();

    try {
      // Send answers to backend      
      const url = 'http://localhost:3003/solution/F';
      const data = {
        data : answers.problemF
      }
      console.log(data.data);
      await axios.post(url , data);

    } catch (error) {
        console.error('Error saving answers:', error);
    }
  };

  const handleSubmitG = async (e) => {
    e.preventDefault();

    try {
      // Send answers to backend      
      const url = 'http://localhost:3003/solution/G';
      const data = {
        data : answers.problemG
      }
      console.log(data.data);
      await axios.post(url , data);

    } catch (error) {
        console.error('Error saving answers:', error);
    }
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  return (
    <div>
      <h1 className='heading'>Codemasters Admin Panel</h1>
      <div className='problems'>
        <h1 className='boxHeading'> Let's Code with CodeMasters! </h1>

        <form onSubmit={handleSubmitA}>
          <div className='problem'>
            <label>Problem A</label>
            <textarea placeholder='Answer' required={true} name='problemA' onChange={handleInputChange} />
            <input type='submit' className='submitBtn' />
          </div>
        </form>
        <form onSubmit={handleSubmitB}>
          <div className='problem'>
            <label>Problem B</label>
            <textarea placeholder='Answer' required={true} name='problemB' onChange={handleInputChange} />
            <input type='submit' className='submitBtn' />
          </div>
        </form>
        <form onSubmit={handleSubmitC}>
          <div className='problem'>
            <label>Problem C</label>
            <textarea placeholder='Answer' required={true} name='problemC' onChange={handleInputChange} />
            <input type='submit' className='submitBtn' />
          </div>
        </form>
        <form onSubmit={handleSubmitD}>
          <div className='problem'>
            <label>Problem D</label>
            <textarea placeholder='Answer' required={true} name='problemD' onChange={handleInputChange} />
            <input type='submit' className='submitBtn' />
          </div>
        </form>
        <form onSubmit={handleSubmitE}>
          <div className='problem'>
            <label>Problem E</label>
            <textarea placeholder='Answer' required={true} name='problemE' onChange={handleInputChange} />
            <input type='submit' className='submitBtn' />
          </div>
        </form>
        <form onSubmit={handleSubmitF}>
          <div className='problem'>
            <label>Problem F</label>
            <textarea placeholder='Answer' required={true} name='problemF' onChange={handleInputChange} />
            <input type='submit' className='submitBtn' />
          </div>
        </form>
        <form onSubmit={handleSubmitG}>
          <div className='problem'>
            <label>Problem G</label>
            <textarea placeholder='Answer' required={true} name='problemG' onChange={handleInputChange} />
            <input type='submit' className='submitBtn' />
          </div>
        </form>

      </div>
    </div>
  )
}

export default Intro
