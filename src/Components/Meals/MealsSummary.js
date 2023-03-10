import classes from './MealsSummary.module.css';

const MealsSummary = props => {
  return 
    <section className={classes.summary}>
        <h2> Rosco's Famous Meals, Devivered Right To You!</h2>
        <p>Choose anyone of Rosco's Fav meals, made from fresh and never frozen ingredients</p>
        <p>Rosco's prides himself on creating a wonderful dining experience that will leave you wanting seconds...</p>
    </section>
};

export default MealsSummary;