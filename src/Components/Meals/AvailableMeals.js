import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const DUMMY_MEAlS = [
    {
        id: 'm1',
        name: 'Roscos Smash Burger',
        description: 'Fresh local organic beed smashed to roscos perfection',
        price: 12.99,
      },
      {
        id: 'm2',
        name: 'Deep Fried Chicken',
        description: 'A classic dish with Roscos secret spice blend',
        price: 12.50,
      },
      {
        id: 'm3',
        name: 'Fish & Chips',
        description: 'Double deep fried to perfection',
        price: 12.99,
      },
      {
        id: 'm4',
        name: 'Spaghetti & Meatballs',
        description: 'A signature Rosco dish passed down from generation to generation',
        price: 18.99,
      },
]

const AvailableMeals = () => {
    const mealsList = DUMMY_MEAlS.map(meal => 
    <MealItem 
        id={meal.id}
        key={meal.id} 
        name={meal.name} 
        description={meal.description}
        price={meal.price}
        />);

    return (
        <section className={classes.meals}>
            <Card>
            <ul>
                {mealsList}
            </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;