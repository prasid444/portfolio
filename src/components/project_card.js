import React, {Component} from 'react'
import { Divider, Tag } from 'antd';

class ProjectCard extends Component {
    render() {
        return (
            <div style={{
                boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                borderRadius:20,
                overflow:'hidden',
                backgroundColor:'white'
            }}>
                <img src={require('../assets/workmandu.png')}
                alt=""
                style={{
                    width:'100%'
                }}
                />
                <div style={{
                    padding:16,
                    borderTop:'1px solid #00000077',
                    display:'flex',
                    flexDirection:'column',

                }}>
                    <span style={{
                        fontSize:28,
                        fontWeight:'bold'
                    }}>Workmandu</span>

                    <span
                    style={{
                        fontSize:18,
                        opacity:0.5,
                        marginTop:18
                    }}
                    >A platform for searching for required worker.</span>
                    <div
                    style={{
                        marginTop:18,
                        display:'flex',
                        flexDirection:'row',
                        flexWrap:'wrap',
                        width:'100%'
                    }}
                    >
                         <span
                    style={{
                        fontSize:18,
                        opacity:0.7
                    }}
                    >Technologies : </span>

                     <Tag 
                     color="#108ee9"
                     style={{
                         margin:4
                     }}>Wordpress</Tag>


                    </div>
                   
                    <span style={{
                        fontSize:18,
                        opacity:0.7,
                        marginTop:8
                    }}
                    >Duration: 2 months</span>
                    <span style={{
                        fontSize:18,
                        opacity:0.7,
                        marginTop:8
                    }}>Type :Paid</span>




                </div>

            </div>
        )
    }
}

export default ProjectCard
