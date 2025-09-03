# 🖼️ Consultant Gallery

Bem-vindo ao Consultant Gallery! Este projeto é uma galeria de consultores construída com Angular e TailwindCSS, focada em exibir perfis de consultores de forma moderna e responsiva.

## 🚀 Começando

Siga os passos abaixo para rodar o projeto localmente:

```bash
npm install
npm start
```

Acesse em: http://localhost:4200

## 🧩 Estrutura do Projeto

```
consultant-gallery/
├── angular.json
├── package.json
├── tailwind.config.js
├── tsconfig*.json
├── public/
│   └── favicon.ico
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   └── app/
│       ├── app.config.ts
│       ├── app.css
│       ├── app.html
│       ├── app.spec.ts
│       ├── app.ts
│       ├── components/
│       │   ├── consultant-card/
│       │   ├── consultant-list/
│       │   └── filter-toolbar/
│       ├── models/
│       │   └── consultant.model.ts
│       └── services/
│           └── consultant.ts
```

## 🛠️ Tecnologias Utilizadas

- Angular
- TailwindCSS
- TypeScript
- Lucide Icons

## 📦 Scripts Disponíveis

- `npm start` — Inicia o servidor de desenvolvimento
- `npm test` — Executa os testes unitários

## 🧑‍💻 Componentes

- **Consultant Card**: Exibe informações individuais do consultor
- **Consultant List**: Lista todos os consultores
- **Filter Toolbar**: Ferramenta para filtrar consultores

## 📚 Modelos & Serviços

- **consultant.model.ts**: Define a estrutura dos dados do consultor
- **consultant.service.ts**: Gerencia a lógica de acesso aos dados dos consultores

## 📝 Testes

Os testes unitários estão localizados nos arquivos `*.spec.ts` dentro de cada componente e serviço.

## 🎨 Estilo

O projeto utiliza TailwindCSS para estilização rápida e responsiva.

## 💡 Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests!

## 📄 Licença

Este projeto está sob a licença MIT.
