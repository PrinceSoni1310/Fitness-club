import React from 'react';
import { Link } from 'react-router-dom';

function DietPlanCard({ plan }) {
  return (
    <div className="plan-card">
      <img src={plan.image} alt={plan.title} />
      <h2>{plan.title}</h2>
      <p>Calories: {plan.calories}</p>
      <p>Protein: {plan.protein}g | Carbs: {plan.carbs}g | Fat: {plan.fat}g</p>
      <Link to={`/plan/${plan.id}`}>View Plan</Link>
    </div>
  );
}

export default DietPlanCard;
