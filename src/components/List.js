import ListItem from './ListItem'
const List = (props) => {
    return (
        <ul>
            {props.data.map(item => (
                <ListItem key={item.id} id={item.id}>
                    {item.userName} {item.age}
                </ListItem>
                )
            )}
        </ul>
    );
};

export default List;