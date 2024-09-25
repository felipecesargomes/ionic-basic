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

