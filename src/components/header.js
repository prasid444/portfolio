import React, { Component } from 'react'

class MyHeader extends Component {
    render() {
        return (
            <div style={{
                height:120,
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                // backgroundColor:'red'
            }}>
                 <center>
                    <span style={{
                        color:'white',
                        fontSize:40,
                        fontStyle:'bold'
                    }}>{this.props.title}</span>
                </center>
            </div>
        )
    }
}

export default MyHeader
