<div align="center">
<img src= "https://raw.githubusercontent.com/GuilhermeTerriaga/time-90-HackatonCCR/main/ReadmeImages/Caminho%201801.svg">
</div>

<h3 align="center">Astro!</h3>
<hr>
Solução criada por Guilherme Terriaga, Tuana Barbosa, Gustavo Oliveira, Pedro Izidio e Tamara Prussak. Criamos uma plataforma gameficada para desenvolver habilidades que serão essenciais no futuro pessoal e profissional do indivíduo. Temos como objetivo desenvolver competências educacionais, financeiras e sociais . Astro é aquele sonho de infância de chegar às estrelas!!!

## Dependências para rodar o projeto
Instale as depêndencias:
* <a href="https://nodejs.org/">Node.js</a>
* <a href="https://yarnpkg.com/">Yarn</a>
* <a href="https://www.docker.com/">Docker</a>

### Comandos para excutar o projeto
Acesse a pasta do projeto pelo seu terminal de preferência e rode os seguintes comandos:
* para iniciar o container do docker: ```docker run --name database -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres```
* para instalar os modulos do node: ```yarn```
* para criar os bancos de dados: ```yarn sequelize db:migrate```
* para que o servidor inicie: ```yarn dev```
<div align="center">
<img src= "https://raw.githubusercontent.com/GuilhermeTerriaga/time-90-HackatonCCR/main/ReadmeImages/Web%201920%20%E2%80%93%202/Componente%204%20%E2%80%93%201.svg">
</div>
