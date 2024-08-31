import React, { useState } from 'react';

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState('');

  const handleForm = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return <div>
 
   <div className='ml-[30%] p-20 mr-36 mb-20 bg-sky-300 rounded-3xl rounded-t-3xl w-[500px]'>
      <form className='mt-[22%]  w-[900px]' onClick={handleForm}>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className='border-slate-500 border-2 m-4 p-2 rounded-10 w-[400px] h-[50px]'
          type='text'
          placeholder='Enter your name'
        />
        <br />
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className='border-slate-500 border-2 m-4 p-10 rounded-10 w-[400px] h-[50px]'
          type='text'
          placeholder='What are your complaints?'
        />
        <br />
        <button type='submit' className='text-4xl bg-blue-400 text-black w-[400px] h-[50px] ml-4 rounded-3xl font-semibold p-2'>
          Send
        </button>
      </form>
    </div>
    </div>
  ;
}

export default Form;
