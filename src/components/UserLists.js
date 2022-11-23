import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const UserLists = () => {
  return (
    <div className='bg-blue-300'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Robin Mahto</td>
            <td>robinmahto@gmail.com</td>
            <td><FaEdit  /></td>
            <td><FaTrashAlt /> </td>              
          </tr>     
        </tbody>
      </table>
    </div>
  )
}

export default UserLists