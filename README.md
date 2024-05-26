# Search Devs

## Descrição

Search Devs é uma aplicação Angular que busca perfils e repositórios da API pública do GitHub.

## Tecnologias utilizadas

[![My Skills](https://skillicons.dev/icons?i=typescript,nodejs,angular,docker,github)](https://skillicons.dev)

## Especificações

- [Node](https://nodejs.org/en/download/package-manager) v20.13.1
- [Npm](https://nodejs.org/en/download/package-manager) v10.8.0
- Angular CLI v18.0.1 `npm install -g @angular/cli@18`
- [Docker](https://www.docker.com/products/docker-desktop/) v26.0.0
- [GitHub](https://desktop.github.com/) v2.44.0

## Como executar o projeto

1. Clone o repositório:

```
git clone https://github.com/FabioVLucena/search-devs.git
```

2. Navegue para a pasta do aplicativo:

```
cd /search-devs
```

3. Execute a aplicação:

```
docker-compose up
```

## Desenvolvimento

1. Clone o repositório:

```
git clone https://github.com/FabioVLucena/search-devs.git
```

2. Navegue para a pasta do aplicativo:

```
cd /search-devs
```

3. Instalar dependências:

```
npm i
```

4. Inicie o servidor:

```
ng serve
```

5. Navegue para o endereço do servidor:

```
http://localhost:4200/
```

## Build

1. Clone o repositório:

```
git clone https://github.com/FabioVLucena/search-devs.git
```

2. Navegue para a pasta do aplicativo:

```
cd /search-devs
```

3. Instalar dependências:

```
npm i
```

4. Faça um build do projeto:

```
ng build
```

5. O artefato de build vai estar na seguinte pasta:

```
cd /dist
```

## Sobre o projeto

### Ferramentas

O Angular é um framework robusto com diversas implementações que facilitam a manipulação de DOM, roteamento do projeto e manipulação de dados. Fornecendo também configurações padronizadas e ferramentas integradas que aumentam a produtividade e ajudam nas boas práticas de desenvolvimento.

O Docker é um software de código aberto usado para implantar aplicativos dentro de containers virtuais. Facilitando o funcionamento dessas aplicações em diferentes ambientes e melhorando as práticas de escalonamento. Além de fornecer melhor desempenho e economia de espaço, pois suas praticas são baseadas em instalar apenas o necessário para o funcionamento do projeto.

### Estrutura

```
/src
  /app           'aplicação e configurações'
    /components  'componentes compartilhados'
    /interfaces  'interfaces de dados e dtos'
    /pages       'paginas da aplicação'
    /services    'services da aplicação'
  /assets        'imagens'
    /icons       'icones'
```

Optei por não escolher nenhuma biblioteca de componentes para ter liberdade total de costumização, construir o passo a passo te fornece mais controle e facilita a sua localização no código.


## Autor

[Fabio Vital Lucena da Silva](https://www.linkedin.com/in/fabio-vital-lucena/)
