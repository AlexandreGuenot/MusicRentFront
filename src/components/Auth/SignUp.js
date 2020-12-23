import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Card, CircularProgress, Typography } from '@material-ui/core';
import api from '../../service/API';
const useStyles = makeStyles((theme) => ({
    input: {
        width: "300px",
        margin: "10px"
    }
}));

export default function BasicTextFields() {

    const classes = useStyles();
    const [loading, setLoading] = useState(false)
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = async () => {
        setLoading(true)
        try {
            const res = await api.signUp(firstname, lastname, email, password)
            console.log(res.data)
        } catch (e) {
            alert(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "94vh" }}>
            <Card style={{ padding: "30px" }}>
                <Typography>Sign Up</Typography>
                <div style={{ margin: "20px" }}>
                    <TextField label="LastName" className={classes.input} value={lastname} onChange={e => setLastname(e.target.value)} />
                    <TextField label="FirstName" className={classes.input} value={firstname} onChange={e => setFirstname(e.target.value)} />
                </div>

                <div style={{ margin: "20px" }}>
                    <TextField label="Email" className={classes.input} value={email} onChange={e => setEmail(e.target.value)} />
                    <TextField label="Password" type="password" className={classes.input} value={password} onChange={e => setPassword(e.target.value)} />
                </div>

                {!loading ?
                    <Button style={{ width: "100%" }} onClick={signUp}> Sign Up </Button>
                    :
                    <CircularProgress />
                }
            </Card>

        </div>
    );
}
