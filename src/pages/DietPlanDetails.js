import React from 'react';
import { useParams } from 'react-router-dom';
import './DietPlanDetails.css';
import { Pie } from 'react-chartjs-2';
import Balancednutrition from '../assets/images/Balanced-nutrition-diet.jpg';
import Ketodiet from '../assets/images/keto-diet-plan.jpg';
import MediterraneanDiet from '../assets/images/Mediterranean-Diet-Plan.jpeg';
import vegetable from '../assets/images/Vegetable-Diet-Plan.jpeg';
import vegan from '../assets/images/Vegan-Diet-Plan.jpeg';
import paleo from '../assets/images/Paleo-Diet-Plan.jpeg';
import lowcarb from '../assets/images/Low-Carb-Diet-Plan.jpeg';
import dash from '../assets/images/DASH-Diet-Plan.jpg';
import highprotien from '../assets/images/High-Protein-Diet-Plan.jpeg';
import intermittentfasting from '../assets/images/Intermittent-Fasting-Plan.jpeg';
import glutenfree from '../assets/images/Gluten-Free-Diet-Plan.png';
import AntiInflammatory from '../assets/images/Anti-Inflammatory-Diet-Plan.jpg';
import {

  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const allPlans = [
  {
    id: 1,
    slug: 'balanced-nutrition',
    title: 'Balanced Nutrition Plan',
    description: 'A well-rounded diet with balanced macronutrients for general health and fitness.',
    calories: 2000,
    protein: 100,
    carbs: 200,
    fat: 67,
    image: Balancednutrition,
    sampleMeal: {
      title: 'Greek Yogurt Parfait with Berries and Granola',
      calories: 450,
      protein: 25,
      carbs: 45,
      fat: 18,
      ingredients: [
        '1 cup Greek yogurt (plain, 2% fat)',
        '1/2 cup mixed berries (strawberries, blueberries)',
        '1/4 cup low sugar granola',
        '1 tbsp honey',
        '1 tbsp chia seeds',
        '1 cup black coffee or tea (optional)'
      ]
    },
    benefits: [
      {
        title: 'Balanced Macronutrients',
        text: 'Provides optimal ratios of protein, carbs, and fats to support overall health and energy needs.'
      },
      {
        title: 'Muscle Support',
        text: 'Adequate protein intake helps maintain and build lean muscle mass during exercise.'
      },
      {
        title: 'Sustained Energy',
        text: 'Complex carbs and quality proteins work together to maintain consistent energy levels.'
      },
      {
        title: 'Micronutrient Rich',
        text: 'Diverse food sources ensure you get essential vitamins and minerals needed for optimal health.'
      }
    ]
  },
  {
    id: 2,
    slug: 'keto',
    title: 'Keto Diet Plan',
    description: 'A high-fat, low-carb diet designed to shift your body into ketosis for fat burning.',
    calories: 1800,
    protein: 120,
    carbs: 50,
    fat: 120,
    image: Ketodiet,
    sampleMeals: [
      {
        meal: 'Breakfast',
        name: 'Avocado and Bacon Eggs',
        calories: 450,
        description: '2 eggs fried in butter, 2 strips bacon, 1/2 avocado, spinach leaves',
        nutrition: '25g protein | 8g carbs | 38g fat'
      },
      {
        meal: 'Lunch',
        name: 'Keto Caesar Salad with Chicken',
        calories: 520,
        description: '4oz grilled chicken thighs, romaine lettuce, parmesan cheese, caesar dressing (no croutons)',
        nutrition: '35g protein | 12g carbs | 42g fat'
      },
      {
        meal: 'Dinner',
        name: 'Butter Garlic Steak with Asparagus',
        calories: 580,
        description: '6oz ribeye steak cooked in butter, grilled asparagus with garlic, side salad with olive oil',
        nutrition: '45g protein | 15g carbs | 48g fat'
      }
    ],
    benefits: [
      {
        title: 'Rapid Fat Loss',
        text: 'Ketosis helps your body efficiently burn stored fat for energy, leading to quick weight loss results.'
      },
      {
        title: 'Appetite Control',
        text: 'High fat and protein content keeps you satiated longer, reducing cravings and snacking.'
      },
      {
        title: 'Mental Clarity',
        text: 'Ketones provide steady fuel for the brain, often resulting in improved focus and mental performance.'
      },
      {
        title: 'Blood Sugar Stability',
        text: 'Very low carb intake helps stabilize blood glucose levels and improve insulin sensitivity.'
      }
    ],
    tips: [
      'Track your macros carefully - aim for 70-80% fat, 15-25% protein, 5-10% carbs',
      'Stay hydrated and supplement with electrolytes (sodium, potassium, magnesium)',
      'Expect "keto flu" in the first week as your body adapts',
      'Focus on healthy fats like avocados, olive oil, nuts, and fatty fish',
      'Test ketone levels with strips or blood meter to confirm ketosis'
    ]
  },
  {
    id: 3,
    slug: 'mediterranean',
    title: 'Mediterranean Diet Plan',
    description: 'A heart-healthy diet based on traditional eating patterns of Mediterranean countries.',
    calories: 2200,
    protein: 90,
    carbs: 250,
    fat: 70,
    image: MediterraneanDiet,
    sampleMeals: [
      {
        meal: 'Breakfast',
        name: 'Mediterranean Breakfast Bowl',
        calories: 480,
        description: 'Greek yogurt with honey, walnuts, figs, and a drizzle of olive oil',
        nutrition: '20g protein | 45g carbs | 22g fat'
      },
      {
        meal: 'Lunch',
        name: 'Quinoa Tabbouleh with Chickpeas',
        calories: 520,
        description: 'Quinoa tabbouleh with cucumber, tomatoes, parsley, lemon dressing, and chickpeas',
        nutrition: '18g protein | 68g carbs | 16g fat'
      },
      {
        meal: 'Dinner',
        name: 'Grilled Fish with Ratatouille',
        calories: 580,
        description: 'Grilled sea bass with Mediterranean ratatouille and a side of whole grain bread',
        nutrition: '38g protein | 52g carbs | 18g fat'
      }
    ],
    benefits: [
      {
        title: 'Heart Health',
        description: 'Rich in omega-3 fatty acids and antioxidants that support cardiovascular health and reduce inflammation.'
      },
      {
        title: 'Brain Function',
        description: 'Olive oil, fish, and nuts provide nutrients that support cognitive function and may reduce dementia risk.'
      },
      {
        title: 'Longevity',
        description: 'Associated with increased lifespan and reduced risk of chronic diseases in multiple studies.'
      },
      {
        title: 'Weight Management',
        description: 'High fiber and healthy fats promote satiety while providing sustained energy for weight control.'
      }
    ],
    tips: [
      'Use extra virgin olive oil as your primary cooking fat',
      'Eat fish at least twice a week, focusing on fatty fish like salmon and sardines',
      'Include plenty of fresh fruits and vegetables in every meal',
      'Choose whole grains over refined grains',
      'Enjoy moderate amounts of red wine with meals (if you drink alcohol)'
    ]
  },
  {
    id: 4,
    slug: 'vegetable',
    title: 'vegetable Diet Plan',
    description: 'A plant-based diet rich in vegetables, fruits, grains, and legumes for optimal health.',
    calories: 2000,
    protein: 75,
    carbs: 220,
    fat: 65,
    image: vegetable,
    sampleMeals: [
      {
        meal: 'Breakfast',
        name: 'Vegetable Scramble with Toast',
        calories: 420,
        description: 'Scrambled eggs with bell peppers, spinach, mushrooms, served with whole grain toast',
        nutrition: '22g protein | 38g carbs | 20g fat'
      },
      {
        meal: 'Lunch',
        name: 'Lentil and Vegetable Curry',
        calories: 520,
        description: 'Red lentil curry with mixed vegetables, served with brown rice and naan bread',
        nutrition: '24g protein | 78g carbs | 14g fat'
      },
      {
        meal: 'Dinner',
        name: 'Stuffed Bell Peppers',
        calories: 480,
        description: 'Bell peppers stuffed with quinoa, black beans, corn, and topped with cheese',
        nutrition: '20g protein | 68g carbs | 16g fat'
      }
    ],
    benefits: [
      {
        title: 'High Fiber Intake',
        description: 'Abundant vegetables and whole grains provide excellent fiber for digestive health and satiety.'
      },
      {
        title: 'Antioxidant Rich',
        description: 'Colorful vegetables and fruits provide powerful antioxidants that fight free radicals and inflammation.'
      },
      {
        title: 'Lower Cholesterol',
        description: 'Plant-based foods naturally contain no cholesterol and can help reduce blood cholesterol levels.'
      },
      {
        title: 'Environmental Benefits',
        description: 'Plant-based eating has a lower environmental impact compared to meat-heavy diets.'
      }
    ],
    tips: [
      'Combine different protein sources (beans + rice) to get complete amino acid profiles',
      'Include B12 supplements or fortified foods to prevent deficiency',
      'Eat iron-rich plants with vitamin C sources to enhance absorption',
      'Plan meals around seasonal, local vegetables for best nutrition and flavor',
      'Include healthy fats from nuts, seeds, and avocados for nutrient absorption'
    ]
  },
  {
    id: 5,
    slug: 'vegan',
    title: 'Vegan Diet Plan',
    description: 'A completely plant-based diet excluding all animal products while maintaining nutritional balance.',
    calories: 1900,
    protein: 70,
    carbs: 230,
    fat: 60,
    image: vegan,
    sampleMeals: [
      {
        meal: 'Breakfast',
        name: 'Overnight Oats with Berries',
        calories: 380,
        description: 'Oats soaked in almond milk with chia seeds, berries, and maple syrup',
        nutrition: '12g protein | 58g carbs | 12g fat'
      },
      {
        meal: 'Lunch',
        name: 'Buddha Bowl with Tahini Dressing',
        calories: 520,
        description: 'Quinoa bowl with roasted vegetables, chickpeas, avocado, and tahini dressing',
        nutrition: '18g protein | 68g carbs | 20g fat'
      },
      {
        meal: 'Dinner',
        name: 'Lentil Bolognese with Pasta',
        calories: 580,
        description: 'Whole grain pasta with lentil-based bolognese sauce and nutritional yeast',
        nutrition: '24g protein | 86g carbs | 14g fat'
      }
    ],
    benefits: [
      {
        title: 'Heart Health',
        description: 'Zero cholesterol and high fiber content support cardiovascular health and lower blood pressure.'
      },
      {
        title: 'Weight Management',
        description: 'High fiber and water content in plant foods promote satiety with lower calorie density.'
      },
      {
        title: 'Reduced Disease Risk',
        description: 'Associated with lower risks of certain cancers, diabetes, and other chronic diseases.'
      },
      {
        title: 'Ethical Impact',
        description: 'Aligns with animal welfare values while reducing environmental footprint significantly.'
      }
    ],
    tips: [
      'Take B12 supplements regularly as this vitamin is not found in plant foods',
      'Include fortified plant milks and nutritional yeast for additional B vitamins',
      'Combine legumes with grains to create complete protein profiles',
      'Focus on iron-rich foods like spinach, lentils, and pumpkin seeds',
      'Plan meals carefully to ensure adequate protein and calorie intake'
    ]
  },
  {
    id: 6,
    slug: 'paleo',
    title: 'Paleo Diet Plan',
    description: 'A diet based on foods presumed to be eaten by early humans, focusing on whole, unprocessed foods.',
    calories: 2100,
    protein: 110,
    carbs: 150,
    fat: 80,
    image: paleo,
    sampleMeals: [
      {
        meal: 'Breakfast',
        name: 'Sweet Potato Hash with Eggs',
        calories: 450,
        description: 'Roasted sweet potato hash with bell peppers, onions, and two poached eggs',
        nutrition: '20g protein | 42g carbs | 22g fat'
      },
      {
        meal: 'Lunch',
        name: 'Grilled Chicken with Roasted Vegetables',
        calories: 520,
        description: '5oz grilled chicken breast with roasted Brussels sprouts, carrots, and sweet potato',
        nutrition: '42g protein | 35g carbs | 18g fat'
      },
      {
        meal: 'Dinner',
        name: 'Grass-Fed Beef with Cauliflower Mash',
        calories: 580,
        description: '6oz grass-fed beef sirloin with cauliflower mash and sautéed green beans',
        nutrition: '48g protein | 28g carbs | 26g fat'
      }
    ],
    benefits: [
      {
        title: 'Whole Foods Focus',
        description: 'Eliminates processed foods, additives, and preservatives for cleaner nutrition.'
      },
      {
        title: 'Improved Digestion',
        description: 'Removal of grains and legumes may help those with digestive sensitivities or autoimmune conditions.'
      },
      {
        title: 'Stable Blood Sugar',
        description: 'Focus on protein and healthy fats helps maintain steady blood glucose levels.'
      },
      {
        title: 'Anti-Inflammatory',
        description: 'Emphasizes foods with anti-inflammatory properties while avoiding potential inflammatory triggers.'
      }
    ],
    tips: [
      'Focus on grass-fed meats and wild-caught fish for better nutrient profiles',
      'Include plenty of non-starchy vegetables for fiber and micronutrients',
      'Use healthy cooking fats like coconut oil, olive oil, and avocado oil',
      'Incorporate organ meats occasionally for nutrient density',
      'Allow for occasional sweet potato or other starchy vegetables post-workout'
    ]
  },
  {
    id: 7,
    slug: 'lowcarb',
    title: 'Low-Carb Diet Plan',
    description: 'A diet that restricts carbohydrates to promote weight loss and metabolic health.',
    calories: 1800,
    protein: 130,
    carbs: 80,
    fat: 100,
    image: lowcarb,
    sampleMeals: [
      {
        meal: 'Breakfast',
        name: 'Cheese and Vegetable Omelet',
        calories: 420,
        description: '3-egg omelet with cheddar cheese, spinach, and mushrooms cooked in butter',
        nutrition: '28g protein | 8g carbs | 32g fat'
      },
      {
        meal: 'Lunch',
        name: 'Chicken Caesar Salad Wrap',
        calories: 480,
        description: 'Grilled chicken wrapped in lettuce leaves with caesar dressing and parmesan',
        nutrition: '38g protein | 12g carbs | 28g fat'
      },
      {
        meal: 'Dinner',
        name: 'Zucchini Noodles with Meatballs',
        calories: 520,
        description: 'Spiralized zucchini with turkey meatballs in marinara sauce, topped with mozzarella',
        nutrition: '42g protein | 18g carbs | 32g fat'
      }
    ],
    benefits: [
      {
        title: 'Weight Loss',
        description: 'Restricting carbs can lead to rapid initial weight loss and reduced appetite.'
      },
      {
        title: 'Blood Sugar Control',
        description: 'Lower carb intake helps stabilize blood glucose and may improve insulin sensitivity.'
      },
      {
        title: 'Reduced Cravings',
        description: 'Higher protein and fat intake promotes satiety and reduces sugar cravings.'
      },
      {
        title: 'Improved Triglycerides',
        description: 'Low-carb diets often lead to significant improvements in blood triglyceride levels.'
      }
    ],
    tips: [
      'Focus on net carbs (total carbs minus fiber) for accurate tracking',
      'Include plenty of non-starchy vegetables for nutrients and fiber',
      'Stay hydrated and monitor electrolyte balance, especially sodium',
      'Choose quality protein sources and healthy fats',
      'Be patient during the adaptation period as energy levels normalize'
    ]
  },
  {
    id: 8,
    slug: 'dash',
    title: 'DASH Diet Plan',
    description: 'Dietary Approaches to Stop Hypertension - designed to help lower blood pressure and promote heart health.',
    calories: 2100,
    protein: 85,
    carbs: 230,
    fat: 65,
    image: dash,
    sampleMeals: [
      {
        meal: 'Breakfast',
        name: 'Whole Grain Cereal with Berries',
        calories: 420,
        description: 'Whole grain cereal with low-fat milk, fresh berries, and sliced banana',
        nutrition: '15g protein | 68g carbs | 8g fat'
      },
      {
        meal: 'Lunch',
        name: 'Turkey and Hummus Wrap',
        calories: 480,
        description: 'Whole wheat wrap with lean turkey, hummus, vegetables, and low-fat cheese',
        nutrition: '28g protein | 52g carbs | 16g fat'
      },
      {
        meal: 'Dinner',
        name: 'Baked Cod with Brown Rice',
        calories: 520,
        description: 'Herb-baked cod with brown rice pilaf and steamed broccoli',
        nutrition: '35g protein | 58g carbs | 12g fat'
      }
    ],
    benefits: [
      {
        title: 'Blood Pressure Reduction',
        description: 'Specifically designed to lower blood pressure through reduced sodium and increased potassium intake.'
      },
      {
        title: 'Heart Health',
        description: 'Emphasizes foods that support cardiovascular health and reduce heart disease risk.'
      },
      {
        title: 'Kidney Health',
        description: 'Lower sodium intake reduces strain on kidneys and supports overall kidney function.'
      },
      {
        title: 'Sustainable Approach',
        description: 'Balanced, realistic eating plan that can be maintained long-term for lasting health benefits.'
      }
    ],
    tips: [
      'Limit sodium to 2,300mg per day (or 1,500mg for greater blood pressure benefits)',
      'Include 4-5 servings of fruits and 4-5 servings of vegetables daily',
      'Choose whole grains over refined grains whenever possible',
      'Include 2-3 servings of low-fat dairy products each day',
      'Limit red meat to 6oz or less per week, focusing on lean proteins like fish and poultry'
    ]
  },
  {
    id: 9,
    slug: 'highprotein',
    title: 'High-Protein Diet Plan',
    description: 'A diet emphasizing high protein intake to support muscle building, weight loss, and metabolic health.',
    calories: 2200,
    protein: 160,
    carbs: 180,
    fat: 80,
    image: highprotien,
    sampleMeals: [
      {
        meal: 'Breakfast',
        name: 'Protein Power Scramble',
        calories: 480,
        description: '4 egg whites + 1 whole egg scramble with lean turkey, spinach, and Greek yogurt side',
        nutrition: '38g protein | 25g carbs | 22g fat'
      },
      {
        meal: 'Lunch',
        name: 'Chicken and Quinoa Power Bowl',
        calories: 580,
        description: '6oz grilled chicken breast with quinoa, black beans, and mixed vegetables',
        nutrition: '52g protein | 48g carbs | 18g fat'
      },
      {
        meal: 'Dinner',
        name: 'Lean Beef with Sweet Potato',
        calories: 620,
        description: '6oz lean beef sirloin with baked sweet potato and green beans',
        nutrition: '48g protein | 42g carbs | 24g fat'
      }
    ],
    benefits: [
      {
        title: 'Muscle Building',
        description: 'High protein intake supports muscle protein synthesis and helps build lean muscle mass.'
      },
      {
        title: 'Increased Satiety',
        description: 'Protein is the most satiating macronutrient, helping control appetite and reduce overall calorie intake.'
      },
      {
        title: 'Metabolic Boost',
        description: 'Higher thermic effect of protein increases calorie burn during digestion and metabolism.'
      },
      {
        title: 'Weight Management',
        description: 'Supports fat loss while preserving lean muscle mass during weight loss phases.'
      }
    ],
    tips: [
      'Aim for 0.8-1.2g protein per pound of body weight depending on activity level',
      'Include protein at every meal and snack to maintain steady amino acid levels',
      'Choose lean protein sources like chicken breast, fish, eggs, and legumes',
      'Time protein intake around workouts for optimal muscle recovery',
      'Stay hydrated as protein metabolism requires additional water'
    ]
  },
  {
    id: 10,
    slug: 'intermittentfasting',
    title: 'Intermittent Fasting Plan',
    description: 'An eating pattern that cycles between periods of fasting and eating, focusing on when to eat rather than what to eat.',
    calories: 2000,
    protein: 120,
    carbs: 180,
    fat: 80,
    image: intermittentfasting,
    sampleMeals: [
      {
        meal: 'First Meal (12 PM)',
        name: 'Breaking Fast Bowl',
        calories: 580,
        description: 'Nutrient-dense meal with eggs, avocado, vegetables, and whole grains to break the fast',
        nutrition: '35g protein | 45g carbs | 32g fat'
      },
      {
        meal: 'Second Meal (4 PM)',
        name: 'Balanced Lunch',
        calories: 650,
        description: 'Grilled protein with complex carbs and healthy fats, eaten during eating window',
        nutrition: '42g protein | 58g carbs | 28g fat'
      },
      {
        meal: 'Final Meal (7 PM)',
        name: 'Light Dinner',
        calories: 520,
        description: 'Lighter meal before fasting window begins, focusing on protein and vegetables',
        nutrition: '38g protein | 35g carbs | 24g fat'
      }
    ],
    benefits: [
      {
        title: 'Weight Loss',
        description: 'Restricting eating windows naturally reduces calorie intake and can boost fat burning.'
      },
      {
        title: 'Improved Insulin Sensitivity',
        description: 'Periods of fasting can help improve insulin sensitivity and blood sugar control.'
      },
      {
        title: 'Cellular Autophagy',
        description: 'Fasting periods trigger cellular cleanup processes that may have anti-aging benefits.'
      },
      {
        title: 'Simplified Eating',
        description: 'Reduces meal planning complexity and can help break emotional eating patterns.'
      }
    ],
    tips: [
      'Start with a 12-hour fast and gradually work up to 16:8 or other patterns',
      'Stay hydrated during fasting periods with water, herbal tea, or black coffee',
      'Break fasts with nutrient-dense, balanced meals to avoid overeating',
      'Listen to your body and adjust fasting windows based on energy levels and lifestyle',
      'Consult healthcare providers before starting, especially if you have medical conditions'
    ]
  },
  {
    id: 11,
    slug: 'glutenfree',
    title: 'Gluten-Free Diet Plan',
    description: 'A diet that eliminates gluten-containing grains while maintaining nutritional balance and variety.',
    calories: 1950,
    protein: 80,
    carbs: 210,
    fat: 70,
    image: glutenfree,
    sampleMeals: [
      {
        meal: 'Breakfast',
        name: 'Quinoa Breakfast Bowl',
        calories: 420,
        description: 'Cooked quinoa with almond milk, berries, nuts, and a drizzle of honey',
        nutrition: '18g protein | 58g carbs | 16g fat'
      },
      {
        meal: 'Lunch',
        name: 'Rice Bowl with Grilled Chicken',
        calories: 520,
        description: 'Brown rice bowl with grilled chicken, roasted vegetables, and tahini sauce',
        nutrition: '38g protein | 52g carbs | 20g fat'
      },
      {
        meal: 'Dinner',
        name: 'Baked Salmon with Sweet Potato',
        calories: 580,
        description: 'Herb-crusted salmon with roasted sweet potato and steamed asparagus',
        nutrition: '40g protein | 45g carbs | 26g fat'
      }
    ],
    benefits: [
      {
        title: 'Digestive Health',
        description: 'Essential for those with celiac disease or gluten sensitivity to prevent digestive issues and inflammation.'
      },
      {
        title: 'Increased Energy',
        description: 'Many people report improved energy levels and reduced fatigue when eliminating gluten.'
      },
      {
        title: 'Skin Health',
        description: 'Some individuals see improvements in skin conditions when following a gluten-free diet.'
      },
      {
        title: 'Nutrient Awareness',
        description: 'Often leads to more mindful eating and discovery of nutritious alternative grains and foods.'
      }
    ],
    tips: [
      'Read labels carefully as gluten can be hidden in many processed foods',
      'Focus on naturally gluten-free whole foods like fruits, vegetables, and lean proteins',
      'Explore alternative grains like quinoa, rice, millet, and amaranth',
      'Be aware of cross-contamination in food preparation and cooking',
      'Consider working with a nutritionist to ensure adequate fiber and B-vitamin intake'
    ]
  },
  {
    id: 12,
    slug: 'AntiInflammatory',
    title: 'Anti-Inflammatory Diet Plan',
    description: 'A diet focused on reducing inflammation in the body through nutrient-dense, anti-inflammatory foods.',
    calories: 2000,
    protein: 90,
    carbs: 200,
    fat: 75,
    image: AntiInflammatory,
    sampleMeals: [
      {
        meal: 'Breakfast',
        name: 'Turmeric Golden Smoothie Bowl',
        calories: 420,
        description: 'Smoothie bowl with turmeric, ginger, berries, chia seeds, and coconut flakes',
        nutrition: '15g protein | 58g carbs | 18g fat'
      },
      {
        meal: 'Lunch',
        name: 'Wild Salmon Salad',
        calories: 520,
        description: 'Wild salmon over mixed greens with walnuts, berries, and olive oil dressing',
        nutrition: '35g protein | 28g carbs | 32g fat'
      },
      {
        meal: 'Dinner',
        name: 'Ginger Garlic Chicken with Sweet Potato',
        calories: 580,
        description: 'Anti-inflammatory spiced chicken with roasted sweet potato and leafy greens',
        nutrition: '42g protein | 48g carbs | 22g fat'
      }
    ],
    benefits: [
      {
        title: 'Reduced Inflammation',
        description: 'Foods rich in omega-3s, antioxidants, and polyphenols help reduce chronic inflammation markers.'
      },
      {
        title: 'Joint Health',
        description: 'Anti-inflammatory compounds can help reduce joint pain and stiffness associated with arthritis.'
      },
      {
        title: 'Improved Recovery',
        description: 'Faster recovery from exercise and reduced muscle soreness through natural anti-inflammatory compounds.'
      },
      {
        title: 'Disease Prevention',
        description: 'May help reduce risk of chronic diseases linked to inflammation, including heart disease and diabetes.'
      }
    ],
    tips: [
      'Include fatty fish like salmon, mackerel, and sardines 2-3 times per week',
      'Add turmeric and ginger to meals for their powerful anti-inflammatory properties',
      'Eat a rainbow of colorful fruits and vegetables daily',
      'Choose extra virgin olive oil as your primary cooking fat',
      'Limit processed foods, refined sugars, and trans fats that promote inflammation'
    ]
  },
];

function DietPlanDetails() {
  const { slug } = useParams();

  // Debugging: Check the slug value
  console.log('Current slug:', slug);
  console.log('Available slugs:', allPlans.map(p => p.slug));

  // Case-insensitive search
  const plan = allPlans.find(p => p.slug.toLowerCase() === slug.toLowerCase());

  if (!plan) {
    return (
      <div className="diet-plan-container">
        <h2>Plan not found</h2>
        <p>The requested plan "{slug}" could not be found.</p>
        <p>Available plans: {allPlans.map(p => p.slug).join(', ')}</p>
      </div>
    );
  }

  const pieData = {
    labels: ['Protein', 'Carbs', 'Fat'],
    datasets: [
      {
        label: 'Macronutrient Ratio',
        data: [plan.protein, plan.carbs, plan.fat],
        backgroundColor: ['#4BC0C0', '#36A2EB', '#FFCE56'],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="diet-plan-container">
      <div className="diet-plan-header">
        <img src={plan.image} alt={plan.title} className="diet-plan-image" />
        <div className="plan-title-overlay">
          <h1>{plan.title}</h1>
          <p>{plan.description}</p>
        </div>
      </div>

      <div className="plan-content">
        <div className="nutrition-overview">
          <h2>Nutrition Overview</h2>
          <ul>
            <li><strong>Calories:</strong> {plan.calories} kcal</li>
            <li><strong>Protein:</strong> {plan.protein}g</li>
            <li><strong>Carbs:</strong> {plan.carbs}g</li>
            <li><strong>Fat:</strong> {plan.fat}g</li>
          </ul>
          <div className="chart-container">
            <Pie data={pieData} />
          </div>
        </div>

        <div className="sample-meal-plan">
          <h2>Sample Meal Plan</h2>
          {plan.sampleMeal ? (
            <>
              <h3>{plan.sampleMeal.title}</h3>
              <p><strong>{plan.sampleMeal.calories} kcal</strong> | {plan.sampleMeal.protein}g protein | {plan.sampleMeal.carbs}g carbs | {plan.sampleMeal.fat}g fat</p>
              <ul>
                {plan.sampleMeal.ingredients.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </>
          ) : plan.sampleMeals ? (
            <>
              {plan.sampleMeals.map((meal, index) => (
                <div key={index} className="meal-item">
                  <h3>{meal.meal}: {meal.name}</h3>
                  <p><strong>{meal.calories} kcal</strong> | {meal.nutrition}</p>
                  <p>{meal.description}</p>
                </div>
              ))}
            </>
          ) : null}
        </div>

        <div className="nutritional-benefits">
          <h2>Nutritional Benefits</h2>
          <div className="benefits-grid">
            {plan.benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <h4>{benefit.title}</h4>
                <p>{benefit.text || benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {plan.tips && (
          <div className="plan-tips">
            <h2>Tips</h2>
            <ul>
              {plan.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default DietPlanDetails;