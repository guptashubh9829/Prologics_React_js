import React from 'react';
import './App.css';
function App() {
  const[userData, setUserData] = React.useState([]);
  const[userDatanochange, setUserDataNochange] = React.useState([]);
  const[searchBoxValue, setSearchBoxValue] = React.useState();

  React.useEffect(()=>{
    console.log('hello');
    userAllData()
  },[])
  const userAllData = async ()=>{
    await fetch("https://6437c5e20c58d3b14578cb1c.mockapi.io/user/userInfo").then((res)=>{
      return res.json()
    }).then((data)=>{
      setUserData(data)
      setUserDataNochange(data)
    })
  };
  const inputChange = (value) => {
    setSearchBoxValue(value)
    console.log(value);
      const arr = userDatanochange.filter((ele)=>{ return ele.name.includes(value)})
    setUserData(arr);
    console.log(arr);
  }
  return (
    <>
    <div className="App">
       <input value={searchBoxValue} onChange={(e)=>inputChange(e.target.value)}/>
     {userData.length>0 &&
      userData.map((ele,index)=>{
        return(
          <div className='d-flex' key={index}>
            <img src={ele.avatar} alt="profile" height={100} width={150}/>
            <p>{ele.name}</p>
          </div>
          )
      })
     }
    </div>
    </>
  );
}

export default App;
