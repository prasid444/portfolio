import React, {Component} from 'react'
import { Row, Icon } from 'antd';

class ContactCard extends Component {
    render() {
        let data=this.props.data||{};
        return (
            <div style={{
                backgroundColor:'white',
                borderRadius:10,
                padding:12,
                margin:8
            }}>
                <a href={data.link||'javascript:void(0)'} target='_blank'>
                <Row type='flex' justify='space-between'  style={{
                    alignItems:'center',
                    flexWrap:'nowrap'
                }}>
                    <Row type='flex' align='middle'>
                        <img src={data.icon} 
                        alt=""
                        style={{
                        height:'fit-content',
                        width:81,
                        marginRight:20,
                    }}/>
                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center'
                    }}>
                        <span style={{
                            fontSize:32,
                            fontWeight:'bold',
                            color:data.color||'black'
                        }}>{data.title||"..."}</span>
                        <span
                        style={{
                            fontSize:20,
                            opacity:0.3,
                            color:'#000'
                        }}
                        >{data.sub_title||""}</span>

                    </div>
                    </Row>
                    <Icon type="right" style={{fontSize:40,opacity:0.5}} />
                </Row>
                </a>

            </div>
        )
    }
}

export default ContactCard
