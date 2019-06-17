import React, {Component} from 'react'
import Typist from 'react-typist';
import { Avatar, Row, Col, Icon } from 'antd';
import { COLORS, EDUCATION } from '../constants';
import EducationCard from '../components/education_card';
import MyHeader from '../components/header';

class Education extends Component {
    render() {
        let responsive_card={
            xs:23,
            sm:23,
            md:14,
            lg:7,
            xl:7,
            xxl:7
        }
        return (
            <div
                style={{
                width: '100%',
                minHeight:'100vh',

                background: COLORS.EDUCATION,
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
                }} src={require('../assets/top_curve.svg')} alt=""/>

               
                <MyHeader title="EDUCATION" />
                

                <div style={{
                    display:'flex',
                    flex:1,
                    flexDirection:'column',
                    justifyContent:'center'
                }} >

<Row type='flex' justify='center'>
    {EDUCATION.data.map((item)=>{
        return <Col {...responsive_card} >
        <EducationCard data={item}/>
        </Col>
    })}

 {/* <EducationCard />
 <EducationCard />

 <EducationCard /> */}



</Row>

                </div>



            </div>
        )
    }
}

export default Education
