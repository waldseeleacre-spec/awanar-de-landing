import './style.css';
import { Hero } from './components/Hero';
import { Block2 } from './components/Block2';
import { Block3 } from './components/Block3';
import { Block4 } from './components/Block4';
import { Block5 } from './components/Block5';
import { Block6 } from './components/Block6';
import { Block7 } from './components/Block7';
import { Block8 } from './components/Block8';
import { BlockTimbauba } from './components/BlockTimbauba';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) {
    console.error('App container not found');
    return;
  }

  // Create Hero Section
  new Hero(app);
  
  // Create Block 2: What to expect
  new Block2(app);
  
  // Create Block 3: Location
  new Block3(app);
  
  // Create Block 4: Program
  new Block4(app);
  
  // Create Block 5: Logistics & Timeline
  new Block5(app);
  
  // Create Block 6: Transparency / O Que Está Incluso
  new Block6(app);
  
  // Create Block 7: A Ponte / Patricia
  new Block7(app);
  
  // Create Block Timbauba: Aldeia e Lideranças
  new BlockTimbauba(app);
  
  // Create Block 8: Testimonials / Erfahrungen
  new Block8(app);
});
