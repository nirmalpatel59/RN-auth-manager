import React, { Component } from 'react';
import { Card, CardSection, Input } from './common';

class EmployeeCreate extends Component {
    state = {  }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Jane"
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="555-555-5555"
                    />
                </CardSection>
                <CardSection>
                    <Input />
                </CardSection>
                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;