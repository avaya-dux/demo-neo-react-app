import './App.css'
import "@avaya/neo-react/avaya-neo-react.css";

import {
  AppLayout,
  Avatar,
  Icon,
  Image,
  LeftNav,
  TopNav,
  Widget,
} from "@avaya/neo-react";
import { ReactNode } from "react";

function App() {

  const emptyWidget: ReactNode = (
    <Widget empty>
      <Icon icon="settings" aria-label="settings" />
      <p>Widget goes here</p>
    </Widget>
  );

  const TopNavBar = (
    <TopNav
      title="My First Neo React App"
      logo={<Image src="/vite.svg" isDecorativeOrBranding />}
    >
      <>
        <TopNav.IconButton aria-label="Settings" icon="settings" />
      </>
    </TopNav>
  );


  return (
    <>
      <AppLayout header={TopNavBar} mainContent={emptyWidget} />
    </>
  );
}

export default App
