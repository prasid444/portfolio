import React, {Component} from 'react'
import { COLORS } from '../constants';
import { Col } from 'antd';

class EducationCard extends Component {
    render() {
        let data=this.props.data||{}
        return (
<div style={{
    backgroundColor:'white',
    borderRadius:20,
    padding:32,
    margin:8,
    display:'flex'
    
    
}}>
    <div style={{
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        color:COLORS.EDUCATION,
        height:'100%',
        width: '100%'
    }}>

  
    <span style={{
        fontWeight:'bold',
        fontSize:32
    }}>{data.title}</span>

    <span style={{
        fontSize:30,
        marginTop:16
    }}>{data.name}</span>
    <span style={{
        fontSize:20,
        marginTop:12
    }}>{data.marks}</span>
    <span style={{
        fontSize:20,marginTop:8
    }}>{data.passed_year}</span>
    </div>

</div>


        )
    }
}

export default EducationCard
