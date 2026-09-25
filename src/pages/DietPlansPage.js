import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DietPlansPage.css';
import DASHDiet from '../assets/images/DASH-Diet-Plan.jpg';
import AntiInflammatory from '../assets/images/Anti-Inflammatory-Diet-Plan.jpg';
import GlutenFree from '../assets/images/Gluten-Free-Diet-Plan.png';
import Balancednutrition from '../assets/images/Balanced-nutrition-diet.jpg';
import Ketodiet from '../assets/images/keto-diet-plan.jpg';
import MediterraneanDiet from '../assets/images/Mediterranean-Diet-Plan.jpeg';
import VegetableDiet from '../assets/images/Vegetable-Diet-Plan.jpeg';
import VeganDiet from '../assets/images/Vegan-Diet-Plan.jpeg';
import paleo from '../assets/images/Paleo-Diet-Plan.jpeg';
import lowcarb from '../assets/images/Low-Carb-Diet-Plan.jpeg';
import dash from '../assets/images/DASH-Diet-Plan.jpg';
import highprotein from '../assets/images/High-Protein-Diet-Plan.jpeg';
import intermittentfasting from '../assets/images/Intermittent-Fasting-Plan.jpeg';
import glutenfree from '../assets/images/Gluten-Free-Diet-Plan.png';

const plans = [
  {
    id: 1,
    title: 'Balanced Nutrition Plan',
    slug: 'balanced-nutrition',
    calories: 2000,
    protein: 100,
    carbs: 200,
    fat: 67,
    image: Balancednutrition,
  },
  {
    id: 2,
    title: 'Keto Diet Plan',
    slug: 'keto',
    calories: 1800,
    protein: 120,
    carbs: 50,
    fat: 120,
    image: Ketodiet,
  },
  {
    id: 3,
    title: 'Mediterranean Diet Plan',
    slug: 'mediterranean',
    calories: 2200,
    protein: 90,
    carbs: 250,
    fat: 70,
    image: MediterraneanDiet,
  },
  {
    id: 4,
    title: 'Vegetable Diet Plan',
    slug: 'vegetable',
    calories: 2000,
    protein: 75,
    carbs: 220,
    fat: 65,
    image: VegetableDiet,
  },
  {
    id: 5,
    title: 'Vegan Diet Plan',
    slug: 'vegan',
    calories: 1900,
    protein: 70,
    carbs: 230,
    fat: 60,
    image: VeganDiet,
  },
  {
    id: 6,
    title: 'Paleo Diet Plan',
    slug: 'paleo',
    calories: 2100,
    protein: 110,
    carbs: 150,
    fat: 80,
    image: paleo,
    },
  {
    id: 7,
    title: 'Low-Carb Diet Plan',
    slug: 'lowcarb',
    calories: 1800,
    protein: 130,
    carbs: 80,
    fat: 100,
    image: lowcarb,
  },
  {
    id: 8,
    title: 'DASH Diet Plan',
    slug: 'dash',
    calories: 2100,
    protein: 85,
    carbs: 230,
    fat: 65,
    image: DASHDiet,
  },
  {
    id: 9,
    title: 'High-Protein Diet Plan',
    slug: 'HighProtein',
    calories: 2200,
    protein: 150,
    carbs: 180,
    fat: 70,
    image: highprotein,
  },
  {
    id: 10,
    title: 'Intermittent Fasting Plan',
    slug: 'intermittentfasting',
    calories: 2000,
    protein: 100,
    carbs: 180,
    fat: 70,
    image: intermittentfasting,
  },
  {
    id: 11,
    title: 'Gluten-Free Diet Plan',
    slug: 'glutenfree',
    calories: 2000,
    protein: 80,
    carbs: 220,
    fat: 65,
    image: glutenfree,
  },
  {
    id: 12,
    title: 'Anti-Inflammatory Diet Plan',
    slug: 'AntiInflammatory',
    calories: 2100,
    protein: 90,
    carbs: 200,
    fat: 75,
    image: AntiInflammatory,
  },
];

function DietPlansPage() {
  const navigate = useNavigate();

  const handleViewPlan = (planSlug) => {
    navigate(`/diet-plans/${planSlug}`);
  };

  return (
    <div className="plans-page">
      <h1 className="page-title">Diet Plans</h1>
      <div className="plans-grid">
        {plans.map((plan) => (
          <div key={plan.id} className="diet-plan-card">
            <img
              src={plan.image}
              alt={plan.title}
              className="diet-plan-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Found";
              }}
            />
            <h2>{plan.title}</h2>
            <p>Calories: {plan.calories}</p>
            <p>
              Protein: {plan.protein}g | Carbs: {plan.carbs}g | Fat: {plan.fat}g
            </p>
            <button 
              onClick={() => handleViewPlan(plan.slug)} 
              className="view-plan-button"
            >
              View Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DietPlansPage;