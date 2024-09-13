# React Native Project with OpenAPI Integration

## Features
- Cross-platform mobile app (Android & iOS)
- OpenAPI integration for API calls
- Responsive UI components
- State management using Redux (if applicable)
- Navigation using React Navigation
- Form validation and error handling
- Support for various device screen sizes

## Prerequisites

Before you can run this project, ensure you have the following tools installed:

- **Node.js**: [Download here](https://nodejs.org/en/)
- **React Native CLI**: Install using `npm install -g react-native-cli`
- **Android Studio** (for Android development)
- **Xcode** (for iOS development)
- **Git** (optional, but recommended)
- **OpenAPI Generator CLI**: `npm install @openapitools/openapi-generator-cli -g`

### For API integration:
- You'll need access to an OpenAPI spec file (YAML or JSON format). Ensure the file is available in the `api-spec/` directory of your project.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
2. Install the dependencies:

```bash 
npm install
```

3. Set up the OpenAPI Client:
- Ensure that the OpenAPI specification file is available (e.g., api-spec/fakestore-openapi.yaml).
- Run the following command to generate the API client:

```bash
openapi-generator-cli generate -i api-spec/fakestore-openapi.yaml -g typescript-axios -o src/api
```

### This will generate a TypeScript API client in the src/api/ directory using the OpenAPI specification.

4. Link native dependencies (if any):

```bash
npx react-native link
```

5. Run the project:
For Android:

```bash
npx react-native run-android
```

5. Run the project:
for IOS:

```bash
cd ios/
pod install
cd ..
npx react-native run-ios
```

### Project Structure

```bash
/src
  /api         # Generated API client from OpenAPI spec
  /assets      # Images, fonts, etc.
  /components  # Reusable components
  /screens     # App screens
  /navigation  # React Navigation setup
  /store       # Redux state management (if applicable)
  /constants   # App-wide constants (e.g., colors, dimensions)
```