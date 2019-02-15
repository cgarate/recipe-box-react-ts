import * as React from "react";
import { Block } from "./Block";

interface Props {
  title: string;
}

// Functional components can be typed as React.SFC
// The following syntax also works:
// export const Card: React.SFC<Props> = (props) => {
//   return (<div>Hola</div>)
// }

export const Card = (props: Props) => {
  return <Block>{props.title}</Block>;
};
