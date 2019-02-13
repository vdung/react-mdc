import React from 'react'
import './LayoutGrid.css'
import { LayoutGrid, LayoutGridInner, LayoutGridCell } from '@vdung/react-mdc'

export const Default = () => (
  <LayoutGrid className="layout-grid-demo">
    <LayoutGridInner>
      <LayoutGridCell>4</LayoutGridCell>
      <LayoutGridCell>4</LayoutGridCell>
      <LayoutGridCell>4</LayoutGridCell>
    </LayoutGridInner>
  </LayoutGrid>
)

export const Column1 = () => (
  <LayoutGrid className="layout-grid-demo">
    <LayoutGridInner>
      {Array.from({ length: 12 }, () => (
        <LayoutGridCell span={1}>1</LayoutGridCell>
      ))}
    </LayoutGridInner>
  </LayoutGrid>
)

export const DifferenlySizedItems = () => (
  <LayoutGrid className="layout-grid-demo">
    <LayoutGridInner>
      <LayoutGridCell span={6}>6</LayoutGridCell>
      <LayoutGridCell span={4}>4</LayoutGridCell>
      <LayoutGridCell span={2}>2</LayoutGridCell>
    </LayoutGridInner>
  </LayoutGrid>
)

export const TweakedDifferentSrceenSizes = () => (
  <LayoutGrid className="layout-grid-demo">
    <LayoutGridInner>
      <LayoutGridCell span={6} tabletSpan={8}>
        6 (8 tablet)
      </LayoutGridCell>
      <LayoutGridCell span={4} tabletSpan={6}>
        4 (8 tablet)
      </LayoutGridCell>
      <LayoutGridCell span={2} phoneSpan={4}>
        2 (4 phone)
      </LayoutGridCell>
    </LayoutGridInner>
  </LayoutGrid>
)

export const NestedWithinParentCell = () => (
  <LayoutGrid className="layout-grid-demo">
    <LayoutGridInner>
      <LayoutGridCell span={4} className="layout-grid-demo__parent">
        <LayoutGridInner>
          <LayoutGridCell span={4}>Child 4</LayoutGridCell>
          <LayoutGridCell span={4}>Child 4</LayoutGridCell>
          <LayoutGridCell span={4}>Child 4</LayoutGridCell>
        </LayoutGridInner>
      </LayoutGridCell>
      <LayoutGridCell span={4}>4</LayoutGridCell>
      <LayoutGridCell span={4}>4</LayoutGridCell>
    </LayoutGridInner>
  </LayoutGrid>
)
