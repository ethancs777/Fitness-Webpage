import { useParams, Link } from 'react-router-dom';
import ExerciseLayout from "./ExerciseLayout";

function WorkoutDetails() {
  const { category } = useParams();

  // Dynamic image loading function
  const getImage = (imageName) => {
    const extensions = ['.jpg', '.jpeg', '.png', '.webp'];
    
    for (const ext of extensions) {
      try {
        return require(`../images/workouts/${imageName}${ext}`);
      } catch (error) {
        continue;
      }
    }
    
    // Fallback to a default workout image if none found
    try {
      return require('../images/workouts/workout-default.jpg');
    } catch (error) {
      return null;
    }
  };

  const workoutData = {
    "upper-body": {
      name: "Upper Body Workouts",
      exercises: [
        {
          name: "Push-ups",
          image: getImage("pushups"),
          description: `A classic bodyweight exercise that targets your chest, shoulders, and triceps while engaging your core for stability. Start in a plank position with hands slightly wider than shoulder-width apart. Lower your body until your chest nearly touches the floor, keeping your body in a straight line from head to heels. Push back up to starting position with control. Beginners can modify by doing knee push-ups or incline push-ups against a wall or bench.

Recommended Sets/Reps:
Beginner: 2-3 sets of 5-10 reps
Intermediate: 3-4 sets of 10-20 reps  
Advanced: 4-5 sets of 20+ reps or add variations like diamond push-ups`
        },
        {
          name: "Pull-ups",
          image: getImage("pullups"),
          description: `An excellent compound exercise for building back and bicep strength while improving grip strength and overall upper body power. Hang from a pull-up bar with an overhand grip, hands shoulder-width apart. Pull your body up until your chin clears the bar, focusing on squeezing your shoulder blades together. Lower yourself with control to full arm extension. Use resistance bands or assisted pull-up machines if you're a beginner.

Recommended Sets/Reps:
Beginner: 3-4 sets of 1-5 reps (assisted)
Intermediate: 3-4 sets of 5-10 reps
Advanced: 4-5 sets of 10-15 reps or add weight for increased difficulty`
        },
        {
          name: "Bench Press",
          image: getImage("benchpress"),
          description: `A fundamental strength training exercise that primarily targets the chest, front shoulders, and triceps. Lie flat on a bench with feet firmly planted on the floor. Grip the barbell with hands slightly wider than shoulder-width apart. Lower the bar to your chest with control, touching lightly, then press the weight back up to full arm extension. Always use a spotter for safety and proper form.

Recommended Sets/Reps:
Beginner: 3 sets of 8-12 reps at 60-70% 1RM
Intermediate: 3-4 sets of 6-10 reps at 70-80% 1RM
Advanced: 4-5 sets of 4-8 reps at 80-90% 1RM for strength or 3-4 sets of 8-12 reps for hypertrophy`
        },
        {
          name: "Dips",
          image: getImage("dips"),
          description: `A challenging bodyweight exercise that targets your triceps, lower chest, and front shoulders. Position yourself between parallel bars or on a dip station, supporting your body weight with straight arms. Lower your body by bending your elbows until your shoulders are slightly below your elbows, then push back up to the starting position. Keep your torso upright and avoid swinging. Beginners can use resistance bands for assistance or perform bench dips.

Recommended Sets/Reps:
Beginner: 2-3 sets of 3-8 reps (assisted)
Intermediate: 3-4 sets of 8-15 reps
Advanced: 4-5 sets of 15+ reps or add weight with a dip belt`
        },
        {
          name: "Overhead Press",
          image: getImage("overheadpress"),
          description: `A compound movement that builds shoulder strength, stability, and core engagement. Stand with feet hip-width apart, holding a barbell or dumbbells at shoulder level. Press the weight directly overhead until your arms are fully extended, then lower back to shoulder level with control. Keep your core tight throughout the movement and avoid arching your back excessively. This exercise improves functional pushing strength and shoulder mobility.

Recommended Sets/Reps:
Beginner: 3 sets of 8-12 reps with light to moderate weight
Intermediate: 3-4 sets of 6-10 reps
Advanced: 4-5 sets of 4-8 reps for strength or 3-4 sets of 8-12 reps for muscle building`
        },
        {
          name: "Rows",
          image: getImage("rows"),
          description: `Essential for back development, posture improvement, and balancing pushing movements. Can be performed with dumbbells, barbells, or cables. Pull the weight towards your body while squeezing your shoulder blades together and keeping your elbows close to your sides. Focus on retracting your shoulder blades and feeling the contraction in your mid-back and lats. This exercise helps counteract forward head posture from daily activities and strengthens the entire posterior chain.

Recommended Sets/Reps:
Beginner: 3 sets of 8-12 reps with moderate weight
Intermediate: 3-4 sets of 8-12 reps
Advanced: 4 sets of 6-10 reps with heavier weight or 3-4 sets of 12-15 reps for volume`
        },
        {
          name: "Lat Pulldowns",
          image: getImage("latpulldowns"),
          description: `An excellent machine-based exercise for building lat strength and width, serving as a great progression toward pull-ups. Sit at the lat pulldown machine with thighs secured under the pads. Grip the bar slightly wider than shoulder-width with an overhand grip. Pull the bar down to your upper chest while leaning slightly back and squeezing your lats. Control the weight back to the starting position. Focus on initiating the movement with your lats rather than your arms.

Recommended Sets/Reps:
Beginner: 3 sets of 10-15 reps
Intermediate: 3-4 sets of 8-12 reps
Advanced: 4 sets of 6-10 reps with heavier weight or 3-4 sets of 12-15 reps for volume`
        },
        {
          name: "Bicep Curls",
          image: getImage("bicepcurls"),
          description: `An isolation exercise that specifically targets the biceps muscles for arm development and strength. Stand with feet hip-width apart, holding dumbbells or a barbell with an underhand grip. Keep your elbows stable at your sides and curl the weight up by contracting your biceps, focusing on the squeeze at the top of the movement. Lower the weight slowly and with control. Avoid using momentum or swinging your body. Variations include hammer curls, concentration curls, and cable curls.

Recommended Sets/Reps:
Beginner: 3 sets of 12-15 reps with lighter weight
Intermediate: 3-4 sets of 10-12 reps
Advanced: 4 sets of 8-10 reps with heavier weight`
        }
      ]
    },
    "lower-body": {
      name: "Lower Body Workouts",
      exercises: [
        {
          name: "Squats",
          image: getImage("squats"),
          description: `The king of leg exercises that works your quadriceps, glutes, hamstrings, and core muscles. Stand with feet shoulder-width apart, toes slightly pointed outward. Lower your body by pushing your hips back and bending your knees as if sitting in a chair. Keep your chest up, core engaged, and knees tracking over your toes. Descend until your thighs are parallel to the floor, then drive through your heels to return to standing. This fundamental movement pattern improves functional strength for daily activities.

Recommended Sets/Reps:
Beginner: 3 sets of 10-15 bodyweight squats
Intermediate: 3-4 sets of 8-12 reps with added weight
Advanced: 4-5 sets of 5-8 reps with heavy weight or 3-4 sets of 15-20 reps for endurance`
        },
        {
          name: "Lunges",
          image: getImage("lunges"),
          description: `A unilateral exercise that builds single-leg strength, stability, and addresses muscle imbalances between legs. Step forward with one leg and lower your hips until both knees are bent at approximately 90 degrees. Your front knee should be directly above your ankle, not pushed out past your toes. Push through your front heel to return to the starting position, then repeat on the other leg. Lunges improve balance, coordination, and functional movement patterns while targeting the quads, glutes, and hamstrings.

Recommended Sets/Reps:
Beginner: 2-3 sets of 8-10 reps per leg
Intermediate: 3-4 sets of 10-15 reps per leg
Advanced: 3-4 sets of 12-20 reps per leg or add weight with dumbbells or a barbell`
        },
        {
          name: "Deadlifts",
          image: getImage("deadlifts"),
          description: `A compound movement that works your entire posterior chain including hamstrings, glutes, lower back, traps, and core. Stand with feet hip-width apart, barbell close to your shins. Hinge at the hips by pushing your hips back, keeping your back straight and chest up. Grip the bar with hands just outside your legs. Drive through your heels and extend your hips and knees simultaneously to lift the weight. The bar should travel close to your body throughout the movement. This exercise builds tremendous functional strength and improves posture.

Recommended Sets/Reps:
Beginner: 3 sets of 5-8 reps with light weight, focus on form
Intermediate: 3-4 sets of 5-8 reps
Advanced: 4-5 sets of 3-6 reps for strength or 3-4 sets of 6-10 reps for muscle building`
        },
        {
          name: "Bulgarian Split Squats",
          image: getImage("bulgariansplitsquats"),
          description: `An advanced unilateral exercise that challenges balance, stability, and single-leg strength. Stand 2-3 feet in front of a bench or elevated surface. Place the top of one foot behind you on the bench. Lower your body into a lunge position by bending your front knee until your thigh is parallel to the floor. Your front leg should do most of the work while the rear leg provides minimal support. Push through your front heel to return to the starting position. This exercise helps correct imbalances and builds incredible leg strength.

Recommended Sets/Reps:
Beginner: 2-3 sets of 6-10 reps per leg
Intermediate: 3 sets of 10-15 reps per leg
Advanced: 3-4 sets of 12-20 reps per leg or add weight with dumbbells`
        },
        {
          name: "Calf Raises",
          image: getImage("calfraises"),
          description: `An isolation exercise specifically targeting the calf muscles (gastrocnemius and soleus) for lower leg strength and definition. Stand with the balls of your feet on a platform or step, allowing your heels to hang below the level of your toes. Rise up onto your toes as high as possible, contracting your calf muscles at the top of the movement. Hold briefly, then lower your heels below the starting position for a full stretch. Control the movement throughout and avoid bouncing. Strong calves are essential for walking, running, and jumping activities.

Recommended Sets/Reps:
Beginner: 3-4 sets of 15-25 reps with body weight
Intermediate: 3-4 sets of 15-25 reps holding dumbbells for added resistance
Advanced: 3-4 sets of 20-30 reps with weight or single-leg variations`
        },
        {
          name: "Hip Thrusts",
          image: getImage("hipthrusts"),
          description: `Excellent exercise for glute development, hip extension strength, and posterior chain activation. Sit with your upper back against a bench, feet planted firmly on the floor hip-width apart. Place a barbell or weight across your hips (use a pad for comfort). Drive your hips up by squeezing your glutes, creating a straight line from your knees to your shoulders. Hold the top position briefly while contracting your glutes, then lower with control. This exercise is crucial for athletes and helps improve posture by strengthening often-neglected glute muscles.

Recommended Sets/Reps:
Beginner: 3 sets of 12-15 reps with body weight
Intermediate: 3-4 sets of 10-15 reps with added weight
Advanced: 4 sets of 8-12 reps with heavy weight or 3-4 sets of 15-20 reps for high volume`
        },
        {
          name: "Step-ups",
          image: getImage("stepups"),
          description: `A functional movement that mimics climbing stairs and targets the quadriceps, glutes, and improves balance and coordination. Stand in front of a sturdy box or bench (knee height or slightly lower). Step onto the platform with one foot, driving through your heel and standing tall. Avoid pushing off with your trailing leg - let the working leg do all the work. Step back down with control and repeat. This exercise translates well to daily activities and sports performance while building unilateral leg strength.

Recommended Sets/Reps:
Beginner: 2-3 sets of 8-12 reps per leg
Intermediate: 3 sets of 12-15 reps per leg
Advanced: 3-4 sets of 15-20 reps per leg or add weight with dumbbells or a weighted vest`
        },
        {
          name: "Wall Sits",
          image: getImage("wallsits"),
          description: `An isometric exercise that builds muscular endurance in your quadriceps and glutes while improving mental toughness. Lean against a wall with your back flat and feet about 2 feet away from the wall. Slide down until your thighs are parallel to the ground, creating a 90-degree angle at your knees. Hold this position while keeping your core engaged and breathing steadily. This exercise builds the kind of endurance needed for activities like skiing, hiking, and prolonged standing.

Recommended Sets/Time:
Beginner: 3 sets of 20-30 seconds
Intermediate: 3 sets of 45-60 seconds
Advanced: 3-4 sets of 60-90 seconds or single-leg variations for increased difficulty`
        }
      ]
    },
    "full-body": {
      name: "Full Body Workouts",
      exercises: [
        {
          name: "Burpees",
          image: getImage("burpees"),
          description: `The ultimate full-body exercise that combines strength, cardio, and coordination while working every major muscle group. Start standing, then squat down and place your hands on the floor. Jump or step your feet back into a plank position and perform a push-up. Jump or step your feet back to the squat position, then explosively jump up with your arms overhead. This high-intensity exercise burns significant calories and improves both anaerobic and aerobic fitness. Perfect for HIIT workouts and building mental toughness.

Recommended Sets/Reps:
Beginner: 3 sets of 5-8 reps (modify by stepping instead of jumping)
Intermediate: 3-4 sets of 8-15 reps
Advanced: 4-5 sets of 15-20 reps or incorporate into HIIT intervals (30 seconds work, 30 seconds rest)`
        },
        {
          name: "Mountain Climbers",
          image: getImage("mountainclimbers"),
          description: `A dynamic cardio and core exercise that elevates heart rate while strengthening the entire body. Start in a high plank position with hands directly under shoulders and body in a straight line. Alternate bringing your knees toward your chest in a running motion while keeping your hips level and core engaged. The faster the tempo, the more cardiovascular challenge. This exercise improves core stability, shoulder strength, and cardiovascular endurance while being easily scalable for different fitness levels.

Recommended Sets/Duration:
Beginner: 3 sets of 20-30 seconds
Intermediate: 3-4 sets of 30-45 seconds
Advanced: 4 sets of 45-60 seconds or count reps: 3-4 sets of 20-40 total reps (10-20 per leg)`
        },
        {
          name: "Jumping Jacks",
          image: getImage("jumpingjacks"),
          description: `A classic total-body cardio exercise that improves coordination, burns calories, and serves as an excellent warm-up movement. Start with feet together and arms at your sides. Jump while spreading your legs to shoulder-width apart and simultaneously raising your arms overhead. Jump back to the starting position and repeat in a fluid, rhythmic motion. This exercise elevates heart rate quickly, improves bone density through impact, and enhances coordination between upper and lower body movements.

Recommended Sets/Reps:
Beginner: 3 sets of 30-60 seconds or 20-30 reps
Intermediate: 3-4 sets of 60-90 seconds or 40-60 reps
Advanced: 4 sets of 90-120 seconds or incorporate into circuit training with minimal rest`
        },
        {
          name: "Thrusters",
          image: getImage("thrusters"),
          description: `A compound movement combining a front squat with an overhead press for ultimate total-body conditioning. Hold dumbbells or a barbell at shoulder level with feet shoulder-width apart. Squat down until thighs are parallel to the floor, then explosively drive up through your heels while simultaneously pressing the weight overhead. Lower the weight back to shoulders and repeat. This exercise targets legs, core, shoulders, and arms while providing significant cardiovascular challenge. Essential for functional fitness and athletic performance.

Recommended Sets/Reps:
Beginner: 3 sets of 8-12 reps with light weight
Intermediate: 3-4 sets of 10-15 reps
Advanced: 4 sets of 12-20 reps or use in EMOM (Every Minute on the Minute) format for conditioning`
        },
        {
          name: "Turkish Get-ups",
          image: getImage("turkishgetups"),
          description: `A complex, multi-step movement that improves mobility, stability, coordination, and full-body strength. Start lying on your back holding a weight (kettlebell or dumbbell) in one hand with arm extended toward ceiling. Follow a specific sequence to transition from lying to standing while keeping the weight overhead throughout. This exercise challenges shoulder stability, core strength, hip mobility, and coordination while building functional movement patterns used in daily life and sports.

Recommended Sets/Reps:
Beginner: 2-3 sets of 3-5 reps per side with light weight, focus on technique
Intermediate: 3 sets of 5-8 reps per side
Advanced: 3-4 sets of 8-10 reps per side or increase weight while maintaining perfect form`
        },
        {
          name: "Man Makers",
          image: getImage("manmakers"),
          description: `An extremely challenging full-body exercise that combines multiple movements for maximum intensity and calorie burn. Hold dumbbells and perform a burpee, but add renegade rows (row each dumbbell while in plank position) after the push-up, then clean the dumbbells to shoulders and finish with an overhead press. This exercise works every muscle group while providing intense cardiovascular challenge. Perfect for advanced athletes looking for efficient, time-saving workouts that build strength and conditioning simultaneously.

Recommended Sets/Reps:
Intermediate: 3 sets of 5-8 reps
Advanced: 3-4 sets of 8-12 reps or use in circuit training
Note: This is an advanced exercise - master burpees, rows, and thrusters separately first`
        },
        {
          name: "Bear Crawls",
          image: getImage("bearcrawls"),
          description: `A primal movement pattern that works the entire body while improving coordination, core stability, and shoulder strength. Start on hands and knees with knees hovering just above the ground. Crawl forward by moving opposite hand and foot simultaneously while keeping your knees low and hips level. Maintain a neutral spine and engage your core throughout. This exercise builds functional strength, improves posture, and enhances the connection between upper and lower body movement patterns.

Recommended Sets/Distance:
Beginner: 3 sets of 10-20 steps forward
Intermediate: 3 sets of 20-30 steps or 30-45 seconds
Advanced: 3-4 sets of 45-60 seconds or add directional changes (forward, backward, sideways)`
        },
        {
          name: "Plank to Push-up",
          image: getImage("planktopushup"),
          description: `A dynamic exercise that transitions between forearm plank and high plank positions, challenging core stability, shoulder strength, and coordination. Start in a forearm plank position. One arm at a time, push up to your hands into a high plank position, then lower back down to forearms. Alternate which arm leads the movement to ensure balanced development. Keep your hips level and core engaged throughout the entire movement to prevent rotation or sagging.

Recommended Sets/Reps:
Beginner: 2-3 sets of 5-8 transitions
Intermediate: 3 sets of 8-12 transitions
Advanced: 3-4 sets of 12-20 transitions or perform for time: 30-60 seconds per set`
        }
      ]
    },
    "cardio": {
      name: "Cardio Workouts",
      exercises: [
        {
          name: "High Knees",
          image: getImage("highknees"),
          description: `An energizing cardio exercise that elevates heart rate while improving running form and leg turnover. Run in place while bringing your knees up to hip level with each step. Maintain good posture with a slight forward lean, pump your arms in rhythm, and land on the balls of your feet. Focus on quick, light steps rather than high impact. This exercise improves hip flexor strength, running efficiency, and cardiovascular fitness while serving as an excellent warm-up for more intense activities.

Recommended Sets/Duration:
Beginner: 3 sets of 20-30 seconds with 30-60 seconds rest
Intermediate: 3-4 sets of 30-45 seconds with 30 seconds rest
Advanced: 4 sets of 45-60 seconds or use in interval training (30 seconds on, 15 seconds off)`
        },
        {
          name: "Jump Rope",
          image: getImage("jumprope"),
          description: `A classic cardio exercise that improves coordination, agility, and burns calories efficiently while being easy on the joints when done properly. Start with basic two-foot bounce, keeping jumps low (just enough to clear the rope) and staying on the balls of your feet. Maintain relaxed shoulders and turn the rope with your wrists rather than your arms. Progress to more complex patterns like alternating feet, double unders, or criss-cross. Excellent for improving bone density, coordination, and cardiovascular fitness in minimal space.

Recommended Sets/Duration:
Beginner: 3 sets of 30-60 seconds with 60 seconds rest
Intermediate: 3-4 sets of 1-2 minutes with 30-45 seconds rest
Advanced: 4-5 sets of 2-3 minutes or continuous jumping for 10-20 minutes`
        },
        {
          name: "Box Jumps",
          image: getImage("boxjumps"),
          description: `An explosive plyometric exercise that develops power, athleticism, and lower body strength. Stand facing a sturdy box or platform with feet shoulder-width apart. Swing your arms back and explosively jump onto the box, landing softly with both feet flat on the surface. Focus on landing quietly and stepping down rather than jumping down to reduce impact. Start with a lower box and progress height as you improve. This exercise builds explosive power essential for sports performance and functional movement.

Recommended Sets/Reps:
Beginner: 3 sets of 5-8 jumps on 12-18 inch box
Intermediate: 3-4 sets of 8-12 jumps on 18-24 inch box
Advanced: 4 sets of 10-15 jumps on 24+ inch box with 60-90 seconds rest between sets`
        },
        {
          name: "Sprint Intervals",
          image: getImage("sprintintervals"),
          description: `High-intensity interval training that alternates between maximum effort sprints and recovery periods for superior cardiovascular and metabolic benefits. Run at maximum effort (95-100% intensity) for short durations followed by active recovery at an easy pace. This training method improves VO2 max, burns significant calories both during and after exercise (EPOC effect), and enhances both anaerobic and aerobic capacity more effectively than steady-state cardio.

Recommended Protocol:
Beginner: 4-6 x 20 seconds sprint, 40 seconds recovery walk/jog
Intermediate: 6-8 x 30 seconds sprint, 90 seconds recovery
Advanced: 8-10 x 30-60 seconds sprint, 60-90 seconds recovery
Note: Perform 2-3 times per week with at least one day rest between sessions`
        },
        {
          name: "Shuttle Runs",
          image: getImage("shuttleruns"),
          description: `A conditioning exercise that improves agility, speed, acceleration, and deceleration while enhancing sport-specific movement patterns. Set up two markers 10-25 yards apart. Sprint to the first marker, touch the ground or marker, then immediately change direction and sprint back to the starting point. Continue for the specified duration or repetitions. This exercise builds the kind of multi-directional speed and agility needed for sports while providing intense cardiovascular challenge and improving change-of-direction mechanics.

Recommended Sets/Duration:
Beginner: 3 sets of 30 seconds with markers 10-15 yards apart
Intermediate: 3-4 sets of 45 seconds with markers 15-20 yards apart
Advanced: 4-5 sets of 60 seconds with markers 20-25 yards apart, rest 60-90 seconds between sets`
        },
        {
          name: "Stair Climbing",
          image: getImage("stairclimbing"),
          description: `A practical and effective cardio exercise that can be done anywhere with stairs, building lower body strength while improving cardiovascular fitness. Climb stairs at a steady, challenging pace while maintaining good posture and using handrails only for balance, not support. Take steps one or two at a time depending on your fitness level and goals. This weight-bearing exercise improves bone density, strengthens glutes and legs, and provides excellent cardiovascular training with functional movement patterns used in daily life.

Recommended Protocol:
Beginner: 5-10 minutes of continuous stair climbing at moderate pace
Intermediate: 15-20 minutes or interval format (2 minutes climbing, 1 minute rest)
Advanced: 20-30 minutes continuous or power intervals (30 seconds fast, 30 seconds moderate) for 15-20 minutes`
        },
        {
          name: "Dancing",
          image: getImage("dancing"),
          description: `A fun and engaging form of cardio that improves cardiovascular health, coordination, balance, and mood while burning significant calories. Any style of dancing provides excellent cardiovascular benefits - from high-energy Zumba and hip-hop to more controlled ballroom or contemporary styles. Dancing engages multiple muscle groups, improves cognitive function through learning choreography, and releases endorphins for mental health benefits. The social aspect and music make it easier to sustain than traditional cardio exercises.

Recommended Duration:
Beginner: Start with 20-30 minutes of moderate-intensity dancing
Intermediate: 30-45 minutes per session depending on intensity and style
Advanced: 45-60 minutes of high-intensity dance styles
Note: Can be done 3-5 times per week as it's generally easier to recover from than high-impact exercises`
        },
        {
          name: "Rowing",
          image: getImage("rowing"),
          description: `A low-impact, full-body cardio exercise that engages 85% of your muscles while being gentle on joints. Proper rowing technique involves driving with your legs first, then engaging your core and pulling with your arms. The recovery phase should be controlled and relaxed. Focus on maintaining good posture throughout the stroke cycle. Rowing builds cardiovascular endurance, strengthens the posterior chain, and improves posture by working muscles that counteract forward head posture from desk work.

Recommended Workouts:
Beginner: 3 sets of 5-10 minutes at moderate pace with 2-3 minutes rest
Intermediate: 15-25 minutes steady state or 4-6 x 4 minutes with 2 minutes rest
Advanced: 30-45 minutes steady state or interval training (2k, 1k, 500m intervals with equal rest)
Note: Aim for 20-24 strokes per minute for steady state`
        }
      ]
    },
    "core": {
      name: "Core Workouts",
      exercises: [
        {
          name: "Planks",
          image: getImage("planks"),
          description: `The gold standard isometric core exercise that builds stability, endurance, and total-body strength. Start in a push-up position but rest on your forearms instead of hands. Maintain a straight line from head to heels by engaging your entire core, glutes, and legs. Breathe normally while holding the position. Avoid letting your hips sag or pike up. This exercise strengthens deep core muscles essential for spine stability, improves posture, and builds the foundation for more advanced core exercises.

Recommended Sets/Duration:
Beginner: 3 sets of 15-30 seconds
Intermediate: 3-4 sets of 30-60 seconds
Advanced: 3-4 sets of 60-120 seconds or progress to single-arm/leg variations for increased difficulty`
        },
        {
          name: "Russian Twists",
          image: getImage("russiantwists"),
          description: `A dynamic rotational core exercise that targets the obliques and improves core strength in multiple planes of movement. Sit with knees bent and feet slightly elevated, leaning back to create a V-shape with your torso and thighs. Rotate your torso from side to side, bringing your hands toward the floor beside your hips. Keep your chest up and core engaged throughout. Add a medicine ball or weight for increased difficulty. This exercise builds rotational strength essential for sports and daily activities.

Recommended Sets/Reps:
Beginner: 3 sets of 20-30 total twists (10-15 each side)
Intermediate: 3-4 sets of 30-40 twists
Advanced: 3-4 sets of 40-60 twists or add weight and perform 3 sets of 20-30 twists with control`
        },
        {
          name: "Bicycle Crunches",
          image: getImage("bicyclecrunches"),
          description: `A dynamic abdominal exercise that effectively targets all core muscles while improving coordination and stability. Lie on your back with hands behind your head and legs lifted with knees bent at 90 degrees. Alternate bringing opposite elbow to knee while extending the other leg, mimicking a bicycle pedaling motion. Focus on rotating your torso rather than just moving your elbows, and avoid pulling on your neck. Keep constant tension in your core throughout the movement.

Recommended Sets/Reps:
Beginner: 3 sets of 20-30 total reps (10-15 per side)
Intermediate: 3-4 sets of 30-40 reps
Advanced: 3-4 sets of 40-60 reps or slow the tempo for 3 sets of 20-30 controlled reps`
        },
        {
          name: "Dead Bug",
          image: getImage("deadbug"),
          description: `A core stability exercise that teaches proper spine alignment while challenging coordination and anti-extension strength. Lie on your back with arms extended toward the ceiling and knees bent at 90 degrees. Slowly lower opposite arm and leg toward the floor while keeping your lower back pressed against the ground and core engaged. Return to starting position and repeat on the other side. This exercise builds the kind of core stability needed for proper movement patterns and back health.

Recommended Sets/Reps:
Beginner: 2-3 sets of 8-12 reps per side
Intermediate: 3 sets of 12-15 reps per side
Advanced: 3-4 sets of 15-20 reps per side or add light weights/resistance bands for increased challenge
Note: Focus on slow, controlled movement over speed`
        },
        {
          name: "Hollow Body Hold",
          image: getImage("hollowbodyhold"),
          description: `An advanced isometric exercise that builds incredible core strength and teaches proper body alignment for gymnastics and advanced movements. Lie on your back and press your lower back into the floor while lifting your shoulders and legs off the ground, creating a 'hollow' shape. Your body should form a gentle curve like a rocking chair. Keep your arms extended and maintain the position while breathing normally. This exercise builds the core strength foundation needed for advanced movements like handstands and levers.

Recommended Sets/Duration:
Beginner: 3 sets of 10-20 seconds (modify by bending knees)
Intermediate: 3 sets of 20-40 seconds
Advanced: 3-4 sets of 40-60 seconds or progress to hollow body rocks`
        },
        {
          name: "Mountain Climber Twists",
          image: getImage("mountainclimbertwists"),
          description: `A dynamic variation of mountain climbers that adds rotational movement to challenge the obliques while maintaining the cardiovascular benefits. Start in a high plank position and alternate bringing your knee toward the opposite elbow, adding a twisting motion to target the obliques. Keep your hips level and core engaged while maintaining the plank position. This exercise combines cardio with core strengthening and improves rotational stability and power.

Recommended Sets/Duration:
Beginner: 3 sets of 20-30 seconds
Intermediate: 3-4 sets of 30-45 seconds
Advanced: 4 sets of 45-60 seconds or count reps: 3-4 sets of 20-40 total twists (10-20 per side)`
        },
        {
          name: "Side Planks",
          image: getImage("sideplanks"),
          description: `An essential exercise for targeting the obliques and improving lateral core strength and stability. Lie on your side with forearm on the ground, elbow directly under your shoulder. Lift your hips to create a straight line from head to feet, engaging your core and glutes. Hold the position while breathing normally. This exercise addresses imbalances, improves posture, and builds the lateral stability needed for sports and injury prevention. Switch sides to ensure balanced development.

Recommended Sets/Duration:
Beginner: 2-3 sets of 15-30 seconds per side
Intermediate: 3 sets of 30-45 seconds per side
Advanced: 3-4 sets of 45-90 seconds per side or add leg lifts for increased difficulty`
        },
        {
          name: "Leg Raises",
          image: getImage("legraises"),
          description: `An effective exercise for targeting the lower abdominals and hip flexors while building core strength and stability. Lie on your back with hands at your sides or under your lower back for support. Keep your legs straight and slowly lift them until they're perpendicular to the floor, then lower them back down with control without touching the ground. Focus on using your core muscles rather than momentum, and keep your lower back pressed against the floor throughout the movement.

Recommended Sets/Reps:
Beginner: 3 sets of 8-12 reps (bend knees if needed)
Intermediate: 3-4 sets of 12-15 reps
Advanced: 3-4 sets of 15-20 reps or add ankle weights for increased resistance`
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
        <Link to="/Workouts" className="text-white hover:text-gray-300 text-lg font-bold">
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