import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Face from '@material-ui/icons/Face';
import Card from "@material-ui/core/Card";
import React, {Component} from "react";
import Api from "../Api";
import {withStyles} from "@material-ui/core";
import ALink from "@material-ui/core/Link";

const styles = theme => ({
  mainGrid: {
    flexGrow: 1,
    margin: 'auto'
  },
  paper: {
    width: 1400,
    marginTop: 150,
    marginBottom: 100
  },
  title: {
    paddingTop: 50,
    fontSize: 35,
    fontFamily: 'Pangolin'
  },
  date: {
    fontSize: 17,
    float: 'left',
    paddingLeft: '100px'
  },
  address: {
    fontSize: 17,
    float: 'left',
    paddingLeft: '20px'
  },
  textCard: {
    fontSize: 16,
    paddingLeft: 20,
    paddingTop: 15
  },
  from: {
    fontSize: 14,
    padding: '0 10px'
  },
  speakerCard: {
    width: 550,
    height: 310,
    marginTop: 50,
    marginLeft: 100,
    display: 'inline-block'
  },
  speakerName: {
    fontSize: 28,
    fontFamily: 'Pangolin'
  },
  speaker: {
    fontSize: 20,
    paddingLeft: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    fontSize: 50,
    paddingRight: 10
  },
  text: {
    padding: '50px 100px 0 100px',
    fontSize: 20,
    fontFamily: 'Pangolin'
  },
  git: {
    fontSize: 16,
    color: '#453434',
  },
});

class Speaker extends Component {

  render() {
    const {classes, speaker, index} = this.props;

    return <Card key={index} className={classes.speakerCard}>
      <CardContent>
        <Typography className={classes.speaker} align={"left"}>
          <Face className={classes.icon}/> {speaker.first_name + ' ' + speaker.last_name} <span
          className={classes.from}>from</span> {speaker.country.country_name}
        </Typography>
        <Typography className={classes.textCard} align={"left"}>
          <span className={classes.git}>GitHub</span>: <a
          href={speaker.github}>{speaker.github}</a>
        </Typography>
        <Typography className={classes.textCard} align={"left"}>
          <span className={classes.git}>Email</span>:
          <ALink className={classes.link} href={'mailto:' + speaker.email}>
            {speaker.email}
          </ALink>
        </Typography>
        <Typography className={classes.textCard} align={"left"}>
          {speaker.interests}
        </Typography>
      </CardContent>
    </Card>
  }
}

export default withStyles(styles)(Speaker);
