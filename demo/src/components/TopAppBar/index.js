import React from 'react'
import PropTypes from 'prop-types'
import './TopAppBar.css'
import {
  TopAppBar,
  TopAppBarActionItems,
  TopAppBarFixedAdjust,
  TopAppBarNavigation,
  MaterialIcon,
} from '@vdung/react-mdc'

const Main = props => (
  <TopAppBarFixedAdjust {...props}>
    <main>
      <style>{'body { margin: 0px }'}</style>
      {Array.from({ length: 10 }, (_, i) => (
        <p key={i}>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
          sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
          ultricies mi vitae est.
        </p>
      ))}
    </main>
  </TopAppBarFixedAdjust>
)

export const Normal = () => (
  <div>
    <TopAppBar>
      <TopAppBarNavigation title="Title" icon={<MaterialIcon icon="menu" />} />
      <TopAppBarActionItems>
        <MaterialIcon icon="file_download" />
        <MaterialIcon icon="print" />
        <MaterialIcon icon="bookmark" />
      </TopAppBarActionItems>
    </TopAppBar>
    <Main />
  </div>
)

export const Fixed = () => (
  <div>
    <TopAppBar fixed>
      <TopAppBarNavigation title="Title" icon={<MaterialIcon icon="menu" />} />
      <TopAppBarActionItems>
        <MaterialIcon icon="file_download" />
        <MaterialIcon icon="print" />
        <MaterialIcon icon="bookmark" />
      </TopAppBarActionItems>
    </TopAppBar>
    <Main />
  </div>
)

export const Prominent = () => (
  <div>
    <TopAppBar prominent>
      <TopAppBarNavigation title="Title" icon={<MaterialIcon icon="menu" />} />
      <TopAppBarActionItems>
        <MaterialIcon icon="file_download" />
        <MaterialIcon icon="print" />
        <MaterialIcon icon="bookmark" />
      </TopAppBarActionItems>
    </TopAppBar>
    <Main prominent />
  </div>
)

export const Dense = () => (
  <div>
    <TopAppBar dense>
      <TopAppBarNavigation title="Title" icon={<MaterialIcon icon="menu" />} />
      <TopAppBarActionItems>
        <MaterialIcon icon="file_download" />
        <MaterialIcon icon="print" />
        <MaterialIcon icon="bookmark" />
      </TopAppBarActionItems>
    </TopAppBar>
    <Main dense />
  </div>
)

export const DenseProminent = () => (
  <div>
    <TopAppBar dense prominent>
      <TopAppBarNavigation title="Title" icon={<MaterialIcon icon="menu" />} />
      <TopAppBarActionItems>
        <MaterialIcon icon="file_download" />
        <MaterialIcon icon="print" />
        <MaterialIcon icon="bookmark" />
      </TopAppBarActionItems>
    </TopAppBar>
    <Main dense prominent />
  </div>
)

export const Short = () => (
  <div>
    <TopAppBar short>
      <TopAppBarNavigation title="Title" icon={<MaterialIcon icon="menu" />} />
      <TopAppBarActionItems>
        <MaterialIcon icon="file_download" />
      </TopAppBarActionItems>
    </TopAppBar>
    <Main short />
  </div>
)

export const ShortCollapsed = () => (
  <div>
    <TopAppBar short shortCollapsed>
      <TopAppBarNavigation title="Title" icon={<MaterialIcon icon="menu" />} />
      <TopAppBarActionItems>
        <MaterialIcon icon="file_download" />
      </TopAppBarActionItems>
    </TopAppBar>
    <Main short />
  </div>
)
