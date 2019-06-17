import React, { Component } from 'react'
import MyHeader from '../components/header';
import { COLORS } from '../constants';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Icon } from 'antd';
import ProjectCard from '../components/project_card';
import 'react-vertical-timeline-component/style.min.css';

class Projects extends Component {
    render() {
        return (
            <div
            style={{
            width: '100%',
            minHeight:'100vh',
            // height:'100vh',
            // overflowY:'scroll',

            background: COLORS.PROJECTS,
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

           
            <MyHeader title="PROJECTS" />
            <div style={{
                    display:'flex',
                    flex:1,
                    flexDirection:'column',
                    justifyContent:'center'
                }} >
<VerticalTimeline >
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2011 - present"
    
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src={require('../assets/icons/workmandu_icon.png')} />}
  >
      <ProjectCard/>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2011 - present"
    
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src={require('../assets/icons/workmandu_icon.png')} />}

  >
      <ProjectCard/>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2011 - present"
    
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src={require('../assets/icons/workmandu_icon.png')} />}

  >
      <ProjectCard/>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2011 - present"
    
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src={require('../assets/icons/workmandu_icon.png')} />}

  >
      <ProjectCard/>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2011 - present"
    
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src={require('../assets/icons/workmandu_icon.png')} />}

  >
      <ProjectCard/>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2011 - present"
    
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src={require('../assets/icons/workmandu_icon.png')} />}

  >
      <ProjectCard/>

  </VerticalTimelineElement>
 
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
   
  />
</VerticalTimeline>
            </div>
            </div>

        )
    }
}

export default Projects
