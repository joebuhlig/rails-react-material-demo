import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import BrandIcon from 'images/jb-icon.png';

const styles = {
  brandIcon: {
    padding: '30px 0px'
  },
  shapes: {
    background: 'blue',
    height: '100vh',
    width: '100%'
  }
};

class Index extends React.Component {
  render () {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid container item xs={5}>
          <Container maxWidth="sm">
            <Grid item xs={12} className={classes.brandIcon}>
              <img src={BrandIcon} alt="Birdseye Logo" height="90"/>
            </Grid>
            <Grid item xs={12}>
              <h1>Welcome to Birdseye!</h1>
            </Grid>
        </Container>
        </Grid>
        <Grid container item xs={7}>
          <div className={classes.shapes}></div>
        </Grid>
      </Grid>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index)
