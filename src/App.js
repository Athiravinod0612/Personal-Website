import React from 'react';
import { Container, Grid, Switch } from '@mui/material';

import Portfolio from './Pages/Portfolio/Portfolio'
import Header from './Components/Header/Header';
import Resume from './Pages/Resume/Resume';
import Footer from './Components/Footer/Footer';

import { Route, Router } from 'react-router-dom';


function App() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4} style={{ backgroundColor: "red" }}>
          444

        </Grid>

        <Grid item xs={8} style={{ backgroundColor: "blue" }}>
          <Header />

          <Router>
            <Switch>
              <Route path='/Portfolio'><Portfolio /></Route>
              <Route path='/'><Resume /></Route>

            </Switch>
          </Router>





          <Footer />
        </Grid>


      </Grid>
    </Container>
  );
}

export default App;
