import DataContext from "../DataContext"
import { useContext } from 'react'
import { Link } from "react-router-dom"

function AddressBook(){
    const { addresses, setAddresses } = useContext(DataContext)
    
    const viewOnMap = (id) => {
        let URL = 'http://maps.google.com/maps?z=12&t=m&q=loc:38.9419+-78.3020'

    }

    const removeAddress = (id) => {
      
       setAddresses(oldValues => {
        return oldValues.filter(a => a.id !== id)
       })
    }
    console.log('addresses',addresses)
    return(
        <div>
              
                {addresses.map(address => {
                    return (
                        
                        <p key={address.id}>
                            {address.name}&nbsp;
                            ({address.address})
                            &nbsp;&nbsp;
                            <button onClick={() => {removeAddress(address.id)}}>Delete</button>
                            <button onClick={() => {viewOnMap(address.id)}}>Map</button>
                           
                           
                        </p>
                    )
                })
            }
            
        </div>
    )
}
export default AddressBook
//  <Link to={`/address/${address.id}`}>{address.name}</Link>