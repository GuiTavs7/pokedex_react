import {ThemeContext, themes} from '../../contexts/ThemeContext';
import {useContext} from 'react';
import { ThemeButton } from '../../styles/ThemeButton';
import {Sun, Moon} from 'lucide-react';

export const ThemeTogglerButton = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);

    const isLight = theme === themes.light;

    return (
    <ThemeButton
      style={{ backgroundColor: isLight ? themes.dark.background : themes.light.background }}
      onClick={() => toggleTheme(isLight ? themes.dark : themes.light)}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      {isLight ? <Moon size={20} /> : <Sun size={20} />}
    </ThemeButton>
  );
}