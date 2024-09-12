import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Convert width percentage to device width
function widthPxToDP(percentage) {
    return (percentage / 100) * SCREEN_WIDTH;
}

// Convert height percentage to device height
function heightPxToDP(percentage) {
    return (percentage / 100) * SCREEN_HEIGHT;
}

export { SCREEN_WIDTH, SCREEN_HEIGHT, widthPxToDP, heightPxToDP };
