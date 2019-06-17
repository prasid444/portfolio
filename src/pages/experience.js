import React, { Component } from 'react'
import MyHeader from '../components/header';
import { COLORS, JOB_EXPERIENCE } from '../constants';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Icon } from 'antd';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from '../components/experience_card';

const EXPERIENCE_DATA=JOB_EXPERIENCE||{}

class Experience extends Component {
    render() {
        return (
            <div
            style={{
            width: '100%',
            minHeight:'100vh',
            // height:'100vh',
            // overflowY:'scroll',

            background: COLORS.JOB,
            // display: 'flex',
            // flexDirection: 'row',
            // justifyContent:'center',
            position: 'relative',
            display:'flex',
            flexDirection:'column'
        }}>
            <img style={{
                position:'absolute',
                width:'100%'
            }} src={require('../assets/top_curve.svg')} alt="" />

           
            <MyHeader title="JOB EXPERIENCE" />
            <div style={{
                    display:'flex',
                    flex:1,
                    flexDirection:'column',
                    justifyContent:'center'
                }} >
<VerticalTimeline >
  {EXPERIENCE_DATA.data.map((item)=>{
    return <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={item.date}
    
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<img src={require('../assets/icons/workmandu_icon.png')} />}
  >
      <ExperienceCard data={item}/>

  </VerticalTimelineElement>
  })}
{/*   
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2011 - present"
    
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<img src={require('../assets/icons/workmandu_icon.png')} />}

  >
      <ExperienceCard/>

  </VerticalTimelineElement> */}
 
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
   
  />
</VerticalTimeline>
            </div>
            </div>

        )
    }
}

export default Experience
