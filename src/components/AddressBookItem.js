import DataContext from "../DataContext"
import { useContext } from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
function AddressBookItem()
{
    const { addresses, setAddresses } = useContext(DataContext)
    let { id } = useParams();
    
    return(
     <ul>
      <li>
           {console.log()}
            
           
      </li>
     </ul> 
      
    )
}

export default AddressBookItem