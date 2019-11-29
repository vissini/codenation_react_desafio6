import React, { useState } from 'react';
import { Find } from './Components/Find'
import { getFindRepositoryByUserName } from "./Components/Api";

function App() {

  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(1);

  const handleFind = async (userName) => {
    console.log("test", userName);
    const result = await getFindRepositoryByUserName(userName);
    console.log("Repositories",result);        
    setRepositories( result );
    setLoading(0);
    console.log(repositories)
    //setLoading(false)
  }

  return (
    <div className="App">
      <p>Está carregando? {loading}</p>
      <Find handleFind= {handleFind} />
      {repositories.map(dt => (
        <p>{dt.name}</p>
      ))}
    </div>
  );
}

export default App;
