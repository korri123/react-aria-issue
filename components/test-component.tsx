'use client'
import React from 'react'
import {
    Label,
    Table,
    TableHeader,
    Column,
    TableBody,
    Row, Cell, Virtualizer, TableLayout
} from 'react-aria-components';


export function TestComponent() {
    return (
        <Virtualizer layout={TableLayout}>
            <Table>
                <TableHeader>
                    <Column>
                        <Label>Selected</Label>
                    </Column>
                    <Column>
                        <Label>Name</Label>
                    </Column>
                    <Column>
                        <Label>Year</Label>
                    </Column>
                    <Column isRowHeader>
                        <Label>Age</Label>
                    </Column>
                </TableHeader>
                <TableBody>
                    <Row>
                        <Cell>
                            ding
                        </Cell>
                        <Cell>
                            John
                        </Cell>
                        <Cell>
                            1998
                        </Cell>
                        <Cell>
                            27
                        </Cell>
                    </Row>

                </TableBody>
            </Table>
        </Virtualizer>
    )
}