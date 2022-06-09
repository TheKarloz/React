const TerceiroComponente = () => {

    const handleLogin = (e) => {
        e.preventDefault() //Necessário apenas se o input for tipo "submit"
        const n1 = document.querySelector("#n1")
        const n2 = document.querySelector("#n2")
        console.log((parseFloat(n1.value) + parseFloat(n2.value))**2)
    }

  return (
    <form>
        <label>
            1º Número: 
            <input type="text" id="n1" placeholder='digite o 1º número'/>
        </label>
        <label>
            2º Número: 
            <input type="text" id="n2" placeholder='digite o 2º número'/>
        </label>
        {/* <input type="button" value="Entrar" onClick={() => console.log("ON CLICK")} /> */}
        <input type="submit" value="Calcular" onClick={handleLogin} />

    </form>
  )
}

export default TerceiroComponente


/*
    Criar um Componente Novo
    Criar 2 variáveis com números
    criar uma função para somar os 2 número e elevar ao quadrado
    Clicar no botão, disparar a função
    mostrar o resultado no console
*/