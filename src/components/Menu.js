import { Link } from "react-router-dom"

function Menu(){
    return(
                <div className="column menu">                
                    <nav>
                    <Link to={`/add/`}>Add</Link>

                    </nav>
                </div>
    )
}
export default Menu