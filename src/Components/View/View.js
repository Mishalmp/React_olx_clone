import React,{useEffect,useState,useContext} from 'react';

import './View.css';
import { PostContext } from '../../store/postContext';
import { FirebaseContext } from '../../store/Context';
function View() {

  const [userDetails,setUserDetails]=useState()
  const {postdetails}=useContext(PostContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    const {userId} = postdetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        setUserDetails(doc.data)
        
      });
    })
  },[])


  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postdetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postdetails.price} </p>
          <span>{postdetails.name}</span>
          <p>{postdetails.category}</p>
          <span>{postdetails.createdAt}</span>
        </div>

        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{postdetails.username}</p>
          <p>{postdetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
