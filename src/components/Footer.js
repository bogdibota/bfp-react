import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import ContentLink from 'material-ui/svg-icons/content/link';
import ActionBugReport from 'material-ui/svg-icons/action/bug-report';
import ActionCode from 'material-ui/svg-icons/action/code';

const styles = {
  dividerLine: {
    border: '1px solid rgba(0,0,0,.12)',
    height: '50%',
    alignSelf: 'center',
  },
  footer: {
    height: 200,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
};

class Footer extends Component {
  navigateExt = (link) => () => window.location = link;

  render() {
    return (
      <footer>
        <Paper style={styles.footer} zDepth={1}>
          <List>
            <ListItem primaryText="Github"
                      onClick={this.navigateExt('https://github.com/bogdibota/bfp-react')}
                      leftIcon={<ActionCode />}/>
            <ListItem primaryText="Issues"
                      onClick={this.navigateExt('https://github.com/bogdibota/bfp-react/issues')}
                      leftIcon={<ActionBugReport />}/>
          </List>
          <div style={styles.dividerLine} className="line"/>
          <List>
            <ListItem primaryText="dvkiin.xyz"
                      onClick={this.navigateExt('https://dvkiin.xyz')}
                      leftIcon={<ContentLink />}/>
            <ListItem primaryText="BFP Angular"
                      onClick={this.navigateExt('https://dvkiin.xyz/bfp-angular')}
                      leftIcon={<ContentLink />}/>
            <ListItem primaryText="BFP Vue.js"
                      onClick={this.navigateExt('https://dvkiin.xyz/bfp-vue')}
                      leftIcon={<ContentLink />}/>
          </List>
        </Paper>
      </footer>
    );
  }
}

export default Footer;
