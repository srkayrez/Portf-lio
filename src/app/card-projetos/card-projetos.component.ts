import { Component } from '@angular/core';

@Component({
  selector       : 'app-card-projetos',
  templateUrl    : './card-projetos.component.html',
  styleUrls      : ['./card-projetos.component.scss']
})
export class CardProjetosComponent {
  items : any =  [
    {
      title      : "Portal do entregador",
      subTitle   : "Projeto criado para suprir a necessidade dos entregadores de terem contatos uteis de facila acesso e compartilhamento",
      linkDeploy : "https://srkayrez.github.io/contatos-entregadores",
      linkRepo   : "https://github.com/srkayrez/contatos-entregadores"
    },
    {
      title      : "App Clima",
      subTitle   : "Projeto criado como trabalho da faculdade, utilizando IONIC FRAMEWORK",
      linkDeploy : "https://srkayrez.github.io/App-Clima/",
      linkRepo   : "https://github.com/srkayrez/App-Clima"
    },
    {
      title      : "Bingo",
      subTitle   : "Web site criado para treinar manipulaçao de DOM com JavaScript",
      linkDeploy : "https://srkayrez.github.io/Bingo",
      linkRepo   : "https://github.com/srkayrez/Bingo"
    },
    {
      title      : "UNIP",
      subTitle   : "Web site criado para ajudar meus amigos durante a faculdade.",
      linkDeploy : "https://srkayrez.github.io/Unip",
      linkRepo   : "https://github.com/srkayrez/Unip"
    },
    {
      title      : "ROBOTRON",
      subTitle   : "Web site criado para aprender manipulação de DOOM pela Alura.",
      linkDeploy : "https://robotrom2.vercel.app/",
      linkRepo   : "https://github.com/srkayrez/robotrom"
    },
  ]
}

