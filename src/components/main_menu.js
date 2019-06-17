import React, {Component} from 'react'
import { Avatar, Icon, Row } from 'antd';
import Typist from 'react-typist';


class MainMenu extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isVisible:false
      };
    };
    noScroll() {
        console.log("SCROLLING")
        window.scrollTo(0, 0);
      }

    toggleVisible=()=>{
        if(!this.state.isVisible){
            console.log("ADDING EVENT")
            // window.addEventListener('scroll', this.noScroll);
            document.getElementById("main-contents").classList.add('make-blur');

        }else{
            console.log("REMOVING EVENT")
            document.getElementById("main-contents").classList.remove('make-blur');
            // window.removeEventListener('scroll', this.noScroll);

        }
        this.setState({
            isVisible:!this.state.isVisible
        })
    }
    componentDidMount(){
        // window.addEventListener('scroll', this.noScroll);

    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.noScroll);
    }
    
    render() {
        const {isVisible}=this.state;
        return (
            <div style={{
                position:'absolute',
                left:0,
                top:0,
                zIndex:100
            }}>
                <div style={{
                    zIndex:1001,
                    position:'absolute',
                    backgroundColor:'#87CEFA',
                    height:isVisible?400:30,
                    width:isVisible?400:30,
                    overflow:'hidden',
                    borderRadius: `0 ${isVisible?'0':'12'}px ${isVisible?'400':'30'}px ${isVisible?'0':'12'}px`,
                    MozBorderRadius: `0 ${isVisible?'0':'12'}px ${isVisible?'400':'30'}px ${isVisible?'0':'12'}px`,
                    WebkitBorderRadius: `0 ${isVisible?'0':'12'}px ${isVisible?'400':'30'}px ${isVisible?'0':'12'}px`,
                    transitionProperty:'width height border-radius',
                    transitionDuration:'0.1s',
                    transitionTimingFunction:'linear'
                }}>
                <Icon 
                onClick={()=>this.toggleVisible()}
                type="right-circle" 
                theme="twoTone" style={{
                    fontSize:40,
                    marginLeft:-10,
                    marginTop:-10,
                    transform:`rotate(${isVisible?'225':'45'}deg)`
                }}/>

            <div style={{
                        marginTop:4,
                        marginLeft:40
                    }}>
                     <Avatar
                            src={require('../assets/pro_pic.jpg')}
                            size={200}
                            />
                            <div style={{paddingTop:20}}>
                            <h1 style={{color:'white'}}>Prasidha Karki</h1>
                            <h2 style={{color:'white',marginBottom:0}}>Software Engineer</h2>
                            <h4 style={{color:'white'}}>nLocate Pvt. Ltd.</h4>
                            </div>
                            </div>

                </div>
                <div 
                onClick={()=>this.toggleVisible()}
                style={{
                position:'fixed',
                left:0,
                top:0,
                width:isVisible?'100%':'0%',
                height:isVisible?'100%':'0%',
                overflow:'hidden',
                backgroundColor:'#000',
                opacity:'0.6',
                zIndex:1000,
                transitionProperty:'width height',
                transitionDuration:'0.1s',
                transitionTimingFunction:'linear',
                filter:'blur(80px)',
                WebkitFilter: 'blur(80px)',
            }}></div> 

                <div 
                onClick={()=>this.toggleVisible()}
                style={{
                position:'absolute',
                left:0,
                top:0,
                width:isVisible?'100vw':'0vw',
                height:isVisible?'100vh':'0vh',
                overflow:'hidden',
                zIndex:1001,
                transitionProperty:'width height',
                transitionDuration:'0.1s',
                transitionTimingFunction:'linear',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center'
            }}>

                <Row type='flex' justify='center'>
                    <div style={{
                        textAlign:'center',
                        color:'white'
                    }}>

                    

                    <Typist cursor={{
                        show: true,
                        // blink: true,
                        element: '_',
                        hideWhenDone: true,
                        hideWhenDoneDelay: 1000,
                    }}>
                    <span style={{
                        fontSize:40
                    }}>Hello</span>
                    <Typist.Backspace count={5} delay={400} />
                    <span style={{
                        fontSize:40
                    }}>I am Prasidha Karki</span>
                    <br></br>

                    <span style={{
                        fontSize:30
                    }}>Welcome to my portfolio.</span>
                    <br></br>
                    <span style={{
                        fontSize:20
                    }}>Press anywhere to continue...</span>
                    </Typist></div>
                </Row>
                
                </div> 

                
{/* 
           */}

            {/* <div style={{
                    backgroundColor:'white',
                    width: 400,
                    height: 400,
                    position: 'absolute',
                    left:0,
                    top:0,
                    background: '#87CEFA',
                    borderRadius: '0 0 400px 0',
                    '-moz-border-radius': '0 0 400px 0',
                    '-webkit-border-radius': '0 0 400px 0',
                    zIndex:1001,
                    color:'white',
                    textAlign:'center'
                }}>
                    <div style={{
                        marginLeft:-100,
                        marginTop:16
                    }}>
                     <Avatar
            src={require('../assets/pro_pic.jpg')}
            size={200}
            />
            <div style={{paddingTop:20}}>
            <h1 style={{color:'white'}}>Prasidha Karki</h1>
            <h2 style={{color:'white',marginBottom:0}}>Software Engineer</h2>
            <h4 style={{color:'white'}}>nLocate Pvt. Ltd.</h4>
            </div>
            </div>

            </div> */}
            </div>
        )
    }
}

export default MainMenu
