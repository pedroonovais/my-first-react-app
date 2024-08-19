import { useState } from "react"
import { Button } from "./components/Button/Button"
import { Card } from "./components/Card/Card"
import { Header } from "./components/Header/Header"

function App() {
  const userInfo = {
    name: "Leonardo",
    surname: "Santos",
  }

  const userList = [
    {
      id: 0,
      name: "Leonardo Santos",
      age: 25,
    },
    {
      id: 1,
      name: "Caio Liang",
      age: 22,
    },
    {
      id: 2,
      name: "Rodrigo Rios",
      age: 49,
    },
  ]

  // Estado interno do componente -> STATE
  // 1° Elemento da instancia(Chuchu) é apenas um várivel e o segundo(abobrinha) é uma função que atualiza a variavel  
  // Ex. const [chuchu, abobrinha] = useState()
  const [state, setState] = useState()
  const [name, setName] = useState<string>()
  const [age, setAge] = useState<string>()

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(`Nome: ${event.target.value}`)
  }

  const handleChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(`Idade: ${event.target.value}`)
  }

  const handleClick = () => {
    alert("Abobrinha")
  }
  
  return (
    <>
      <Header name={userInfo.name} surname={userInfo.surname} />
      <h1>Meu primeiro projeto</h1>
      {/* <Card>
        <h2>Titulo 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          consequuntur cum, inventore unde voluptate recusandae laboriosam nemo
          veniam hic, incidunt laborum aspernatur accusamus commodi itaque.
          Doloribus praesentium similique modi temporibus!
        </p>
        <Button>Adicionar</Button>
      </Card> */}

      <form action="">
        <label htmlFor="name">Nome completo</label> <br />
        <input 
          type="text"  
          name="name" 
          id="name"
          onChange={(e) => handleChangeName(e)}
        />
        <br />
        <label htmlFor="age">Idade</label><br />
        <input 
          type="number" 
          name="age" 
          id="age"
          onChange={(e) => handleChangeAge(e)}
        />
        <br />
        <button type="button" onClick={handleClick}>Teste</button>
      </form>

      <div>
        <h3>{name}</h3>
        <h3>{age}</h3>
      </div>

      {userList.map((user, index) => (
        <Card key={index}>
          <h3>{user.name}</h3>
          <p>{user.age}</p>
        </Card>
      ))}

      <Button>Salvar</Button>
    </>
  )
}

export default App
