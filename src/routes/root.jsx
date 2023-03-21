import React, {useContext} from 'react'
import { AuthContext } from '../context/Auth';



export default function Root() {
const {currentUser} = useContext(AuthContext);
console.log(currentUser)
  return (
    <div>
      
    </div>
  )
}
