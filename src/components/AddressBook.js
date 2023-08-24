import DataContext from "../DataContext"
import { useContext } from 'react'
import { Link } from "react-router-dom"

function AddressBook(){
    const { addresses, setAddresses } = useContext(DataContext)
    
    const viewOnMap = (user) => {
        let URL = `http://maps.google.com/maps?z=12&t=m&q=loc:+${user.address.geo.lat}+${user.address.geo.lng}`
        console.log(URL)

    }

    const removeAddress = (user) => {
      
       setAddresses(oldValues => {
        return oldValues.filter(a => a.id !== user.id)
       })
    }
    console.log('addresses',addresses)
    return(
        <div>
              
            {
                addresses.map(user => {
                    return (
                        <div key={user.id} className="card">
                            <h3> {user.name}</h3>
                            <p>
                                <small>{user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}</small>
                            </p>
                       

                            <button className="address-btn" onClick={() => {removeAddress(user)}}>Delete</button>
                            <button className="address-btn"onClick={() => {viewOnMap(user)}}>Map</button>
                            <div>
                                <Link to={`user/${user.id}`} target="_blank" >{user.name}</Link>
                                
                                </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}
export default AddressBook
//  <Link to={`/address/${address.id}`}>{address.name}</Link>