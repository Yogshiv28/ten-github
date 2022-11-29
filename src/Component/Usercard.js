import React from "react"

import { Card, CardBody } from "reactstrap" 

const Usercard = ({user}) => {
    return(
        <Card className="text-center my-3 mb-4">
            <img src={user.avatar_url} className="img-thumbnail"/> 
            <CardBody>
                <div classname='text-prtimary'>{user.name}</div>
                <div className="text-primary">{user.location}</div>
                <div className="text-primary">{user.bio}</div>
                <div className="text-info">Available For Hire: {user.hireable ? 'YES' : 'NOPE'}</div>
                <div className="text-info">Followers {user.followers}</div>
            </CardBody>
        </Card>
    )

}

export default Usercard;