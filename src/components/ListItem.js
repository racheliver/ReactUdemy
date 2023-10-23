import './ListItem.css'
const ListItem = (props) => {
    return(
      <li className="goal-item" /*onClick={deleteHandler}*/>
        {props.children}
      </li>
    )
}

export default ListItem;