import ExerciseLayout from "./ExerciseLayout";
import fullBodyImage from "../images/fullbody.jpeg";
import lowerBodyImage from "../images/lowerbody.jpg";
import upperBodyImage from "../images/upperbody.png";

function Workouts(){
    const workoutCategories = [
        {
            name: "Upper Body Workouts",
            image: upperBodyImage,
            description: "Build strength in your chest, back, shoulders, and arms with these targeted upper body exercises. Perfect for developing pushing and pulling power.",
            category: "upper-body"
        },
        {
            name: "Lower Body Workouts",
            image: lowerBodyImage,
            description: "Strengthen your legs and glutes with these powerful lower body movements. Great for building functional strength and athletic performance.",
            category: "lower-body"
        },
        {
            name: "Full Body Workouts",
            image: fullBodyImage,
            description: "Get a complete workout with these full-body exercises that target multiple muscle groups. Perfect for burning calories and building overall fitness.",
            category: "full-body"
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

