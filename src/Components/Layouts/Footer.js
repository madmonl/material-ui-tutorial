import React from "react";
import { AppBar, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';
import withWidth from 'material-ui/utils/withWidth';

export default withWidth()(
  ({ muscles, onSelect, category, width }) => { 
    const index = category 
      ? muscles.findIndex(group => group === category) + 1
      : 0
    const onIndexSelect = (e, index) => {
      onSelect(index === 0 ? '' : muscles[index - 1])
    }
    
    return (
      <AppBar position="static">
        <Tabs
          value={index}
          onChange={onIndexSelect}
          indicatorColor="secondary"
          textColor="secondary"
          centered={width !== 'xs'}
          scrollable={width === 'xs'}
          scrollButtons="on"
        >
          <Tab label="ALL" />
          {
            muscles.map(group => 
              <Tab key={group} label={group} />
            )
          } 
        </Tabs>
      </AppBar>
    )}
)