import React from 'react'
import {Button} from 'semantic-ui-react';

function ButtonSaveOrCancel() {
    return (
        <Button.Group style={{marginTop: "20px"}}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>OK</Button>
        </Button.Group>
    )
}

export default ButtonSaveOrCancel
