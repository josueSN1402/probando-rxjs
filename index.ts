import './style.css';

import { of, map, from } from 'rxjs';

async function testObservable() {
  const users = await fetch('https://randomuser.me/api/?results=5');
  const datos = from(users.json());

  datos.subscribe({
    next(response) {
      console.log('Respuesta: ', response);
    },
    error(reject) {
      console.log('Respuesta: ', reject);
    },
    complete() {
      console.log('Completado');
    },
  });
}

testObservable();
