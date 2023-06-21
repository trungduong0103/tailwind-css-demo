import { Html, Head, Main, NextScript } from "next/document";
import { getRGBColor } from "../utils/colors.utils";

export default function Document() {
  const primaryColor = getRGBColor("#2079FF", "primary");

  return (
    <Html>
      <Head>
        <style id="custom-color">
          {`
          :root {
            ${primaryColor}
          }
        `}
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
