import './App.css';
import React, {useState}  from 'react'; 

import Abi from './abistaking.json';
import tokenAbi from './abitoken.json';

const { ethers } = require("ethers");


function App() {

const [token,setName]=useState()
const [staking,setName1]=useState()


const [_approve,approve]=useState(false)
const [_approving,approving]=useState(true)
const [_approved,approved]=useState(true)
const [_loading,loading]=useState(false)
const [_loadings,loadings]=useState(false)
const [bal,checkbal]=useState()


const [tittle,settitle]=useState('usdt')


const [_provider,setprint13]=useState()

 
async function connect (){
  


 await window.ethereum.request({method:'eth_requestAccounts'});
 let  provider =  new ethers.providers.Web3Provider(window.ethereum);
//  localStorage.setItem('provider', ' new ethers.providers.Web3Provider(window.ethereum)')
//  let g= localStorage.getItem('provider')
//  var obj = JSON.parse(g)
 setprint13(provider);
 console.log(provider);
 let _staking = new ethers.Contract(
  '0x26d5592E71D09B02C91c7Bb4C4952Bf9788Df702', //contract address
  Abi.abi, //abi code of our contract
  provider.getSigner(0) //signer object 
);
setName1(_staking)
 

}


console.log('hhuuj',_provider)
function set(){
  let address
 if (tittle==='usdt'){
    address='0xaD8b942802017066eD15e4d8a280A9B7b13e56c4'
 }
 if (tittle==='shibatoken'){
  address='0xFD9Cc74A721B528eAefEffd43DCF554805cB3D9f'
}
if (tittle==='dai'){
  address='0xcE5C3529E84a51fab4A3AA07cd10160b42015870'
}
if (tittle==='busd'){
  address='0xDA4C6Fc23137539c19a259D9E00CD04e63FFbfD4'
}


 console.log('ddff',address)
 let _token = new ethers.Contract(
  address, //contract address
  tokenAbi.abi, //abi code of our contract
  _provider.getSigner(0) //signer object 
); 
 
setName(_token)
}
// set()
console.log('hhhh',tittle)
// function checks(){
//   console.log("check",_provider);
// }



//  useEffect( function (){
 
// console.log('ffff',_provider);

 
 

// } )

function   _stake(){
  approve(true)
  set()
  approving(false)
  
  
  
 }
 async function   _approves(){
  approving(true)
  loading(true)
  let tdx= await staking.checkBalance(tittle)

  let tx= await token.approve('0x26d5592E71D09B02C91c7Bb4C4952Bf9788Df702',tdx.toString())
  await tx.wait();
  console.log('gggddd')
  loading(false)
  approved(false)
 }

console.log('fff',tittle)
async function   _supply(){
  
  approved(true)
  loadings(true)
  // console.log('ddd',tittle)
  // console.log(staking)
//   isfinished(true)
//   _show('loading....')
  // //  let d=print *Math.pow(10,18)
  // // //  let g= ethers.BigNumber.from(d.toString())
  // // //  let n=ethers.utils.formatEther( d.toString() )
  //  let f=d.toString()
  let tdx= await staking.checkBalance(tittle)
  let tx= await staking.stake(tdx.toString(),tittle)
   await tx.wait();
   loadings(false)
   approve(false)
//   isfinished(false)
 
}

async function   _withdraw(){ 
//  let tx= await token.update(tittle)
set()
 await staking.withdraw(tittle)

 
}

async function   _checkbal(){ 
  //  let tx= await token.update(tittle)
  set()
   let tx= await staking.checkBalance(tittle)
 
   console.log('ggg' ,tx.toString())
   let s=Math.pow(10,18)
   checkbal(tx.toString()/s)

  
   
  }
  async function   gettoken(){ 
    
    //  let tx= await token.update(tittle)
     await staking.gettoken(tittle)
    //  checkbal(tx)
    
     
    }

  return (
    <div className="App">
      <div className='d'>
        <div></div>
     <button onClick= {connect} className='btn btn-success'> CONNECT METAMASK</button>
     </div>
     
     {/* display loading.... if  ispending is true  if false stop displaying loading.... */}
    <div className='g'>
      <div className='h'> 
     
      {/* <input type="text" onChange={(e)=>settitle(e.target.value)} placeholder="TOKEN NAME" className='first' /> */}
      <br />
      {/* <input type="text" onChange={(e)=>setprint(e.target.value)} placeholder="amount" className='first'/> */}
      <br />
     
      </div>
    
     {!_approve && <button className='btn btn-success h' onClick={ _stake}  > STAKE </button>}
     
      {!_approving && <div>  <button className='btn btn-success' onClick={_approves}> APPROVE </button> </div> }
      {_loading && <div> {'waiting........'} </div> }
      {!_approved && <div>  <button className='btn btn-success' onClick={_supply}> SUPPLYTOKEN </button> </div> }
       {_loadings && <div> {'waiting........'} </div> } 
      <br />
      
      <button className='btn btn-success' onClick={_withdraw}> WITHDRAW </button>
      <br />
      {/* <div>{check1}</div> */}
      </div>
      <select onChange={(e)=>settitle(e.target.value)} name="" id="">
        <option value="usdt">usdt</option>
        <option value="shibatoken">shibatoken</option>
        <option value="dai">dai</option>
        <option value="busd">busd</option>
    </select>
   <br />
   
      <button className='btn btn-success' onClick={gettoken}>GETTOKEN</button>
<br />
<br />
       <h3>{bal} </h3>
      <button className='btn btn-success' onClick={_checkbal}>CHECKBALANCE</button>

      
      
     
    </div>
  );
}

export default App;
