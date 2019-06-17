import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; 

import Education from './pages/education';
import Projects from './pages/project';
import Extra from './pages/extra';
import Contacts from './pages/contacts';
import MainMenu from './components/main_menu';
import Experience from './pages/experience';
import Skills from './pages/skills';
import ReactPageScroller from "react-page-scroller";
import Scroller from './components/scroller';
import MediaQuery from 'react-responsive';
import MainMenuMobile from './components/main_menu_mobile';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: 1};
    this._pageScroller = null;
}


  pageOnChange = (number) => {
    console.log("PAGE",number)
    console.log("PAGES",this._pageScroller);
    // this.setState({ currentPage: number});
};
  render(){
  return (
    <div style={{
    }}>
      <MediaQuery minDeviceWidth={500}>
  {(matches) => {
    if (matches) {
      return <MainMenu />
    } else {
      return <MainMenuMobile/>

    }
  }}
</MediaQuery>

    <div id="main-contents" >
    {/* <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}> */}
    <Scroller>
    <Education/>
    <Skills />
    <Experience />
     <Projects />
     <Extra />
     <Contacts />
     </Scroller>     
    </div>
    </div>
  );
  }

  // componentDidMount(){
  //   window.scrollTo(0,0);
  //   console.log("Scrolling to top")
  // }
}

export default App;


