import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Produto.module.css'

const Produto = () =>{
  //acessando o parametro
  const {id} = useParams();
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(()=> {
  async function fetchProduto(url){
    try{
      setLoading(true);   
      const response = await fetch(url);
      const json = await response.json();
      console.log(response)
      setProduto(json);
    } catch (erro) {
        setError('Um erro ocorreu!')
    } finally {
      setLoading(false);
    }
  }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  }, [id])

  if(loading) return <div>Carregando...</div>
  if(error) return <p>{error}</p>
  if(produto === null ) return null;

  return(
    <section className={styles.produto}>
      {produto.fotos.map(foto => <img key={foto.src} src={foto.src} alt={foto.titulo}/>)}
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R${produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
      <h1>Produto</h1>
    </section>
  )
}

export default Produto;