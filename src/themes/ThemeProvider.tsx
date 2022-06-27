import { CssBaseline } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { ReactNode, useMemo } from "react";

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};
