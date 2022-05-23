import logo from './logo.svg';
import './App.css';
import './table.css';
import  { useState } from 'react';

function App() {
  
  const[maindata,setmaindata]=useState([])
  const[RoolNo,setrono]=useState([])
  const[NAME,setname]=useState([])
  const[subject1,sets1]=useState([])
  const[subject2,sets2]=useState([])
  const[subject3,sets3]=useState([])
  const[subject4,sets4]=useState([])
  const[subject5,setsubject5]=useState([])
  const [editdata,seteditdata]=useState(false);
  const[editdata1,seteditdata1]=useState('');

  const from = () =>{
    let obj = {
      RoolNo: RoolNo,
       NAME:NAME,
       subject1:subject1,
       subject2:subject2,
       subject3:subject3,
       subject4:subject4,
       subject5:subject5  
    }
       
    if(editdata)
    {
      const updatedoobj=maindata.map((user,ind)=>
      ind == editdata1 ? obj:user
      );

          seteditdata(updatedoobj)
    }
    else
    {
      setmaindata([...maindata,obj]);
    }
  }
   

  // }

  // const edithandler =(i)=>
  // {
  //     maindata.spilce(i,1)
  //     setmaindata([...maindata])

  //     seteditdata(true);
  //     seteditdata1(i);

  //     const getdata = maindata[i];
  //     setrono(getdata.RollNo);
  //     setname(getdata.NAME);
  //     set

  // }

  




  return (
    <div className="App">

      <div>
        <h1>STUDENT RESULT</h1>
        <from>
          <table  align='center' border='1px solid black' >
            <tr>
              <td>RollNo</td>
              <td>NAME</td>
              <td>subject1</td>
              <td>subject2</td>
              <td>subject3</td>
              <td>subject4</td>
              <td>subject5</td>
            </tr>
              <tr>
                <td><input type="texr" onChange={(a)=>(setrono(a.target.value))} value={RoolNo}></input></td>
                <td><input type="texr" onChange={(a)=>(setname(a.target.value))} value={NAME}></input></td>
                <td><input type="texr" onChange={(a)=>(sets1(a.target.value))}   value={subject1}></input></td>
                <td><input type="texr" onChange={(a)=>(sets2(a.target.value))}   value={subject2}></input></td>
                <td><input type="texr" onChange={(a)=>(sets3(a.target.value))}   value={subject3}></input></td>
                <td><input type="texr" onChange={(a)=>(sets4(a.target.value))}   value={subject4}></input></td>
                <td><input type="texr" onChange={(a)=>(setsubject5(a.target.value))} value={subject5}></input></td>
              </tr>
          </table>
            <input type="button" value="submit" onClick={from}></input>
        </from> 

        <hr></hr>
        <h4>PRINT VALUE</h4>
        <table align="center" border="1px solid pink"  >
          <tr>
            <td>id</td>
            <td>RollNO</td>
            <td>NAME</td>
            <td>subject1</td>
            <td>subject2</td>
            <td>subject3</td>
            <td>subject4</td>
            <td>subject5</td>
            <td>Total</td>
            <td>avg</td>
          </tr>
          {

            maindata.map((item,i)=>{
              let sum=Number(item.subject1)+Number(item.subject2)+Number(item.subject3)+Number(item.subject4)+Number(item.subject5)
              let avg=(Number(item.subject1)+Number(item.subject2)+Number(item.subject3)+Number(item.subject4)+Number(item.subject5))/5;
              
                return(
                  
                  <tr>
                    <td>{i}</td>
                    <td>{item.RollNo}</td>
                    <td>{item.NAME}</td>
                    <td>{item.subject1}</td>
                    <td>{item.subject2}</td>
                    <td>{item.subject3}</td>
                    <td>{item.subject4}</td>
                    <td>{item.subject5}</td>
                    <td>{sum}</td>
                    <td>{avg}</td>  

                 {/* <td><input type="button" value="EDIT" onClick={()=>{ edithandler(i)}} ></input></td> 
                  <td><input type="button" value="Delete"  onClick={()=>{deletehandler(i)}} ></input></td>      */}
                  </tr>
                  
                )

            }
              
            )

          }
        </table>
      </div>

        
    </div>
  );
}

export default App;
