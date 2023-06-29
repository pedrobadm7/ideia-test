import theme from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dashboard';
import {ThemeProvider} from 'styled-components'

export default function App() {
  return (
   <ThemeProvider theme={theme}>
      <Dashboard />
   </ThemeProvider>
  );
}
