import { Avatar, Typography } from '@material-ui/core'
import React, { Component } from 'react'




    const s=[
        {id:1, userImg:"../img/pooja.jpg", name:"pooja ", time:"1h", text:"find me at bigboss", postImg:"../img/pooja.jpg"},
        {id:2, userImg:"../img/kiran.jpg", name:"kiran " ,time:"2h",text:"bigboss contestant and indian film actor",postImg:"../img/kiran.jpg"},
    
        ]

export default class News extends Component {
    render() {
        return (
            <div className="news">
            {s.map((post)=>(
                <div key={post.id} >
                    <div className="newsheader">
                        <Avatar alt='' src={post.userImg } alt="user" />  
                        <Typography variant='subtitle1'>  
                    <div >
                        {post.name}
                        <div> {post.time} </div>      
                        </div> 
                        </Typography>  
                        </div>
                        <Typography variant='h6'>  
                          <div className="newsbodytext">{post.text}</div>
                          </Typography>  
                             <div > <img src={post.postImg} alt="post" style={{width:'750px',height:'350px',objectFit:'cover'}} /></div>
                             </div>
                             
                           
                             

            )
            )}
            </div>
        )
    }
}
