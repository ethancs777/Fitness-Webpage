import ExerciseLayout from "./ExerciseLayout";
import fullBodyImage from "../images/fullbody.jpeg";
import lowerBodyImage from "../images/lowerbody.jpg";
import upperBodyImage from "../images/upperbody.png";
import cardioImage from "../images/cardio.jpg";
import coreImage from "../images/core.webp";

function Workouts(){
    const workoutCategories = [
        {
            name: "Upper Body Workouts",
            image: upperBodyImage,
            description: "Build strength in your chest, back, shoulders, and arms with these targeted upper body exercises. Perfect for developing pushing and pulling power while improving posture and functional strength. Estimated workout time: 45-60 minutes including warm-up and cool-down.",
            category: "upper-body"
        },
        {
            name: "Lower Body Workouts",
            image: lowerBodyImage,
            description: "Strengthen your legs and glutes with these powerful lower body movements. Great for building functional strength, athletic performance, and everyday mobility. Focus on proper form to maximize results. Estimated workout time: 50-65 minutes including warm-up and cool-down.",
            category: "lower-body"
        },
        {
            name: "Full Body Workouts",
            image: fullBodyImage,
            description: "Get a complete workout with these full-body exercises that target multiple muscle groups simultaneously. Perfect for burning calories, building overall fitness, and maximizing time efficiency. Estimated workout time: 35-50 minutes including warm-up and cool-down.",
            category: "full-body"
        },
        {
            name: "Cardio Workouts",
            image: cardioImage,
            description: "Boost your cardiovascular health and endurance with these heart-pumping exercises. Excellent for burning calories, improving heart health, and increasing stamina for daily activities. Estimated workout time: 20-40 minutes depending on intensity level.",
            category: "cardio"
        },
        {
            name: "Core Workouts",
            image: coreImage,
            description: "Strengthen your core and improve stability with these targeted abdominal and back exercises. Essential for overall functional strength, posture, and injury prevention in daily life. Estimated workout time: 25-35 minutes including warm-up and cool-down.",
            category: "core"
        }
    ];

    return (
    <div>
        <div className="flex justify-start font-bold text-4xl mb-4 lg:ml-32 lg:mr-32 pl-4">
            <h1 className="text-white border-b-2 border-gray-600">Workout Categories</h1>
        </div>
        <div className="justify-center min-h-screen mb-16 lg:ml-32 lg:mr-32 pl-4">
            {workoutCategories.map((workout, index) => (
                <ExerciseLayout 
                    key={index}
                    name={workout.name} 
                    image={workout.image} 
                    description={workout.description}
                    actionButton="View Exercises →"
                    actionLink={`/Workouts/${workout.category}`}
                />
            ))}
        </div>
    </div>
    );
}
export default Workouts;

