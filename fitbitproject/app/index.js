import { HeartRateSensor } from "heart-rate";

if (HeartRateSensor) {
   console.log("This device has a HeartRateSensor!");
   const hrm = new HeartRateSensor();
   hrm.addEventListener("reading", () => {
     console.log(`Current heart rate: ${hrm.heartRate}`);
   });
   hrm.start();
} else {
   console.log("This device does NOT have a HeartRateSensor!");
}