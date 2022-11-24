import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const UserLists = () => {
  return (
    <div className='w-3/6'>
      <table className='w-full border border-cyan-200'>
        <thead className='text-white'>
          <tr>
            <th className='py-2'>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className='text-center cursor-pointer text-white'>
          <tr>
            <td className='py-3'>Robin Mahto</td>
            <td>robinmahto@gmail.com</td>
            <td><button><FaEdit className='text-xl text-green-400	'/></button></td>
            <td><button><FaTrashAlt className='text-xl text-red-500	'/></button> </td>              
          </tr>     
        </tbody>
      </table>
    </div>
  )
}

export default UserLists