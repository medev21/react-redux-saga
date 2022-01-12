import React from 'react'
import { Form, Checkbox, Segment } from 'semantic-ui-react'

function EntryForm({description, value, isExpense, setDescription, setValue, setIsExpense}) {
    return (
        <>
            <Form.Group>
                <Form.Input
                    icon="tags"
                    width={12}
                    label="Description"
                    placeholder="New shinny thing"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Form.Input
                    width={4}
                    label="Value"
                    placeholder="100.00"
                    icon="dollar"
                    iconPosition="left"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </Form.Group>
            <Segment compact>
                <Checkbox
                    toggle
                    label="is expense"
                    checked={isExpense}
                    onChange={() => setIsExpense((oldState) => !oldState)}
                />
            </Segment>
        </>
    )
}

export default EntryForm
