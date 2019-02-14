import React from 'react'
import PropTypes from 'prop-types'
import './Tab.css'
import {
  TabBar,
  Tab,
  TabIcon,
  TabScroller,
  TabTextLabel,
  TabIndicator,
  TabIndicatorContent,
  MaterialIcon,
} from '@vdung/react-mdc'

const MyIcon = ({ children, ...props }) => (
  <MaterialIcon tag={TabIcon} {...props}>
    {children}
  </MaterialIcon>
)
MyIcon.propTypes = {
  children: PropTypes.node,
}

export const Basic = () => (
  <TabBar>
    <TabScroller>
      <Tab active>
        <TabTextLabel>Item One</TabTextLabel>
      </Tab>
      <Tab>
        <TabTextLabel>Item Two</TabTextLabel>
      </Tab>
      <Tab>
        <TabTextLabel>Item Three</TabTextLabel>
      </Tab>
    </TabScroller>
  </TabBar>
)

export const IconLabel = () => (
  <TabBar>
    <TabScroller>
      <Tab active>
        <MyIcon>access_time</MyIcon>
        <TabTextLabel>Recents</TabTextLabel>
      </Tab>
      <Tab>
        <MyIcon>near_me</MyIcon>
        <TabTextLabel>Nearby</TabTextLabel>
      </Tab>
      <Tab>
        <MyIcon>favorite</MyIcon>
        <TabTextLabel>Favorites</TabTextLabel>
      </Tab>
    </TabScroller>
  </TabBar>
)

export const IconLabelMinWidth = () => (
  <TabBar>
    <TabScroller>
      <Tab stacked indicatorMinWidth active>
        <MyIcon>access_time</MyIcon>
        <TabTextLabel>Recents</TabTextLabel>
      </Tab>
      <Tab stacked indicatorMinWidth>
        <MyIcon>near_me</MyIcon>
        <TabTextLabel>Nearby</TabTextLabel>
      </Tab>
      <Tab stacked indicatorMinWidth>
        <MyIcon>favorite</MyIcon>
        <TabTextLabel>Favorites</TabTextLabel>
      </Tab>
    </TabScroller>
  </TabBar>
)

export const ScrollingTabs = () => (
  <TabBar>
    <TabScroller>
      <Tab active>
        <TabTextLabel>Tab 0</TabTextLabel>
      </Tab>
      {[...Array(12)].map((x, i) => (
        <Tab key={i + 1}>
          <TabTextLabel>Tab {i + 1}</TabTextLabel>
        </Tab>
      ))}
    </TabScroller>
  </TabBar>
)

const MyIndicator = ({ children, ...props }) => (
  <TabIndicator fade {...props}>
    <MaterialIcon tag={TabIndicatorContent} icon aria-hidden={true}>
      {children}
    </MaterialIcon>
  </TabIndicator>
)
MyIndicator.propTypes = {
  children: PropTypes.string,
}
export const IconIndicator = () => (
  <TabBar>
    <TabScroller>
      <Tab indicator={<MyIndicator>access_time</MyIndicator>} active />
      <Tab indicator={<MyIndicator>near_me</MyIndicator>} />
      <Tab indicator={<MyIndicator>favorite</MyIndicator>} />
    </TabScroller>
  </TabBar>
)
