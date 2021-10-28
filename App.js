
import './App.css';
import {useState} from 'react' ;
const { ethers } = require("ethers");


function App() {

// connect to metamask
async function connect (){
 
  let selectedAddress = await window.ethereum.request({method:'eth_requestAccounts'});
 let  _provider = new ethers.providers.Web3Provider(window.ethereum);
  

}
// updating value in the browser USESTATE HOOK
let [a,setName]=useState('fgg')
function dcad(){
  setName('ddf')
}
// displaying an array
let arr=[{name:'don',age:21,id:1},
         {name:'emeka',age:13,id:2},
         {name:'water',age:24,id:4}
]

  return (
    <div className="App">
     {/* connect to metamask */}
     <button onClick= {connect} > ggg </button>
     {/* update value in browser */}
     <p>{a}</p>
     <button onClick= {dcad} > gff </button> 

     {arr.map((h)=>
       <div  key = {h.id} >
         <h1>{h.name}</h1>

       </div>
     )}
    </div>
  );
}

export default App;
