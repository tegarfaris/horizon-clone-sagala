import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppPropsWithLayout } from "@horizon-sagala/app/interface/main.interface";
import DashboardLayout from "@horizon-sagala/app/layout/dashboard-layout";
import "@horizon-sagala/styles/globals.css";
import { DM_Sans } from "next/font/google";
import { COLORS } from "../../themes/theme";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const theme = extendTheme({
  fonts: {
    dm_sans: dm_sans.style.fontFamily,
  },
  styles: {
    global: () => ({
      body: {
        backgroundColor: COLORS.PURPLE_SLATE,
        fontSize: {
          base: "12px",
          md: "14px",
        },
        color: "#000",
      },
    }),
  },
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <ChakraProvider theme={theme}>
      {Component.getLayout ? (
        <Component {...pageProps} />
      ) : (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      )}
    </ChakraProvider>
  );
}
