import './App.css';
import { useState, useEffect } from "react"
import { Routes, Route} from 'react-router-dom'
import AddressBook from './components/AddressBook';
import DataContext from './DataContext'
import AddressBookItem from './components/AddressBookItem';
import AddAddressForm from './components/AddAddressForm';
function App() {
    const[addresses, setAddresses] = useState([])

    async function getUserData() {
        const url = `https://jsonplaceholder.typicode.com/users`
        const response = await fetch(url)
        const json = await response.json()
        setAddresses(json)
      }
      useEffect(() => {        
        getUserData();
      }, []) 

    
    
    return (
        <div>
                   
        <DataContext.Provider value={{addresses, setAddresses}}>
            <h2>React Address Book</h2>
            <div className="row">
                <div className="column menu">
                <h2>Menu</h2>
                <p>All Addresses</p> 
                <p>Add Address</p>
                <AddAddressForm />
                </div>
                <div className="column addresses">
                <h2>Addresses</h2>
                <AddressBook />
                </div>
            </div>


        </DataContext.Provider>
  
        </div>
        
    );
}

export default App;

/*
 <Routes>
                <Route path='/add' element={<AddAddressForm />} />

 
            </Routes>  

<Routes>
                <Route path='/addresses' element={<Addresses />} />
                <Route path='/addresses/:id' element={<AddressBookItem />}  />
 
            </Routes>



                async function getUserData() {
        const url = `https://jsonplaceholder.typicode.com/users`
        const response = await fetch(url)
        const json = await response.json()
        setAddresses(json.results)
      }

      useEffect(() => {
        getUserData()
      }, [])

*/