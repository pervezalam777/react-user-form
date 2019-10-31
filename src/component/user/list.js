import React, {memo} from "react";
import "./list.css"

const userList =  ({list}) => (
  list.length > 0 && 
  <table className="user-list">
    <thead>
      <tr>
        <th>Users Detail</th>
      </tr>
    </thead>
    <tbody>
      {list.map(item => (
        <tr>
          <td>{JSON.stringify(item)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default memo(userList);
