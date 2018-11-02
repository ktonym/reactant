import React, {Component} from 'react';
import styled from "styled-components";
import { Steps, Button, message } from 'antd';
import ClientForm from "../forms/ClientForm";

const Step = Steps.Step;
const steps = [{title:'Sélectionnez le type de client',content: 'Client type selection'},
    {title:'Saisissez les details', content: <ClientForm visible={true}/>},
    {title: 'Complete',content: 'Last Page'}];
const Container = styled.div`
    margin: 5 10em;
`;
class ClientSteps extends Component{
    state = {
        current: 0
    };

    next = () => {
        const current = this.state.current+1;
        this.setState({current});
    };
    prev = () => {
        const current = this.state.current-1;
        this.setState({current});
    };

    render(){
        const {current} = this.state;
        return (
            <Container>
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title}/>)}
                </Steps>
                <div>{steps[current].content}</div>
                <div>
                    {
                        current < steps.length-1
                        && <Button type="primary" onClick={this.next}>Prochain</Button>
                    }
                    {
                        current === steps.length-1
                        && <Button type="primary" onClick={() => message.success('Enregistrement fait!')}>Complete</Button>
                    }
                    {
                        current > 0
                        && (<Button style={{marginLeft: 8}} onClick={this.prev}>Précédent</Button>)
                    }
                </div>
            </Container>
        );
    }
}

export default ClientSteps;