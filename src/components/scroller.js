import React, {Component} from 'react'
import { Link, Element , Events,animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const innerHeight=window.innerHeight;
class Scroller extends Component {

   
    constructor(props) {
      super(props)
    
      this.current_page=0;
      this.scroll_position=0;
      this.scrolling=true;

      this.state = {
         
      };


      this.child_components=this.props.children||[];
      this.max_page=this.child_components.length;
    //   this.child_components.map((item,index)=>{
    //    item['ref']= `asd`
    //   })
      console.log(this.child_components)

    };


    customthrottle(fn, wait) {
        var time = Date.now();
        return function() {
        // if ((time + wait - Date.now()) < 0) {
            fn();
            // time = Date.now();
        // }
        }
    }

    change_in_scroll=(props)=>{
        // console.log("SCROLL",props);

    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
    let rarebottomScroll=document.documentElement.scrollHeight||document.body.scrollTop; //Get max bottom value
    let xas=document.getElementById(`item_${this.current_page}`).getBoundingClientRect();
    // let bottomScroll=document.getElementById(`item_${this.current_page}`).scrollHeight;
    let bottomScroll=xas.bottom;
    
    let innerbottomScroll=window.innerHeight+currentScroll;
    // console.log("CURRENT PAGE",this.current_page,xas)

    // console.log("HEIGHT",bottomScroll,innerbottomScroll, rarebottomScroll)

    console.log("SCROLL",currentScroll,xas);
    let direction='DOWN';

    if((innerHeight-xas.bottom)===80){
        console.log("GO DOWN")
    }
    else if(xas.top===-80){
        console.log("GO UP")
    }

    if(currentScroll>0 && this.scroll_position<(currentScroll-100)){
        console.log("GOIING DOWN");
        this.scroll_position=currentScroll;
        if(this.current_page<(this.max_page-1) && this.scrolling){

            console.warn("Scrolling down");
            // scroll.scrollTo(3000)

            this.current_page=this.current_page+1;
            scroller.scrollTo(`item_${this.current_page}`);

            // scroll.scrollMore(xas.bottom+currentScroll)
            // scroller.scrollTo(`item_${this.current_page}`);
        }
        // direction='DOWN';
    }else if(currentScroll>0 && this.scroll_position>(currentScroll+100)){
        console.log("GOIING UP");
        this.scroll_position=currentScroll;
        if(this.current_page>(0) && this.scrolling){
            console.warn("Scrolling up")

            this.current_page=this.current_page-1;
            scroller.scrollTo(`item_${this.current_page}`);
            // scroll.scrollTo(xas.x)
            // scroller.scrollTo(`item_${this.current_page}`)
        }
        // direction='UP';
    }

    // if(((bottomScroll<innerbottomScroll)) && direction==='DOWN'&&this.current_page<(this.max_page-1)){
    //     // let nextdocscroll=document.getElementById(`item_${this.current_page}`).scrollHeight;
    //     console.log("Go down");
    //     // scroll.scrollTo(nextdocscroll)
    //     this.current_page=this.current_page+1
    //     scroller.scrollTo(`item_${this.current_page}`);
    // }
    


    }


    goToPage=(pageIndex)=>{
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
        
        let bottomScroll=document.getElementById(`item_4`).scrollHeight;
        console.log("HRIGHTS",currentScroll,bottomScroll)
        console.log("GO TO",pageIndex)
        // scroll.scrollTo()
        // scroller.scrollTo(`item_${pageIndex}`);
        this.current_page=pageIndex;
        // console.log("GO TO",pageNumber)
    }
    
    render() {
        return (
            <React.Fragment>
                {/* <a onClick={()=>{
                    scroller.scrollTo('item_3')
                }}>Scroll askdjans;dlkams;dlkams ;lsma </a> */}
                {this.child_components.map((item,index)=>{
                    return <div name={`item_${index}`} id={`item_${index}`}>{item}</div>
                })}
            </React.Fragment>
        )
    }

    componentDidMount(){
        window.scrollTo(0,0);


        let ctx=this;
        // Events.scrollEvent.register('begin', function(to, element) {
        //     ctx.scrolling=false;
        //     console.log("begin",ctx.scrolling, arguments);
        //   });
       
        //   Events.scrollEvent.register('end', function(to, element) {
        //     // ctx.scrolling=true;
        //     setTimeout(function(){
        //         ctx.scrolling=true
        //     },1000)
        //     console.log("end",ctx.scrolling, arguments);
            
        //   });
       
        //   scrollSpy.update();
        //   scroll.scrollToTop();
        //   window.addEventListener('scroll',this.customthrottle(this.change_in_scroll,1000));

    }
    componentWillUnmount(){
        // Events.scrollEvent.remove('begin');
        // Events.scrollEvent.remove('end');
        // window.removeEventListener('scroll',this.customthrottle(this.change_in_scroll,1000));

    }
}

export default Scroller
