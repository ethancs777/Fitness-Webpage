import NutritionLayout from "./NutritionLayout";
import ketoDiet from "../images/keto-diet.jpg";
import mediterraneanDiet from "../images/mediterranean-diet.jpg";
import veganDiet from "../images/vegan-diet.jpg";
import paleoDiet from "../images/paleo-diet.png";
import intermittentFasting from "../images/intermittent-fasting.png";
import dashDiet from "../images/dash-diet.jpg";

const mealPlans = [
    {
        name: "Keto Diet",
        image: ketoDiet,
        description: "A high-fat, low-carb diet that helps your body burn fat for energy. Ideal for weight loss and improving metabolic health.",
        category: "keto"
    }, 
    {
        name: "Mediterranean Diet",
        image: mediterraneanDiet,
        description: "A balanced diet rich in fruits, vegetables, whole grains, and healthy fats. Known for its heart health benefits and longevity.",
        category: "mediterranean"
    },
    {
        name: "Vegan Diet",
        image: veganDiet,
        description: "A plant-based diet that excludes all animal products. Great for ethical eating, environmental sustainability, and health benefits.",
        category: "vegan"
    },
    {
        name: "Paleo Diet",
        image: paleoDiet,
        description: "A diet based on the types of foods presumed to have been eaten by early humans. Focuses on whole foods, lean proteins, and healthy fats.",
        category: "paleo"
    },
    {
        name: "Intermittent Fasting",
        image: intermittentFasting,
        description: "An eating pattern that cycles between periods of fasting and eating. Can help with weight loss, metabolic health, and longevity.",
        category: "intermittent_fasting"
    },
    {
        name: "DASH Diet",
        image: dashDiet,
        description: "A diet designed to combat high blood pressure. Emphasizes fruits, vegetables, whole grains, and lean proteins.",
        category: "dash"
    }
];

function Nutrition(){
    return (
    <div>
        <div className="flex justify-start font-bold text-4xl mb-4 lg:ml-32 lg:mr-32 pl-4">
            <h1 className="text-white border-b-2 border-gray-600">Nutrition Plans</h1>
        </div>
        <div className="justify-center min-h-screen mb-16 lg:ml-32 lg:mr-32 pl-4">
            {mealPlans.map((plan, index) => (
                <NutritionLayout 
                    key={index}
                    name={plan.name}
                    image={plan.image}
                    description={plan.description}
                    actionButton="View Details →"
                    actionLink={`/Nutrition/${plan.category}`}
                />
            ))}
        </div>
    </div>
    );
}
export default Nutrition;
