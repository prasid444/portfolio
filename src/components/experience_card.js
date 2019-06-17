import React, { Component } from 'react'
import { Row, Icon } from 'antd';
import { COLORS } from '../constants';

 class ExperienceCard extends Component {
    render() {
        let data=this.props.data||{};
        return (
            <div style={{
                boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                borderRadius:20,
                overflow:'hidden',
                backgroundColor:'white',
                padding:24
            }}>

            <Row type='flex'>
                <img src={data.logo} style={{height:81,width:81,marginRight:20}} />
                <div style={{
                    
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                }}>
                    <span style={{
                        fontSize:32,
                        fontWeight:'bold',
                        color:COLORS.EDUCATION
                    }}>{data.company_name||".."}</span>
                    <span
                    style={{
                        fontSize:20,
                        opacity:0.4,
                        marginTop:4
                    }}
                    >{data.company_address||".."}</span>


                </div>
            </Row>
            <div style={{
                paddingTop:32
                }}>

            <span style={{
                fontSize:26,
                color:COLORS.EDUCATION
            }}>{data.position}</span>

            <br>
            </br>
            <Row type='flex' style={{
                alignItems:'center',
                paddingTop:16,
                opacity:0.5
            }}>
                <span style={{
                    marginRight:20,
                    fontSize:20
                }}><Icon type="clock-circle" />&nbsp;&nbsp;{data.job_duration}</span>
                
                <span style={{
                    fontSize:20
                }}><Icon type="tag" theme="filled" />&nbsp;&nbsp;{data.job_type}</span>
            </Row>

            </div>
                
                
            </div>
        )
    }
}

export default ExperienceCard
