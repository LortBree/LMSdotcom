import { WebView } from 'react-native-webview';

const COURSE_ID = '698cca6b5e233db51ba709ce';

export default function Detail() {
  return (
    <WebView
      source={{
        uri: `https://lm-sdotcom-3n1p2i4pp-lortbrees-projects.vercel.app/course/${COURSE_ID}`
      }}
    />
  );
}
