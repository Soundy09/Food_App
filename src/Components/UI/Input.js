import classes from './Input.module.css';

const Input = (props) => {
    return 
        <div className={classes.input}>
            <label html={props.label.id} 
            className={classes.label}>
                {props.label}
                    </label>
            <input id={props.input.id} {...props.input}/>
        </div>

};

export default Input;