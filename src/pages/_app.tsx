import GlobalStyle from "@/styles/Global.styles";
import theme from "@/styles/theme";
import { Plus_Jakarta_Sans } from "@next/font/google";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--plus-jakarta-sans",
  weight: "variable",
  display: "swap",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --plus-jakarta-sans: ${plusJakartaSans.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
