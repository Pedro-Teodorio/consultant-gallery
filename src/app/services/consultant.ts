import { Injectable } from '@angular/core';
import { Consultant } from '../models/consultant.model';

@Injectable({
  providedIn: 'root',
})
export class ConsultantService {
  private consultants: Consultant[] = [
    {
      id: 1,
      name: 'Ana Silva',
      title: 'Especialista em Cloud Computing',
      bio: 'Arquiteta de soluções cloud com 8+ anos de experiência em AWS e Azure.',
      expertise: ['Cloud Computing', 'DevOps', 'Arquitetura de Software'],
      location: 'São Paulo, SP',
      rating: 4.9,
      image: 'https://i.pravatar.cc/150?img=32',
      experience: '8+ anos',
    },
    {
      id: 2,
      name: 'Carlos Mendes',
      title: 'Consultor de Cibersegurança',
      bio: 'Especialista em segurança da informação e compliance para empresas de grande porte.',
      expertise: ['Cibersegurança', 'Compliance', 'Gestão de Riscos'],
      location: 'Rio de Janeiro, RJ',
      rating: 4.8,
      image: 'https://i.pravatar.cc/150?img=52',
      experience: '10+ anos',
    },
    {
      id: 3,
      name: 'Marina Costa',
      title: 'Data Scientist Senior',
      bio: 'Cientista de dados com foco em machine learning e análise preditiva.',
      expertise: ['Data Science', 'Machine Learning', 'Analytics'],
      location: 'Belo Horizonte, MG',
      rating: 4.9,
      image: 'https://i.pravatar.cc/150?img=31',
      experience: '6+ anos',
    },
    {
      id: 4,
      name: 'Roberto Lima',
      title: 'Arquiteto de Software',
      bio: 'Especialista em arquiteturas escaláveis e modernização de sistemas legados.',
      expertise: ['Arquitetura de Software', 'Microserviços', 'Modernização'],
      location: 'Brasília, DF',
      rating: 4.7,
      image: 'https://i.pravatar.cc/150?img=12',
      experience: '12+ anos',
    },
    {
      id: 5,
      name: 'Fernanda Oliveira',
      title: 'Consultora DevOps',
      bio: 'Especialista em automação, CI/CD e cultura DevOps para transformação digital.',
      expertise: ['DevOps', 'Automação', 'CI/CD'],
      location: 'Porto Alegre, RS',
      rating: 4.8,
      image: 'https://i.pravatar.cc/150?img=26',
      experience: '7+ anos',
    },
    {
      id: 6,
      name: 'João Santos',
      title: 'Consultor de Blockchain',
      bio: 'Pioneiro em soluções blockchain e criptomoedas para o mercado brasileiro.',
      expertise: ['Blockchain', 'Criptomoedas', 'Web3'],
      location: 'Florianópolis, SC',
      rating: 4.6,
      image: 'https://i.pravatar.cc/150?img=54',
      experience: '5+ anos',
    },
  ];

  getConsultants(filter: string = ''): Consultant[] {
    if (filter === 'Todas' || !filter) {
      return this.consultants;
    }

    return this.consultants.filter((consultant) => consultant.expertise.includes(filter));
  }

  getExpertise(): string[] {
    const expertise = this.consultants.flatMap((c) => c.expertise);
    return ['Todas', ...new Set(expertise)];
  }
}
