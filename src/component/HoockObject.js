import {useState} from 'react'


const HookObject = () => {
  const [userData,SetUserData]= useState ({firstname:"", lastname:""});

  const changeHandler = (e) => {
      //console.log(e.target.value);
      SetUserData({...userData,firstname:e.target.value})
  };
  const lastHandler = (e) => {
    //console.log(e.target.value);
    SetUserData({...userData,lastname:e.target.value})
};

    return ( 
      <form>
      <input type="text" value={userData.firstname} onChange={changeHandler}/>
      <input type="text" value={userData.lastname} onChange={lastHandler}/>
      <h2>my firstname is - {userData.firstname}</h2>
      <h2>my lastname is - {userData.lastname}</h2>
      </form>
     );
};
 
export default HookObject;
