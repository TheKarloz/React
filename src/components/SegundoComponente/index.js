const SegundoComponente = () => {

    const handleLogin = (e) => {
        e.preventDefault() //Necessário apenas se o input for tipo "submit"
        console.log("login")
    }

  return (
    <form>
        <label>
            Email: 
            <input type="text" placeholder='digite seu email'/>
        </label>
        <label style={{display: 'block'}}>
            Senha: 
            <input type="password" placeholder='digite sua senha'/>
        </label>
        {/* <input type="button" value="Entrar" onClick={() => console.log("ON CLICK")} /> */}
        <input type="submit" value="Entrar" onClick={handleLogin} />

    </form>
  )
}

export default SegundoComponente


/*
    Criar um Componente Novo
    Criar 2 variáveis com números
    criar uma função para somar os 2 número e elevar ao quadrado
    Clicar no botão, disparar a função
    mostrar o resultado no console
*/