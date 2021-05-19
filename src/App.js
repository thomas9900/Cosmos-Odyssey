import cosmos from './images/cosmos-img.png';
import './App.css';
import CustomerForm from './components/CustomerForm';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <h1>COSMOS ODYSSEY</h1>
        <img src={cosmos} />
        <CustomerForm />
      </header>
      
    </div>
  );
}

export default App;

/*
pseudo code

make a form where you can choose origin and destination

add a button to this form which will generate flight routes

add filters to select by 1) company name and/or 2) price 3) distance or travel time

create code to find transfer routes aka earth to neptune is earth -> uranus -> neptune 

book button for customer to make reservation to their name

store the last 15 pricelists that were active with api details




*/