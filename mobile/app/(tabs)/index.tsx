import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Home() {
  return (
    <WebView
      source={{ uri: 'https://lm-sdotcom.vercel.app/' }}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
