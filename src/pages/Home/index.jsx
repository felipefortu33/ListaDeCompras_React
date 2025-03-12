import { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { 
  AddButton, 
  Container, 
  Product, 
  TrashButton, 
  Input, 
  Title, 
  ProductList,
  MarkButton // Adicionei o novo botão
} from './styles'

function Home() {
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()
  
  function cliqueiNoBotao() {
    if (!inputRef.current.value.trim()) return; // Evita adicionar produtos vazios

    setProdutos([{ id: uuidv4(), nome: inputRef.current.value, comprado: false }, ...produtos])
    inputRef.current.value = ''; 
  }

  function deletarProduto(id) {
    setProdutos(produtos.filter(produto => produto.id !== id))
  }

  function marcarProduto(id) {
    setProdutos(produtos.map(produto => 
      produto.id === id ? { ...produto, comprado: !produto.comprado } : produto
    ))
  }

  return (
    <Container>
      <Title>🛒 Lista de Compras</Title>

      <div style={{ display: 'flex', gap: '10px' }}>
        <Input placeholder="Digite o produto..." ref={inputRef} />
        <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>
      </div>

      <ProductList>
        {produtos.length > 0 ? (
          produtos.map((produto) => (
            <Product key={produto.id} style={{ textDecoration: produto.comprado ? 'line-through' : 'none' }}>
              <p>{produto.nome}</p>
              <MarkButton onClick={() => marcarProduto(produto.id)}>
                {produto.comprado ? 'Desmarcar' : 'Marcar'}
              </MarkButton>
              <TrashButton onClick={() => deletarProduto(produto.id)}>🗑️</TrashButton>
            </Product>
          ))
        ) : (
          <p className="empty-message">Sua lista está vazia! 📝</p>
        )}
      </ProductList>
    </Container>
  )
}

export default Home
