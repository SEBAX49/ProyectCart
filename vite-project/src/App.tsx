const cartaEjemplo = {numero: '1' , Elemento: 'fuego'};

function Carta({carta}) {
  return <h1>hola soy la carta {carta.numero} {carta.Elemento}</h1>
}

export default function App() {
  return (
      <div>
        <Carta carta={cartaEjemplo}/>
      </div>
  );   
}
