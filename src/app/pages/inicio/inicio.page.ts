import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componentes[] = [
    {
      icone: 'attach-outline',
      nome: 'Alerta',
      link: '/alert',
      subtitulo: 'Janela Alerta'
    },
    {
      icone: 'chatbubble-ellipses-outline',
      nome: 'Modal',
      link: '/action-sheet',
      subtitulo: 'Janela Modal'
    },
    {
      icone: 'book-outline',
      nome: 'Cards',
      link: '/cards',
      subtitulo: 'Cards'
    },
    {
      icone: 'calendar-outline',
      nome: 'Datas',
      link: '/datas',
      subtitulo: 'Datas'
    },
    {
      icone: 'calendar-outline',
      nome: 'Grids',
      link: '/grids',
      subtitulo: 'Grids'
    },
    {
      icone: 'calendar-outline',
      nome: 'Inputs',
      link: '/inputs',
      subtitulo: 'Inputs'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  teste() {
    console.log('teste');
  }

}

interface Componentes {
  icone: string;
  nome: string;
  link: string;
  subtitulo: string;
}

