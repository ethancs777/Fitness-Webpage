import { useParams, Link } from 'react-router-dom';
import NutritionLayout from "./NutritionLayout";
import ketoDiet from "../images/keto-diet.jpg";
import mediterraneanDiet from "../images/mediterranean-diet.jpg";
import veganDiet from "../images/vegan-diet.jpg";
import paleoDiet from "../images/paleo-diet.png";
import intermittentFasting from "../images/intermittent-fasting.png";
import dashDiet from "../images/dash-diet.jpg";

function NutritionDetails() {
  const { category } = useParams();

  // Dynamic image loader that tries multiple extensions
  const getImage = (imageName) => {
    const extensions = ['jpg', 'jpeg', 'png', 'webp'];
    
    for (const ext of extensions) {
      try {
        return require(`../images/meals/${imageName}.${ext}`);
      } catch (err) {
        // Continue to next extension
      }
    }
    
    // If none found, return fallback based on diet type
    const fallbackImages = {
      'keto': ketoDiet,
      'mediterranean': mediterraneanDiet,
      'vegan': veganDiet,
      'paleo': paleoDiet,
      'dash': dashDiet,
      'intermittent_fasting': intermittentFasting
    };
    
    return fallbackImages[category] || ketoDiet;
  };

  const nutritionData = {
    "keto": {
      name: "Keto Diet Plans",
      mealSets: [
        {
          setName: "Protein Focused",
          meals: [
            {
              name: "Scrambled Eggs & Avocado",
              image: getImage("scrambled-eggs-avocado"),
              description: "Scrambled eggs cooked in butter with half an avocado and 2 strips of bacon. Rich in healthy fats and protein. Macros: 75% fat, 20% protein, 5% carbs. Perfect way to start your keto day.",
              mealType: "Breakfast"
            },
            {
              name: "Chicken Caesar Salad",
              image: getImage("chicken-caesar-salad"),
              description: "Grilled chicken breast over romaine lettuce with parmesan cheese, caesar dressing, and no croutons. A classic salad made keto-friendly with extra olive oil.",
              mealType: "Lunch"
            },
            {
              name: "Salmon with Asparagus",
              image: getImage("salmon-asparagus"),
              description: "Grilled salmon fillet with roasted asparagus cooked in butter and garlic. Rich in omega-3 fatty acids and perfectly balanced keto macros.",
              mealType: "Dinner"
            }
          ]
        },
        {
          setName: "Dairy-Free Focused",
          meals: [
            {
              name: "Coconut Flour Pancakes",
              image: getImage("coconut-flour-pancakes"),
              description: "Fluffy pancakes made with coconut flour, eggs, and cream cheese. Topped with sugar-free syrup and butter. A satisfying low-carb breakfast that feels indulgent.",
              mealType: "Breakfast"
            },
            {
              name: "Tuna Salad Lettuce Wraps",
              image: getImage("tuna-salad-lettuce-wraps"),
              description: "Tuna salad made with mayo, celery, and herbs wrapped in large lettuce leaves. Light, refreshing, and packed with protein and healthy fats.",
              mealType: "Lunch"
            },
            {
              name: "Beef Stir-Fry",
              image: getImage("beef-stir-fry"),
              description: "Beef strips stir-fried with broccoli, bell peppers, and onions in coconut oil. Seasoned with ginger and soy sauce for an Asian-inspired keto dinner.",
              mealType: "Dinner"
            }
          ]
        },
        {
          setName: "Vegetarian Focused",
          meals: [
            {
              name: "Chia Seed Pudding",
              image: getImage("chia-seed-pudding"),
              description: "Overnight chia seed pudding made with coconut milk, vanilla extract, and topped with crushed almonds. High in fiber and healthy fats for sustained energy.",
              mealType: "Breakfast"
            },
            {
              name: "Stuffed Portobello Mushrooms",
              image: getImage("stuffed-portobello-mushrooms"),
              description: "Large portobello mushroom caps stuffed with spinach, feta cheese, and herbs. Baked until tender and topped with olive oil for extra healthy fats.",
              mealType: "Lunch"
            },
            {
              name: "Zucchini Noodles with Pesto",
              image: getImage("zucchini-noodles-pesto"),
              description: "Spiralized zucchini noodles tossed with homemade basil pesto, pine nuts, and parmesan cheese. A satisfying pasta alternative that's completely keto-friendly.",
              mealType: "Dinner"
            }
          ]
        }
      ]
    },
    "mediterranean": {
      name: "Mediterranean Diet Plans",
      mealSets: [
        {
          setName: "Traditional Mediterranean",
          meals: [
            {
              name: "Greek Yogurt Bowl",
              image: getImage("greek-yogurt-bowl"),
              description: "Greek yogurt topped with honey, walnuts, and fresh berries. A protein-rich breakfast that provides probiotics and antioxidants to start your day right.",
              mealType: "Breakfast"
            },
            {
              name: "Greek Salad",
              image: getImage("greek-salad"),
              description: "Traditional Greek salad with tomatoes, cucumbers, olives, feta cheese, and olive oil dressing. Fresh, light, and full of Mediterranean flavors.",
              mealType: "Lunch"
            },
            {
              name: "Grilled Fish with Quinoa",
              image: getImage("grilled-fish-quinoa"),
              description: "Grilled white fish with quinoa pilaf and roasted Mediterranean vegetables. Drizzled with olive oil and fresh herbs for authentic flavors.",
              mealType: "Dinner"
            }
          ]
        },
        {
          setName: "Coastal Mediterranean",
          meals: [
            {
              name: "Avocado Toast",
              image: getImage("avocado-toast"),
              description: "Whole grain bread topped with mashed avocado, cherry tomatoes, and a drizzle of olive oil. Simple, nutritious, and packed with healthy monounsaturated fats.",
              mealType: "Breakfast"
            },
            {
              name: "Lentil Soup",
              image: getImage("lentil-soup"),
              description: "Hearty lentil soup with vegetables, herbs, and olive oil. Served with crusty whole grain bread for a filling and nutritious lunch.",
              mealType: "Lunch"
            },
            {
              name: "Seafood Paella",
              image: getImage("seafood-paella"),
              description: "Traditional Spanish paella with saffron rice, shrimp, mussels, and vegetables. A festive dinner that brings the flavors of the Mediterranean to your table.",
              mealType: "Dinner"
            }
          ]
        },
        {
          setName: "Garden Fresh Mediterranean",
          meals: [
            {
              name: "Berry Smoothie Bowl",
              image: getImage("berry-smoothie-bowl"),
              description: "Smoothie bowl made with mixed berries, Greek yogurt, and topped with granola and nuts. Rich in antioxidants and perfect for a quick morning meal.",
              mealType: "Breakfast"
            },
            {
              name: "Hummus Vegetable Wrap",
              image: getImage("hummus-vegetable-wrap"),
              description: "Whole wheat wrap filled with hummus, fresh vegetables, and herbs. A portable lunch packed with plant-based protein and fiber.",
              mealType: "Lunch"
            },
            {
              name: "Herb-Crusted Chicken",
              image: getImage("herb-crusted-chicken"),
              description: "Grilled chicken breast with Mediterranean herb crust, served with roasted eggplant and a side of olive tapenade. Light yet satisfying.",
              mealType: "Dinner"
            }
          ]
        }
      ]
    },
    "vegan": {
      name: "Vegan Diet Plans",
      mealSets: [
        {
          setName: "Protein Power",
          meals: [
            {
              name: "Tofu Scramble",
              image: getImage("tofu-scramble"),
              description: "Scrambled tofu with nutritional yeast, turmeric, and vegetables. A protein-rich breakfast that mimics scrambled eggs while being completely plant-based.",
              mealType: "Breakfast"
            },
            {
              name: "Quinoa Buddha Bowl",
              image: getImage("quinoa-buddha-bowl"),
              description: "Quinoa bowl with roasted vegetables, chickpeas, and tahini dressing. A complete meal with all essential amino acids and plenty of nutrients.",
              mealType: "Lunch"
            },
            {
              name: "Lentil Black Bean Chili",
              image: getImage("lentil-black-bean-chili"),
              description: "Hearty chili made with lentils, black beans, and vegetables. Rich in protein and fiber, perfect for a filling vegan dinner.",
              mealType: "Dinner"
            }
          ]
        },
        {
          setName: "Whole Foods Focused",
          meals: [
            {
              name: "Oatmeal with Almond Butter",
              image: getImage("oatmeal-almond-butter"),
              description: "Steel-cut oats topped with almond butter, banana slices, and chia seeds. Provides sustained energy and complete proteins for your morning.",
              mealType: "Breakfast"
            },
            {
              name: "Chickpea Salad Sandwich",
              image: getImage("chickpea-salad-sandwich"),
              description: "Mashed chickpeas with celery, herbs, and vegan mayo on whole grain bread. A protein-packed sandwich that's satisfying and portable.",
              mealType: "Lunch"
            },
            {
              name: "Stuffed Bell Peppers",
              image: getImage("stuffed-bell-peppers"),
              description: "Bell peppers stuffed with brown rice, vegetables, and nuts. Baked until tender and topped with nutritional yeast for a cheesy flavor.",
              mealType: "Dinner"
            }
          ]
        },
        {
          setName: "International Flavors",
          meals: [
            {
              name: "Chia Pudding Parfait",
              image: getImage("chia-pudding-parfait"),
              description: "Chia seed pudding made with coconut milk, layered with fresh mango and coconut flakes. Rich in omega-3s and naturally sweet.",
              mealType: "Breakfast"
            },
            {
              name: "Thai Curry with Tofu",
              image: getImage("thai-curry-tofu"),
              description: "Red curry with tofu, vegetables, and coconut milk served over brown rice. Spicy, flavorful, and packed with plant-based protein.",
              mealType: "Lunch"
            },
            {
              name: "Pasta with Cashew Cream",
              image: getImage("pasta-cashew-cream"),
              description: "Whole wheat pasta with cashew cream sauce, marinara, and fresh basil. Creamy and satisfying without any dairy products.",
              mealType: "Dinner"
            }
          ]
        }
      ]
    },
    "paleo": {
      name: "Paleo Diet Plans",
      mealSets: [
        {
          setName: "Hunter-Gatherer",
          meals: [
            {
              name: "Sweet Potato Hash",
              image: getImage("sweet-potato-hash"),
              description: "Diced sweet potato hash with eggs, bell peppers, and onions cooked in coconut oil. A hearty breakfast that follows paleo principles.",
              mealType: "Breakfast"
            },
            {
              name: "Grilled Chicken Salad",
              image: getImage("grilled-chicken-salad"),
              description: "Grilled chicken breast over mixed greens with avocado, nuts, and olive oil dressing. Simple, nutritious, and completely paleo-compliant.",
              mealType: "Lunch"
            },
            {
              name: "Grass-Fed Beef & Vegetables",
              image: getImage("grass-fed-beef-vegetables"),
              description: "Grass-fed beef with roasted root vegetables and herbs. A satisfying dinner that provides high-quality protein and essential nutrients.",
              mealType: "Dinner"
            }
          ]
        },
        {
          setName: "Seafood Focused",
          meals: [
            {
              name: "Smoked Salmon & Avocado",
              image: getImage("smoked-salmon-avocado"),
              description: "Wild-caught smoked salmon with sliced avocado and mixed greens. Rich in omega-3 fatty acids and healthy fats for sustained energy.",
              mealType: "Breakfast"
            },
            {
              name: "Shrimp Avocado Salad",
              image: getImage("shrimp-avocado-salad"),
              description: "Grilled shrimp with avocado, cucumber, and herbs in a lemon vinaigrette. Light, refreshing, and rich in protein and healthy fats.",
              mealType: "Lunch"
            },
            {
              name: "Baked Cod with Sweet Potato",
              image: getImage("baked-cod-sweet-potato"),
              description: "Wild-caught cod fillet with steamed broccoli and roasted sweet potato. Light yet filling, with plenty of nutrients and omega-3s.",
              mealType: "Dinner"
            }
          ]
        },
        {
          setName: "Plant-Heavy",
          meals: [
            {
              name: "Coconut Flour Muffins",
              image: getImage("coconut-flour-muffins"),
              description: "Muffins made with coconut flour, eggs, and fresh berries. Naturally sweetened and grain-free, perfect for a paleo breakfast on the go.",
              mealType: "Breakfast"
            },
            {
              name: "Turkey & Vegetable Salad",
              image: getImage("turkey-vegetable-salad"),
              description: "Sliced turkey with a large mixed vegetable salad and olive oil dressing. High in protein and loaded with nutrient-dense vegetables.",
              mealType: "Lunch"
            },
            {
              name: "Zucchini Noodles with Meat Sauce",
              image: getImage("zucchini-noodles-meat-sauce"),
              description: "Spiralized zucchini noodles with grass-fed ground beef in tomato sauce. A paleo-friendly take on spaghetti and meat sauce.",
              mealType: "Dinner"
            }
          ]
        }
      ]
    },
    "dash": {
      name: "DASH Diet Plans",
      mealSets: [
        {
          setName: "Heart Healthy",
          meals: [
            {
              name: "Oatmeal & Banana",
              image: getImage("oatmeal-banana"),
              description: "Steel-cut oats with sliced banana and low-fat milk. Heart-healthy breakfast that's low in sodium and rich in potassium for blood pressure control.",
              mealType: "Breakfast"
            },
            {
              name: "Turkey Vegetable Soup",
              image: getImage("turkey-vegetable-soup"),
              description: "Low-sodium turkey and vegetable soup with whole grain roll. Heart-healthy lunch that's rich in vegetables and lean protein.",
              mealType: "Lunch"
            },
            {
              name: "Baked Chicken & Rice",
              image: getImage("baked-chicken-rice"),
              description: "Herb-baked chicken breast with brown rice and steamed vegetables. Low-sodium preparation that's rich in lean protein and whole grains.",
              mealType: "Dinner"
            }
          ]
        },
        {
          setName: "Blood Pressure Control",
          meals: [
            {
              name: "Greek Yogurt Parfait",
              image: getImage("greek-yogurt-parfait"),
              description: "Low-fat Greek yogurt layered with fresh berries and nuts. High in protein and potassium while being naturally low in sodium.",
              mealType: "Breakfast"
            },
            {
              name: "Quinoa Vegetable Salad",
              image: getImage("quinoa-vegetable-salad"),
              description: "Quinoa salad with colorful vegetables and lean protein in a low-sodium dressing. Packed with nutrients that support cardiovascular health.",
              mealType: "Lunch"
            },
            {
              name: "Grilled Salmon & Quinoa",
              image: getImage("grilled-salmon-quinoa"),
              description: "Grilled salmon with quinoa and roasted Brussels sprouts. Rich in omega-3s, potassium, and magnesium for optimal heart health.",
              mealType: "Dinner"
            }
          ]
        },
        {
          setName: "Balanced Approach",
          meals: [
            {
              name: "Whole Grain Toast",
              image: getImage("whole-grain-toast"),
              description: "Whole grain toast with natural almond butter and banana slices. Provides fiber, healthy fats, and potassium for heart health.",
              mealType: "Breakfast"
            },
            {
              name: "Lentil Vegetable Salad",
              image: getImage("lentil-vegetable-salad"),
              description: "Lentil salad with fresh vegetables and herbs in olive oil dressing. High in fiber, potassium, and magnesium for blood pressure management.",
              mealType: "Lunch"
            },
            {
              name: "Lean Beef & Sweet Potato",
              image: getImage("lean-beef-sweet-potato"),
              description: "Lean beef with baked sweet potato and green beans. Balanced meal that provides protein, fiber, and essential nutrients for cardiovascular health.",
              mealType: "Dinner"
            }
          ]
        }
      ]
    },
    "intermittent_fasting": {
      name: "Intermittent Fasting Guide",
      mealSets: [
        {
          setName: "16:8 Method (Most Popular)",
          meals: [
            {
              name: "16:8 Method Guide",
              image: getImage("16-8-method"),
              description: "Fast for 16 hours, eat within 8-hour window. Example: Eat between 12pm-8pm, fast from 8pm-12pm next day. Start with black coffee, tea, or water during fasting hours. Gradually extend fasting periods.",
              mealType: "Method"
            }
          ]
        },
        {
          setName: "5:2 Method (Flexible)",
          meals: [
            {
              name: "5:2 Method Guide",
              image: getImage("5-2-method"),
              description: "Eat normally 5 days, restrict calories to 500-600 on 2 non-consecutive days. Fasting days: Light meals like vegetable soup, salads, lean protein. Non-fasting days: Balanced, healthy eating without restriction.",
              mealType: "Method"
            }
          ]
        },
        {
          setName: "Eat-Stop-Eat (Advanced)",
          meals: [
            {
              name: "Eat-Stop-Eat Guide",
              image: getImage("eat-stop-eat"),
              description: "24-hour fasts once or twice per week. Example: Dinner Tuesday to dinner Wednesday. During fasting: Only water, black coffee, tea. Break fast gently with light, nutritious meals. Not recommended for beginners.",
              mealType: "Method"
            }
          ]
        },
        {
          setName: "OMAD - One Meal A Day (Expert)",
          meals: [
            {
              name: "OMAD Guide",
              image: getImage("omad-method"),
              description: "Eat one large, nutritionally complete meal per day within a 1-hour window. Requires careful meal planning to meet all nutritional needs. Include protein, healthy fats, vegetables, and complex carbs in your meal.",
              mealType: "Method"
            }
          ]
        }
      ]
    }
  };

  const currentNutrition = nutritionData[category];

  if (!currentNutrition) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Nutrition Plan Not Found</h1>
          <Link to="/Nutrition" className="text-white hover:text-gray-300">
            ← Back to Nutrition Plans
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center font-bold text-4xl mb-4 lg:ml-32 lg:mr-32 pl-4">
        <h1 className="text-white border-b-2 border-gray-600">{currentNutrition.name}</h1>
        <Link to="/Nutrition" className="text-white hover:text-gray-300 text-lg font-bold">
          ← Back to Nutrition Plans
        </Link>
      </div>
      <div className="justify-center min-h-screen mb-16 lg:ml-32 lg:mr-32 pl-4">
        {currentNutrition.mealSets.map((mealSet, setIndex) => (
          <div key={setIndex} className="mb-12">
            <h2 className="text-white text-3xl font-bold mb-2">{mealSet.setName}</h2>
            {mealSet.meals.map((meal, mealIndex) => (
              <NutritionLayout 
                key={mealIndex}
                name={`${meal.mealType}: ${meal.name}`} 
                image={meal.image} 
                description={meal.description}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NutritionDetails;