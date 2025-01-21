# Aluraflix

Aluraflix é uma aplicação de catálogo de vídeos inspirada, projetada para gerenciar e visualizar vídeos organizados por categorias. Este projeto faz parte dos desafios do programa Oracle Next Education (ONE).

---

# Capturas:
![aluraflix1](https://github.com/user-attachments/assets/d8ea1a99-e28f-4faa-8622-82096f29351f)
![aluraflix2](https://github.com/user-attachments/assets/8c18f302-65a8-4bbf-918f-481dedbd94d3)
![aluraflix3](https://github.com/user-attachments/assets/6c1fcabd-5446-4526-adf2-99c7d52da090)
![aluraflix4](https://github.com/user-attachments/assets/71e19f4e-4815-49e8-83f2-dc2ab96d87b9)


## **Recursos**
- Listagem de vídeos por categorias.
- CRUD completo: Criar, Ler, Atualizar e Excluir vídeos.
- Uso de uma API REST para armazenamento de vídeos.
- Design responsivo e estilização com `styled-components`.
- Contexto global para gerenciamento do estado dos vídeos.

---

## **Tecnologias Utilizadas**
- **React**: Biblioteca para construir interfaces de usuário.
- **Axios**: Gerenciamento de solicitações HTTP.
- **React Icons**: Ícones para botões de edição e exclusão.
- **Styled-components**: Estilização de componentes.
- **MockAPI**: Simulação de uma API REST.
- **React Router**: Navegação na aplicação (se aplicável).

---

## **Instalação**
Siga estas etapas para instalar e executar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/aluraflix.git
   cd aluraflix
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```
3. Para rodar o servidor local da API (My-json-server), crie um arquivo db.json ou baixe o arquivo com dados mockados do My-json-server e configure o JSON conforme as necessidades da aplicação.
Execute o servidor da API:
 ```bash
   npx json-server --watch db.json --port 5000
   ```

4. Execute a aplicação:
   ```bash
   npm start
   ```

---

## **Uso**
1. Adicione um vídeo fornecendo o título, link e categoria.
2. Edite os vídeos diretamente pela interface usando o ícone de edição.
3. Exclua vídeos usando o ícone de lixeira com confirmação de segurança.



