
# Componentized Form App in React Native

This is a React Native application that features a simple componentized form with a text input field and a label. The value entered in the text input field is captured and displayed in a text component (`Text`) in the application.

## Components

The application is composed of two main components:

### `TextInputComponent`

This component is responsible for rendering the text input field and its corresponding label.

Properties:

- `label`: A string representing the label associated with the text input field.
- `value`: A string representing the current value of the text input field.
- `onChangeText`: A function that is called whenever the text in the text input field changes.
- `placeholder`: A string that defines the placeholder text in the text input field.

### `OutputComponent`

This component is responsible for displaying the text entered by the user.

## Prints
<p align="center">
  <img src="img/01.jpg" width="240" />
  <img src="img/02.jpg" width="240" /> 
  <img src="img/03.jpg" width="240" />
</p>

## Prerequisites

Before getting started, you should have the React Native development environment set up on your machine. You can follow the [official React Native environment setup guide](https://reactnative.dev/docs/environment-setup) to do this.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/SauloCav/Text-Input-Output-React-Native/tree/main
   ```

2. Navigate to the project directory:

   ```bash
   cd react-native-form-app
   ```

3. Install the dependencies using npm or yarn:

   With npm:

   ```bash
   npm install
   ```

   With yarn:

   ```bash
   yarn install
   ```

## Usage

After installing the dependencies, you can start the application on an emulator or real device. Make sure your emulator is running or your device is connected via USB.

Command to start the application:

```bash
npx react-native run-android # For Android
# or
npx react-native run-ios # For iOS (macOS environment only)
```

This will start the application on your emulator or device. You will see the form with a text input field, and the entered value will be displayed below.

## Customization

You can customize the application by changing the properties of the `TextInputComponent` and `OutputComponent` components in the `App.js` file. This allows you to modify the label, initial value of the text input field, and other aspects of the form.

## Contribution

If you'd like to contribute to this project, feel free to create a pull request. I'll be happy to review and incorporate improvements.

## License

This project is licensed under the [MIT License](LICENSE).
