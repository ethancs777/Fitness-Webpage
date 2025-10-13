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
              description: "Fluffy scrambled eggs cooked slowly in grass-fed butter with half a ripe avocado and 2 strips of sugar-free bacon. The eggs provide high-quality protein and choline for brain health, while avocado delivers potassium and heart-healthy monounsaturated fats. Cook eggs on low heat, stirring frequently for creamy texture. Macros: 75% fat, 20% protein, 5% carbs. Perfect way to start your keto day with sustained energy and satiety.",
              mealType: "Breakfast"
            },
            {
              name: "Chicken Caesar Salad",
              image: getImage("chicken-caesar-salad"),
              description: "Grilled organic chicken breast (6oz) over crisp romaine lettuce with fresh parmesan cheese and homemade caesar dressing made with anchovies, olive oil, and lemon juice. Skip the croutons and add extra olive oil for healthy fats. Romaine provides folate and vitamin K, while chicken delivers complete proteins. Grill chicken with herbs like rosemary and thyme for extra flavor. Makes for a satisfying, restaurant-quality keto lunch.",
              mealType: "Lunch"
            },
            {
              name: "Salmon with Asparagus",
              image: getImage("salmon-asparagus"),
              description: "Wild-caught salmon fillet (6oz) grilled or baked with roasted asparagus spears cooked in butter, garlic, and fresh herbs. Salmon provides omega-3 fatty acids EPA and DHA for brain and heart health, while asparagus offers fiber and folate. Season salmon with lemon, dill, and black pepper. Roast asparagus at 400°F for 12-15 minutes until tender-crisp. This nutrient-dense dinner supports ketosis while providing anti-inflammatory benefits.",
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
              description: "Light and fluffy pancakes made with coconut flour, farm-fresh eggs, cream cheese, and a touch of vanilla extract. Topped with sugar-free maple syrup and a pat of grass-fed butter. Coconut flour is naturally grain-free and provides fiber and healthy fats. These pancakes have only 3g net carbs per serving. Cook on medium-low heat to prevent burning, as coconut flour browns quickly. A weekend keto treat that satisfies pancake cravings without breaking ketosis.",
              mealType: "Breakfast"
            },
            {
              name: "Tuna Salad Lettuce Wraps",
              image: getImage("tuna-salad-lettuce-wraps"),
              description: "Premium albacore tuna mixed with avocado mayo, diced celery, red onion, and fresh herbs like dill and parsley, wrapped in crisp butter lettuce leaves. Add capers and a squeeze of lemon for extra flavor. Tuna provides lean protein and selenium, while lettuce offers hydration and crunch. Use large Boston or butter lettuce leaves as wraps. This portable lunch is refreshing, light, and packed with protein and healthy fats - perfect for meal prep.",
              mealType: "Lunch"
            },
            {
              name: "Beef Stir-Fry",
              image: getImage("beef-stir-fry"),
              description: "Tender grass-fed beef strips stir-fried with broccoli florets, colorful bell peppers, and onions in coconut oil over high heat. Seasoned with fresh ginger, garlic, and coconut aminos (soy sauce substitute). The key is to cook quickly over high heat to maintain vegetable crispness and beef tenderness. Beef provides iron and B-vitamins, while vegetables add fiber and antioxidants. Serve over cauliflower rice for a complete Asian-inspired keto dinner.",
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
              description: "Overnight chia seed pudding made with rich coconut milk, pure vanilla extract, and topped with crushed almonds and a few fresh berries. Chia seeds expand overnight, creating a pudding-like texture while providing omega-3 fatty acids, fiber, and complete proteins. Sweeten naturally with stevia or monk fruit. The pudding thickens after 4+ hours in the refrigerator. This make-ahead breakfast provides sustained energy and supports digestive health while keeping carbs minimal.",
              mealType: "Breakfast"
            },
            {
              name: "Stuffed Portobello Mushrooms",
              image: getImage("stuffed-portobello-mushrooms"),
              description: "Large portobello mushroom caps stuffed with sautéed spinach, creamy feta cheese, sun-dried tomatoes, and fresh herbs like basil and oregano. Drizzle with extra virgin olive oil and bake until tender. Remove mushroom stems and scrape out gills before stuffing. Portobellos provide umami flavor and meaty texture, while spinach offers iron and folate. These savory stuffed mushrooms make an elegant, restaurant-quality keto lunch that's both satisfying and nutrient-dense.",
              mealType: "Lunch"
            },
            {
              name: "Zucchini Noodles with Pesto",
              image: getImage("zucchini-noodles-pesto"),
              description: "Fresh zucchini spiralized into noodles and tossed with homemade basil pesto made from fresh basil, pine nuts, garlic, parmesan cheese, and olive oil. Lightly sauté zucchini noodles for 2-3 minutes to warm through without making them soggy. Pesto provides healthy fats and fresh herb antioxidants. Use a spiralizer or vegetable peeler to create noodles. This Italian-inspired dish proves that keto can be both delicious and satisfying - a perfect pasta alternative.",
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
              description: "Thick, creamy Greek yogurt (2% fat) topped with golden honey, crunchy walnuts, and a medley of fresh berries including blueberries, strawberries, and blackberries. Greek yogurt provides probiotics for gut health and double the protein of regular yogurt. The berries offer antioxidants and natural sweetness, while walnuts contribute omega-3 fatty acids and vitamin E. Drizzle with local honey for natural energy. This protein-rich breakfast provides sustained energy and supports digestive health.",
              mealType: "Breakfast"
            },
            {
              name: "Greek Salad",
              image: getImage("greek-salad"),
              description: "Traditional village-style Greek salad with ripe tomatoes, crisp cucumbers, red onion, Kalamata olives, and authentic feta cheese, dressed with extra virgin olive oil, red wine vinegar, and dried oregano. No lettuce needed - this is the authentic way! Tomatoes provide lycopene, cucumbers offer hydration, and olives deliver healthy monounsaturated fats. Use the best quality olive oil you can find. Fresh, light, and bursting with Mediterranean flavors that transport you to the Greek islands.",
              mealType: "Lunch"
            },
            {
              name: "Grilled Fish with Quinoa",
              image: getImage("grilled-fish-quinoa"),
              description: "Wild-caught white fish (such as sea bass or branzino) grilled with lemon, olive oil, and Mediterranean herbs, served with fluffy quinoa pilaf cooked in vegetable broth and roasted vegetables including zucchini, bell peppers, and red onion. Fish provides lean protein and omega-3s, while quinoa offers complete proteins and fiber. Finish with fresh herbs like parsley and dill, plus a drizzle of extra virgin olive oil. This heart-healthy dinner embodies the Mediterranean lifestyle.",
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
              description: "Thick slices of whole grain sourdough bread topped with perfectly ripe, mashed avocado seasoned with sea salt, black pepper, and a drizzle of premium extra virgin olive oil. Garnish with halved cherry tomatoes and a sprinkle of red pepper flakes. Avocados provide heart-healthy monounsaturated fats, fiber, and potassium. Choose bread with visible grains and seeds for maximum nutrition. This simple yet satisfying breakfast combines healthy fats with complex carbohydrates for sustained energy.",
              mealType: "Breakfast"
            },
            {
              name: "Lentil Soup",
              image: getImage("lentil-soup"),
              description: "Hearty Mediterranean lentil soup made with green or brown lentils, diced tomatoes, carrots, celery, onions, and garlic, simmered in vegetable broth with bay leaves, thyme, and oregano. Finish with a generous drizzle of extra virgin olive oil and fresh lemon juice. Served with crusty whole grain bread for dipping. Lentils provide plant-based protein, fiber, and folate. This comforting soup is both nutritious and filling, perfect for cooler days and meal prep.",
              mealType: "Lunch"
            },
            {
              name: "Seafood Paella",
              image: getImage("seafood-paella"),
              description: "Traditional Spanish paella with saffron-infused bomba rice, fresh shrimp, mussels, clams, and sometimes squid, cooked with tomatoes, garlic, and Spanish paprika in a wide paella pan. Saffron gives the distinctive golden color and aromatic flavor. Seafood provides lean protein and omega-3s, while rice offers energy-sustaining carbohydrates. Cook in a wide, shallow pan for the best socarrat (crispy bottom layer). A festive dinner that brings the coastal flavors of Spain to your table.",
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
              description: "Crumbled firm tofu sautéed with nutritional yeast, turmeric (for golden color), garlic powder, and a medley of colorful vegetables including bell peppers, spinach, and mushrooms. Season with black pepper and a pinch of kala namak (black salt) for an eggy flavor. Nutritional yeast provides B-vitamins and a cheesy taste, while tofu offers complete plant-based protein. Cook in a non-stick pan with a little olive oil. This protein-rich breakfast proves that plant-based eating can be both satisfying and delicious.",
              mealType: "Breakfast"
            },
            {
              name: "Quinoa Buddha Bowl",
              image: getImage("quinoa-buddha-bowl"),
              description: "Nourishing bowl with fluffy quinoa as the base, topped with roasted rainbow vegetables (sweet potato, broccoli, red cabbage), protein-rich chickpeas, sliced avocado, and a creamy tahini dressing made with sesame paste, lemon juice, and garlic. Sprinkle with hemp seeds and fresh herbs. Quinoa provides all nine essential amino acids, making it a complete protein. This colorful bowl delivers a wide range of nutrients, healthy fats, and satisfying plant-based proteins in every bite.",
              mealType: "Lunch"
            },
            {
              name: "Lentil Black Bean Chili",
              image: getImage("lentil-black-bean-chili"),
              description: "Hearty, protein-packed chili made with red lentils, black beans, diced tomatoes, bell peppers, onions, and warming spices including cumin, chili powder, and smoked paprika. Slow-simmered to develop rich flavors and topped with fresh cilantro, diced avocado, and a squeeze of lime. Lentils and beans provide complementary proteins, fiber, and iron. This satisfying dinner is perfect for meal prep and gets even better the next day as flavors meld together.",
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
              description: "Diced sweet potatoes roasted until crispy and golden, combined with farm-fresh eggs, colorful bell peppers, and caramelized onions, all cooked in coconut oil with fresh herbs like thyme and rosemary. Sweet potatoes provide complex carbohydrates, beta-carotene, and potassium, while eggs offer complete proteins and healthy fats. Cook sweet potatoes first until tender, then add other ingredients. This hearty breakfast follows paleo principles while providing sustained energy for active mornings.",
              mealType: "Breakfast"
            },
            {
              name: "Grilled Chicken Salad",
              image: getImage("grilled-chicken-salad"),
              description: "Organic, free-range chicken breast marinated in olive oil, lemon, and herbs, then grilled to perfection and served over a bed of mixed organic greens, sliced avocado, toasted nuts (almonds or walnuts), and cherry tomatoes. Dressed with a simple olive oil and balsamic vinegar dressing. Chicken provides lean protein and B-vitamins, while the variety of vegetables and healthy fats create a balanced, nutrient-dense meal that's completely paleo-compliant and satisfying.",
              mealType: "Lunch"
            },
            {
              name: "Grass-Fed Beef & Vegetables",
              image: getImage("grass-fed-beef-vegetables"),
              description: "Premium grass-fed beef (sirloin or ribeye) grilled or pan-seared to your preference, served with a medley of roasted root vegetables including carrots, parsnips, turnips, and Brussels sprouts, all seasoned with fresh herbs like rosemary and thyme. Grass-fed beef provides higher omega-3 fatty acids and CLA compared to grain-fed beef. Root vegetables offer natural sweetness and essential nutrients. This satisfying dinner provides high-quality protein and nutrients our ancestors would recognize.",
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
              description: "Wild-caught salmon fillet (4-6oz) grilled with lemon and herbs, served with fluffy quinoa pilaf and roasted Brussels sprouts drizzled with olive oil and a touch of balsamic vinegar. Salmon provides omega-3 fatty acids EPA and DHA for heart and brain health, while quinoa offers complete proteins and fiber. Brussels sprouts are rich in vitamin K and antioxidants. This meal is naturally low in sodium while being rich in potassium and magnesium - key minerals for blood pressure management and optimal cardiovascular health.",
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