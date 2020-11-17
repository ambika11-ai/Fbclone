import { Avatar } from '@material-ui/core'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

  const data = [
    { name: "anushkagroup", imageurl: "../img/anu.jpg" },
    { name: "dhruvagroup", imageurl: "../img/dhruva.jpg"  },
    { name: "kirangroup", imageurl: "../img/kiran.jpg"  },
    { name: "poojagroup", imageurl: "../img/pooja.jpg"  },
    { name: "yashgroup", imageurl: "../img/yash.jpg"  },
    

  ]

 export default  class Left extends Component {
 
  
  render() {
    return (
      <div style={{width:"15%",position:'fixed'}}>
        {data.map((user) => (
        <p style={{display:"flex"}}>
               <Avatar alt="groups" src={user.imageurl}style={{marginLeft:"10px"}} />
               <Typography variant="subtitle2" component="h2" style={{marginLeft:"10px",width:"10%",align:"center",display:"flex",flexDirection:"row"}}>
                <div className="user">{user.name}</div>
                </Typography>  
        </p>
      ))}
      </div>
    )
  }
}
