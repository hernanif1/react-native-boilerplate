type ThemeType = {
  background: {
    primary: string,
    secondary: string,
    tertiary: string,
  },
  text: {
    primary: string,
    secondary: string,
  },
};

type ITheme = $Shape<ThemeType>;

// ThemeType is necessary when use withTheme from styledComponents
export type { ITheme, ThemeType };
