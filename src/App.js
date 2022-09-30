
import './App.css';
import Details from './Details';

function App() {
  let data=[
    {
      name:"kamaraj",
      email:"kamaraj@gmail.com",
      mobile:"9876543210"
    },
    {
      name:"raj",
      email:"raj@gmail.com",
      mobile:"8976543210"
    },
    {
      name:"karthick",
      email:"karthick@gmail.com",
      mobile:"743210"
    }
  ]
  return <>
    <Details data={data}/>
  </>
 
}

export default App;
