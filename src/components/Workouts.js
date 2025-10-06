import ExerciseLayout from "./ExerciseLayout";
import pushupImage from "../images/pushup.jpg";

function Workouts(){
    return (
    <div>
        <div className="flex justify-start font-bold text-4xl mb-4 lg:ml-32 lg:mr-32 pl-4">
            <h1 className="text-white border-b-2 border-gray-600">Workouts</h1>
        </div>
        <div className="justify-center min-h-screen mb-16 lg:ml-32 lg:mr-32 pl-4">
            <ExerciseLayout name="Push Up" image={pushupImage} description = "This is a pushup."></ExerciseLayout>
        </div>
    </div>
    );
}
export default Workouts;

