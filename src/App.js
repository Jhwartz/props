import React from 'react'
import NavBar from './components/NavBar'
import Todo from './components/Todo'
function App() {
  let title ="My activities to do for the week"
  return (
    <div>
      <NavBar title={title} />
      <main>
        <Todo title="learning react" datetime="15th August 2022" />
        <Todo title="going to the hub" datetime="16th August 2022" />
        <Todo title="studying at the library" datetime="17th August 2022" />
        <Todo title="taking a leisure sports" datetime="18th August 2022" />
        <Todo title="researching about MESTAfrica" datetime="19th August 2022" />



      </main>  
    </div>
  )
}

export default App
