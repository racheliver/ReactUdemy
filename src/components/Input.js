import './Input.css';
const Input = (props) => {
    return (
        <form className="form-control">
            <label for="user-name" className="form-control label">Username</label>
            <input type="text" id="user-name" className="form-control input">

            </input>
            <label className="form-control label">Age (Years)</label>
            <input type="text" aria-label="lorem ipsum" className="form-control input">
    
            </input>
            <button className="btn">Add User</button>
        </form>
    );
};

export default Input;


