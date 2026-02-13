import { WebView } from 'react-native-webview';

export default function Screen() {
  return (
    <WebView
      source={{ uri: 'https://lm-sdotcom.vercel.app/home' }}
      javaScriptEnabled
      domStorageEnabled
    />
  );
}
