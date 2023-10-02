import React, { useEffect, useState } from 'react'
import UserDetailModal from '../user-details-modal/user-details-modal'
import { UserList } from './constant'
import './user.css'

function UserListComponent() {
  const [openDetailModal, setOpenDetailModal] = useState({
    value: false,
    id:0,
    data:{}
  })

  return (
    <>
    <div className="user-list-component">
        <h1 >Directory</h1>
        <div className='list-section'>
          {UserList.map((item, index) => (
            <div className={`user-data ${item.id==openDetailModal.id ? 'active':'' }`} key={index} onClick={()=>{setOpenDetailModal({value: true,data:item,id:item.id})}}>
              <div className="name-text">
                Name: {item.name}
              </div>
              <div className="post-text">
                Posts: {item.post}
              </div>
            </div>
          ))}
          </div>
        {openDetailModal.value === true ? (
          <UserDetailModal headingText={"Profile details"} style={{width: '500px'}} closeModal= {()=>{setOpenDetailModal({value:false,data:'',id:0})}} userData={openDetailModal.data}/>
        ):('')}

    </div>
    </>
  )
}

export default UserListComponent