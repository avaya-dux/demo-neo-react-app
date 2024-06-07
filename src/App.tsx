import './App.css'
import "@avaya/neo-react/avaya-neo-react.css";

import {
  AppLayout,
  // Icon,
  Image,
  LeftNav,
  TopNav,
  // Widget,
} from "@avaya/neo-react";
import { ReactNode } from "react";
import PlayersPage from "./pages/PlayersPage";

function App() {

  // const emptyWidget: ReactNode = (
  //   <Widget empty>
  //     <Icon icon="settings" aria-label="settings" />
  //     <p>Widget goes here</p>
  //   </Widget>
  // );
  
  const leftNav: ReactNode = (
    <LeftNav
      aria-label="Demo app left nav"
      currentUrl="http://active.com"
    >
      <LeftNav.TopLinkItem
        icon="interaction-details"
        label="Legendary Players"
        href="/players"
      />
      <LeftNav.TopLinkItem icon="user-add" label="Teams" href="/teams" />
    </LeftNav>
  );

  const TopNavBar = (
    <TopNav
      title="My First Neo React App"
      logo={<Image src="/logo.svg" isDecorativeOrBranding />}
    >
      <>
        <TopNav.IconButton aria-label="Settings" icon="settings" />
      </>
    </TopNav>
  );


  return (
    <>
      <AppLayout
        header={TopNavBar}
        leftPanel={leftNav}
        mainContent={<PlayersPage />}
      />
    </>
  );
}

export default App
