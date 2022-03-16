import { useState, useEffect } from 'react'

const Home = () => {
  const [input, setInput] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const handleMessage = (event, message) => setMessage(message)
    window.electron.message.on(handleMessage)

    return () => {
      window.electron.message.off(handleMessage)
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    window.electron.message.send(input)
    setMessage(null)
  }

  return (
    <div>
      <h1>It seems like you've caught us! we are still building this...</h1>

      {message && <p>{message}</p>}

      <style jsx>{`
        h1 {
          color: grey;
          font-size: 50px;
        }
      `}</style>
    </div>
  )
}

export default Home
