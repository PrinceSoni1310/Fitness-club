import React from 'react';
import './PlanDetail.css';
import { useParams } from 'react-router-dom';

const planDetails = {
  1: {
    name: "Balanced Nutrition Plan",
    calories: 2000,
    protein: 100,
    carbs: 200,
    fat: 67,
    image: "https://source.unsplash.com/600x400/?healthy,balanced",
    macroData: { protein: 100, carbs: 200, fat: 67 },
    meal: {
      name: "Greek Yogurt Parfait with Berries and Granola",
      info: "450 calories | 25g protein | 45g carbs | 18g fat",
      ingredients: [
        "1 cup Greek yogurt (plain, 2% fat)",
        "½ cup mixed berries (blueberries, strawberries)",
        "¼ cup low sugar granola",
        "1 tsp honey",
        "1 tbsp chia seeds",
      ],
    },
  },
};

const PlanDetail = () => {
  const { id } = useParams();
  const plan = planDetails[id];

  if (!plan) return <h2>Plan not found</h2>;

  return (
    <div className="plan-detail">
      <img className="banner" src={plan.image} alt={plan.name} />
      <div className="main-content">
        <div className="left">
          <h1>{plan.name}</h1>
          <p className="macro-title">Nutrition Overview</p>
          <ul className="macro-list">
            <li><b>Calories:</b> {plan.calories}</li>
            <li><b>Protein:</b> {plan.protein}g</li>
            <li><b>Carbs:</b> {plan.carbs}g</li>
            <li><b>Fat:</b> {plan.fat}g</li>
          </ul>

          <h3>Sample Meal Plan</h3>
          <div className="meal-box">
            <h4>{plan.meal.name}</h4>
            <p>{plan.meal.info}</p>
            <ul>
              {plan.meal.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="right">
          <div className="contact-box">
            <h3>Need Help?</h3>
            <p>Contact our dietitian:</p>
            <p><b>📞</b> +91 90234 84284</p>
            <p><b>📧</b> princeusadnt5130@gmail.com</p>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetail;
