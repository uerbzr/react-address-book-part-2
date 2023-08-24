import {useState, useContext} from 'react'
import DataContext from "../DataContext"

function AddAddressForm(){
    const { addresses, setAddresses } = useContext(DataContext)
    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        address:''
       
    })
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        console.log(formData)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        formData.id = addresses.length + 1
        setAddresses([{id:formData.id, name:formData.name, address:formData.address}, ...addresses])
    }

    
    return(
        <form onSubmit={handleSubmit} className='addressForm'>
            
            <div>
            <label htmlFor='nameInput'>Name</label>
            <input id='nameInput' type='text' name='name' value={formData.name} onChange={handleChange} />
            </div>
<div>

            <label htmlFor='addressInput'>Address</label>
            <input id='addressInput' type='text' name='address' value={formData.address.street} onChange={handleChange} />
</div>
            
            <input type="submit" />
            
        </form>
    )
}
export default AddAddressForm