import {TiDelete} from 'react-icons/ti'

const ExpenseItem = (props) => {
    return ( <li className="list-group-item d-flex justify-content-between align-items-center">
        <span> {props.name}</span>
        <div >
             <span className="mr-3" style={{color:"black"}}  >${props.cost}</span> 
        <TiDelete size='1.5em'  >   </TiDelete>
        </div>
    </li> );
}
 
export default ExpenseItem;