import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import Button from '../../components/Button/Button';


const AddTodo = ({todo, setTodo}) => {
  const [value, setValue] = useState('')
  const [hasError, setHasError] = useState(false)
  const saveTodo = () => {
    if (value.trim() === '') {
      setHasError(true);
      return; 
    }
    setTodo([
      ...todo,
      {
        id: uuid(),
        title: value,
        status: true,
        style: { border: hasError ? '1px solid red' : null }
      },
    ]);
    setHasError(false); 
    setValue('');
  }
  return (
    <div className="max-w-[1240px] mx-auto px-4">
      <div className='w-full flex mt-2'>
        <input
          placeholder='Enter your task'
          className={`w-full border px-3 rounded-lg h-12 sm:h-16 md:text-xl outline-black ${hasError ?  'border-red-500' : ''}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={saveTodo}>Save</Button>
      </div>
    </div>  
  )
}

export default AddTodo;
