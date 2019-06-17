import React, {Component} from 'react'
import {
    Avatar,
    Row,
    Col,
    Icon,
    Divider,
    Tooltip
} from 'antd';
import {COLORS, SKILLS} from '../constants';
import MyHeader from '../components/header';
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Legend
} from 'recharts';
const SKILL_DATA = SKILLS || {};

class Skills extends Component {
    render() {

        let responsive_chart_view = {
        xl:10,
        lg:10,
        md:22,
        sm:24,
        xs:24
    }
        let innerwidth=window.innerWidth;

        let responsive_chart={
            outerRadius:160,
            width:440,
            height:400
        }
        if(innerwidth<600){
            // console.log("I am less ")
            
            responsive_chart={
                width:innerwidth-30,
                height:innerwidth-30,
                outerRadius:((innerwidth-100)/2)-0.4*((innerwidth-100)/2)
            }
        }
        return (
            <div
                style={{
                width: '100%',
                minHeight: '100vh',
                background: COLORS.SKILLS,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <img
                    style={{
                    position: 'absolute',
                    width: '100%'
                }}
                    src={require('../assets/top_curve.svg')}
                    alt=""/>

                <MyHeader title="SKILLS"/>

                <div
                    style={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>

                    <Row type='flex' justify='center'>

                        <Col
                            {...responsive_chart_view}
                            style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <span
                                style={{
                                fontSize: 32,
                                fontWeight: 'bold',
                                color: 'white',
                                textDecoration: 'underline'
                            }}>Technical Skills</span>
                            <RadarChart
                                {...responsive_chart}
                                data={SKILL_DATA.technical_data || []}>
                                <PolarGrid/>
                                <PolarAngleAxis tick={customizedTick} dataKey="title"/>
                                <Radar
                                    name="Score"
                                    dataKey="score"
                                    stroke="#8884d8"
                                    fill="#8884d8"
                                    fillOpacity={0.6}/>
                            </RadarChart>
                        </Col>
                        <Col md={0} sm={0} xs={0}>
                            <Divider
                                type='vertical'
                                style={{
                                height: '100%'
                            }}/>
                        </Col>
                        <Col
                          {...responsive_chart_view}
                            style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <span
                                style={{
                                fontSize: 32,
                                fontWeight: 'bold',
                                color: 'white',
                                textDecoration: 'underline'
                            }}>Soft Skills</span>

                            <RadarChart
                                {...responsive_chart}
                                data={SKILL_DATA.softskill_data || []}>
                                <PolarGrid/>
                                <PolarAngleAxis tick={customizedTick} dataKey="title"/>
                                <Radar
                                    name="Score"
                                    dataKey="score"
                                    stroke="#8884d8"
                                    fill="#8884d8"
                                    fillOpacity={0.6}/>
                            </RadarChart>

                        </Col>

                    </Row>

                    <div style={{
                        padding: 20
                    }}>

                        <h1
                            style={{
                            color: COLORS.EDUCATION
                        }}>TOOLS</h1>
                        <div
                            style={{
                            width: 150,
                            height: 2,
                            backgroundColor: '#ddd',
                            position: 'relative'
                        }}>
                            <div
                                style={{
                                position: 'absolute',
                                width: 70,
                                height: 2,
                                backgroundColor: COLORS.EDUCATION
                            }}></div>
                        </div>
                        <br></br>
                        <Row>
                            {SKILL_DATA
                                .tools_data
                                .map((item) => {
                                    return <Tooltip title={item.title}>
                                        <a href={item.link} target='_blank'>
                                            <img
                                                src={item.icon}
                                                style={{
                                                margin: 6,
                                                height: 90,
                                                width: 90
                                            }}/>
                                        </a>
                                        {/* <Avatar src={item.icon} style={{margin:6,backgroundColor:'transparent'}}  size={120} /> */}
                                    </Tooltip>
                                })
}

                        </Row>
                    </div>
                </div>
            </div>
        )
    }

}

const customizedTick = (props) => {
    // console.log(props)
    const {payload, x, y, index, textAnchor} = props;
    const cos = Math.cos(-payload.angle * Math.PI / 180);
    // index to get actual data for chart from external data for customization
    return (
        <text x={x} y={y} textAnchor={textAnchor} fill={'white'}>
            {payload.value}
        </text>
    );
};

export default Skills
