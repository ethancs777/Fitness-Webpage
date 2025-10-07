import { useParams, Link } from 'react-router-dom';
import ExerciseLayout from "./ExerciseLayout";
import pushupImage from "../images/pushup.jpg";
import benchPressImage from "../images/benchpress.jpg";
import squatImage from "../images/squats.jpg";
import deadliftImage from "../images/deadlift.jpg";
import burpeeImage from "../images/burpees.jpg";
import mountainClimberImage from "../images/mountainclimbers.jpg";
import jumpingJackImage from "../images/jumpingjack.jpg";
import pullupImage from "../images/pullup.jpg";
import lungesImage from "../images/lunges.jpg";

function WorkoutDetails() {
  const { category } = useParams();

  // Sample data - you can expand this with more exercises and images
  const workoutData = {
    "upper-body": {
      name: "Upper Body Workouts",
      exercises: [
        {
          name: "Push-ups",
          image: pushupImage,
          description: "A classic bodyweight exercise that targets your chest, shoulders, and triceps. Start in a plank position and lower your body until your chest nearly touches the floor."
        },
        {
          name: "Pull-ups",
          image: pullupImage,
          description: "An excellent exercise for building back and bicep strength. Hang from a pull-up bar and pull your body up until your chin clears the bar."
        },
        {
          name: "Bench Press",
          image: benchPressImage,
          description: "A fundamental strength training exercise for the chest, shoulders, and triceps. Lie on a bench and press weight up from chest level."
        }
      ]
    },
    "lower-body": {
      name: "Lower Body Workouts",
      exercises: [
        {
          name: "Squats",
          image: squatImage,
          description: "The king of leg exercises! Squats work your quads, glutes, and hamstrings. Stand with feet shoulder-width apart and lower down like sitting in a chair."
        },
        {
          name: "Lunges",
          image: lungesImage,
          description: "Great for building single-leg strength and stability. Step forward and lower your hips until both knees are bent at 90 degrees."
        },
        {
          name: "Deadlifts",
          image: deadliftImage,
          description: "A compound movement that works your entire posterior chain. Keep your back straight and lift the weight by driving through your heels."
        }
      ]
    },
    "full-body": {
      name: "Full Body Workouts",
      exercises: [
        {
          name: "Burpees",
          image: burpeeImage,
          description: "A high-intensity exercise that works your entire body. Drop into a squat, kick back into plank, do a push-up, jump feet forward, then jump up."
        },
        {
          name: "Mountain Climbers",
          image: mountainClimberImage,
          description: "A cardio and core exercise. Start in plank position and alternate bringing knees to chest in a running motion."
        },
        {
          name: "Jumping Jacks",
          image: jumpingJackImage,
          description: "A classic cardio exercise. Jump while spreading legs shoulder-width apart and raising arms overhead, then return to starting position."
        }
      ]
    }
  };

  const currentWorkout = workoutData[category];

  if (!currentWorkout) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Workout Not Found</h1>
          <Link to="/Workouts" className="text-white hover:text-gray-300">
            ← Back to Workouts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center font-bold text-4xl mb-4 lg:ml-32 lg:mr-32 pl-4">
        <h1 className="text-white border-b-2 border-gray-600">{currentWorkout.name}</h1>
        <Link to="/Workouts" className="text-white hover:text-gray-300 text-lg font-normal">
          ← Back to Categories
        </Link>
      </div>
      <div className="justify-center min-h-screen mb-16 lg:ml-32 lg:mr-32 pl-4">
        {currentWorkout.exercises.map((exercise, index) => (
          <ExerciseLayout 
            key={index}
            name={exercise.name} 
            image={exercise.image} 
            description={exercise.description}
          />
        ))}
      </div>
    </div>
  );
}

export default WorkoutDetails;