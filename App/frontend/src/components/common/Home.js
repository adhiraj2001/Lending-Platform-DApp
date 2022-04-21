import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import ls from 'local-storage';

const Home = (props) => {
    // const [name, setName] = useState('');

    // useEffect(() => {
    //     setName(ls.get('name'));
    // }, []);

    // if(ls.get("login") === "true") {
    //   return <div style={{ textAlign: "center" }}> <h2> Welcome {name}. </h2> </div>;
    // }
    // else {
    //   return <div style={{ textAlign: "center" }}> <h2> Please Login or Register a New Account. </h2> </div>;
    // }

    return (
        <Box
            // display="flex"
            // justifyContent="center"
            // alignItems="center"
            sx={{
                m: '25%',
                bgcolor: '#FFF8E1',
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minHeight: '50vh',
                minWidth: '50vh',
            }}
        >
            <form>
                <Typography
                    variant="h5"
                    align="center"
                    gutterBottom
                    component="div"
                >
                    We build trust.
                </Typography>

                <br />

                <Typography
                    variant="h5"
                    align="center"
                    gutterBottom
                    component="div"
                >
                    We ensure peer to peer lending with mortgage-security based
                    guarantee.
                </Typography>

                <br />

                <Link to="borrower">
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: '35%', mb: 2 }}
                        // onClick={() => navigate('/login')}
                    >
                        Need Money
                    </Button>
                </Link>

                <Link to="lender">
                    <Button
                        fullWidth
                        variant="contained"
                        color="success"
                        sx={{ mt: 3, mb: 2 }}
                        // onClick={() => navigate('/login')}
                    >
                        Invest Money
                    </Button>
                </Link>
            </form>
        </Box>
    );
};

export default Home;
