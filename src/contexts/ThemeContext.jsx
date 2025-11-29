import {createContext, useState, useEffect} from 'react';

export const themes = {
  light: {
    color: '#000',                    // texto preto
    background: '#ffffff',             // branco puro para elementos
    infoBackground: 'rgba(70, 70, 70, 0.27)', // leve transparência
    bodyBackground: 'linear-gradient(135deg, #fdfbfb 0%, #a8a8a8ff 100%)',
    rollBarBackground: 'rgba(0, 0, 0, 0.1)',  // cinza claro consistente
    selectTitleColor: '#000',        
    selectTitleBackground: 'rgba(0, 185, 145, 0.52)', 
    selectItemsColor: '#000',
    selectItemsBackground: 'rgba(91, 184, 133, 0.42)',
  },
  dark: {
    color: '#fff',                     // texto branco
    background: '#2c2c2c',            // cinza escuro consistente
    infoBackground: 'rgba(242, 242, 242, 0.4)', // leve transparência
    bodyBackground: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    rollBarBackground: '#2c5364',  
    selectTitleColor: '#fff',        
    selectTitleBackground: 'rgba(138, 255, 191, 0.15)', 
    selectItemsColor: '#fff',
    selectItemsBackground: 'rgba(91, 184, 133, 0.42)',
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  // 🔹 Lê o tema salvo no localStorage (se existir)
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme ? JSON.parse(storedTheme) : themes.light;

  const [theme, setTheme] = useState(initialTheme);

  // 🔹 Sempre que o tema mudar, salva no localStorage
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};