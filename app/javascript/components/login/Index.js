import React from "react"
import PropTypes from "prop-types"
import Grid from '@material-ui/core/Grid'

class Index extends React.Component {
  render () {
    return (
      <Grid container>
        <Grid container item xs={5}>
          <div>Hello kids</div>
        </Grid>
        <Grid container item xs={7}>
          <div>hello world</div>
        </Grid>
      </Grid>
    );
  }
}

export default Index
