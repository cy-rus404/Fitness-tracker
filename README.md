Fitness Tracker App
A simple fitness tracking app built with React Native and Expo. This app uses Expo's Pedometer API to track the user's daily step count and display progress toward a daily step goal.

Features
Track daily step count in real-time using the device's pedometer.
Display a progress bar to show progress toward a daily step goal (default goal is 10,000 steps).
Refresh button to manually update the step count.
Check if the device has pedometer support.
Getting Started
Prerequisites
To run this project, you'll need to have the following installed:

Node.js
Expo CLI
A physical Android or iOS device (Pedometer API will not work on a simulator)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/cy-rus404/fitness-tracker.git
cd fitness-tracker-app
Install dependencies:

bash
Copy code
npm install
Install Expo Pedometer API: The app uses Expo's sensors, specifically the Pedometer API. Make sure to install it:

bash
Copy code
npx expo install expo-sensors
Running the App
To run the app on your physical device:

Start the Expo development server:

bash
Copy code
npx expo start
Run on your device:

Use the Expo Go app on your Android or iOS device.
Scan the QR code provided by the Expo server.
iOS Permissions
For iOS devices, you need to add motion permissions to the app. Update the app.json file to include the following:

json
Copy code
{
  "expo": {
    "ios": {
      "infoPlist": {
        "NSMotionUsageDescription": "We use your motion data to track your steps."
      }
    }
  }
}
Testing on a Physical Device
This app requires a physical device with a pedometer (step sensor) to function. The step tracking feature will not work on a simulator or emulator.

Project Structure
bash
Copy code
.
├── App.js               # Main application file
├── assets/              # Image and asset folder (optional)
├── node_modules/        # Node modules folder
├── package.json         # Dependencies and scripts
└── app.json             # Expo configuration
Usage
Once the app is running on your device, you can:

See if your device supports the pedometer.
View your steps taken today.
Track your progress toward a default daily step goal of 10,000 steps using the progress bar.
Refresh the step count by clicking the "Refresh Step Count" button.
Future Enhancements
Some potential features that could be added in the future:

Set a custom daily step goal.
Track step history over multiple days or weeks.
Display achievements when the user reaches step milestones.
Contributing
Contributions are welcome! Feel free to open a pull request or issue if you have suggestions for improvements or bug fixes.


