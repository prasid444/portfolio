import React, {Component} from 'react'
import MyHeader from '../components/header';
import {COLORS} from '../constants';
import { Avatar, Row, Col } from 'antd';

const hobbies=["Football","Travel","Music",]
class Extra extends Component {
    render() {
        return (
            <div
                style={{
                width: '100%',
                minHeight: '100vh',
                background: COLORS.EXTRA,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <img
                    style={{
                    position: 'absolute',
                    width:'100%'
                }}
                    src={require('../assets/top_curve.svg')}
                    alt=""/>

                <MyHeader title="EXTRA"/>

                <div
                    style={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <Row type='flex' justify='center'>
                    <Col xl={16}  >
                    <Row type='flex' justify='center'>
                    {hobbies.map((item)=>{
                        return <Avatar size={200} style={{
                            margin:4,
                            border:'4px solid #BEBEBE',
                            backgroundColor:'white',
                            color:COLORS.EDUCATION,
                            verticalAlign: 'middle'
                        }} ><span style={{
                            fontSize:32
                        }}>
                            {item}
                            </span></Avatar>
                    })}
                    </Row>
                    </Col>
                    </Row>
                </div>
            </div>

        )
    }
}

export default Extra
