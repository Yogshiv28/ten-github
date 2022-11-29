import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";


import Repos from "../Component/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";
import Usercard from "../Component/Usercard";

const Home = () => {
    const Context = useContext(UserContext)
    const [query, setQuery] = useState('')
    const [user, setUser]= useState(null)
    const fetchDetails = async () => {
        try{
            const {data} = await Axios.get(`https://api.github.com/users/${query}`);
            setUser(data)
            console.log({data})

        } catch (error){
            toast("Not Able To Locate User", {type:"error"})

        }
    }
    // put anypage behind login

    if (!Context.user?.uid) {
      return <Redirect to="/signin"/>
      
    }
    return(
        <Container>
        <Row className=" mt-3">
          <Col md="5">
            <InputGroup>
              <Input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Please provide the username"
              />
              <InputGroupAddon addonType="append">
                <Button onClick={fetchDetails} color="primary">Fetch User</Button>
              </InputGroupAddon>
            </InputGroup>
            {user ? <Usercard user={user} />: null}
          </Col>
          <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null }</Col>
        </Row>
      </Container>

    );
};





export default Home;