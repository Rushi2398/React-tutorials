import { useState, useEffect } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const submitHandler = (e)=>{
    e.preventDefault()
    if (editIndex !== null) {
      const updated = [...tasks]
      updated[editIndex] = { title, details }
      setTasks(updated)
      setEditIndex(null)
    } else {
      setTasks(prev => [...prev, { title, details }])
    }
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const deleteTask = [...tasks]
    deleteTask.splice(idx,1)
    setTasks(deleteTask)
  }

  const editNote = (idx) => {
    setTitle(tasks[idx].title)
    setDetails(tasks[idx].details)
    setEditIndex(idx)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form className='flex items-start lg:w-1/2 gap-5 flex-col p-10' onSubmit={(e) => {submitHandler(e)}}>
          <h1 className='text-3xl font-bold'>{editIndex !== null ? 'Edit Note' : 'Add Notes'}</h1>
          <input 
            type="text" 
            placeholder='Enter Notes Heading'
            className='px-5 py-2 w-full border-2 rounded-2xl text-white outline-none font-medium'
            value={title}
            onChange={e => {
              setTitle(e.target.value)
            }}/>
          <textarea 
            placeholder="Enter Details"
            className='px-5 py-2 h-32 w-full border-2 rounded-2xl text-white outline-none font-medium'
            value={details}
            onChange={e => {
              setDetails(e.target.value)
            }}/>
          <button
            disabled={!title.trim() || !details.trim()} 
            className='bg-white text-black active:bg-gray-100 px-5 py-2 w-full rounded-2xl outline-none font-medium disabled:bg-gray-500'>{editIndex !== null ? 'Update Note' : 'Add Note'}</button>
      </form>
      <div className='p-10 lg:border-l-2 md:border-t-2 lg:border-t-0 lg:w-1/2'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {tasks.map((elem, idx)=>{
            return <div key={idx} className="flex justify-between flex-col items-start h-52 w-40 rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover text-black px-4 py-9 pb-4">
              <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight text-sm font-semibold text-gray-700'>{elem.details}</p>
              <button
                  onClick={() => editNote(idx)}
                  className='w-full bg-blue-300 text-white py-1 text-xs rounded-2xl font-bold cursor-pointer active:scale-95'
                >Edit</button>

              <button 
                onClick={() => {
                  deleteNote(idx)
                }}
                className='w-full bg-red-600 text-white py-1 text-xs rounded-2xl font-bold cursor-pointer active:scale-95'>Delete</button>
            </div>
          })}
          
        </div>
      </div>
    </div>
  )
}

export default App