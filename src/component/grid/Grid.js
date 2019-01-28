import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../card/Card'
import Bnz from '../../photos/bnz.jpg'
import Parkir from '../../photos/parkir.jpg'
import Pohon from '../../photos/pohon.jpg'
import Lambang from '../../photos/formulir.jpg'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={3} sm={3}>
          <Card judul="Berita" subjudul="berita terkini" gambar={Bnz} badan="Supplemental actions within the card are explicitly called out using icons, text, and UI controls, typically placed at the bottom of the card" subbadan="Here's an example of a media control card." footer="Nice News"/>
        </Grid>
        <Grid xs={5} sm={3}>
        <Card judul="Berita" subjudul="berita terkini" gambar={Lambang} badan="Supplemental actions within the card are explicitly called out using icons, text, and UI controls, typically placed at the bottom of the card" subbadan="Here's an example of a media control card." footer="Nice News"/>
        </Grid>
        <Grid xs={5} sm={3}>
        <Card judul="Berita" subjudul="berita terkini" gambar={Parkir} badan="Supplemental actions within the card are explicitly called out using icons, text, and UI controls, typically placed at the bottom of the card" subbadan="Here's an example of a media control card." footer="Nice News"/>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);