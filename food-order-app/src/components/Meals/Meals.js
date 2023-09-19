import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from './AvailableMeals';

const Meals = (props) => {

    return (
        <Fragment>
            <AvailableMeals />
            <MealsSummary />
        </Fragment>
    )
}

export default Meals;