import React, { useState } from 'react';
import { Find } from './Components/Find'
import { Container } from './Components/Container'
import { getFindRepositoryByUserName } from "./Components/Api";

function App() {

  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(1);

  const handleFind = async (userName) => {
    const result = await getFindRepositoryByUserName(userName);     
    setRepositories( result );
    setLoading(0);
    console.log(repositories)
    //setLoading(false)
  }

  return (
    <div className="App">
      <Find handleFind= {handleFind} />
      <Container repositories={repositories} />
    </div>
  );
}

export default App;
