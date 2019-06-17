import React, {Component} from 'react'
import MyHeader from '../components/header';
import { COLORS, CONTACTS } from '../constants';
import ContactCard from '../components/contacts_card';
import { Row, Col } from 'antd';

class Contacts extends Component {
    render() {
        return (
            <div
                style={{
                width: '100%',
                minHeight: '100vh',
                background: COLORS.CONTACTS,
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

                <MyHeader title="CONTACTS"/>

                <div
                    style={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <Row type='flex' justify='center'>
                    <Col xl={10} xs={22} sm={22} md={18} lg={14}>
                    {CONTACTS.data.map((item)=>{
                        return <ContactCard data={item}/>
                    })}
                    {/* <ContactCard />
                    <ContactCard />

                    <ContactCard />
                    <ContactCard />
                    <ContactCard /> */}

                    </Col>
                    </Row>
                    
                </div>
            </div>
        )
    }
}

export default Contacts
