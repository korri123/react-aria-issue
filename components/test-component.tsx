'use client'
import React from 'react'
import { useIsSSR } from 'react-aria'
import {
    Cell,
    Column,
    Row,
    Table,
    TableBody,
    TableHeader,
    TableLayout,
    Virtualizer,
} from 'react-aria-components'

export function TestComponent() {
    const isSSR = useIsSSR() // or, React['useSyncExternalStore'](subscribe, getSnapshot, getServerSnapshot)
    return (
        <Virtualizer layout={TableLayout}>
            <Table>
                <TableHeader>
                    <Column>1</Column>
                    <Column>2</Column>
                    <Column />
                </TableHeader>
                <TableBody items={[{ id: 1 }]}>
                    {(row) => (
                        <Row key={row.id}>
                            <Cell></Cell>
                            <Cell></Cell>
                            <Cell></Cell>
                        </Row>
                    )}
                </TableBody>
            </Table>
        </Virtualizer>
    )
}