import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';


const MealItemForm = (props) => {
    return  (
        <form className={classes.form}>
            <Input label="Amount" Input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                Step: '1',
                defaultValue: '1',
            }}/>
            <button> + add</button>
        </form>
        );
    };

export default MealItemForm