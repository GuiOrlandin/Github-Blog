import "styled-components";
import { defaultTheme } from "../styles/Themes/default";

type Themetype = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Themetype {}
}
