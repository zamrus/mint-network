import React from "react";
import OneUser from "./OneUser";
import { useSelector } from "react-redux";

const Users = (props) => {
  let usersList = props.usersData.map(obj => {
    return <OneUser id={obj.id} name={obj.name} followed={obj.followed} />
  })
  return (
    <div>
      <div>Кнопки переключения по списку пользоваелей</div>
      {usersList}
    </div>
  )
}

const UsersContainer = () => {
  let usersData = useSelector(state => state.users.usersData);
  return (
    <Users usersData={usersData} />
  )
}

export default UsersContainer;