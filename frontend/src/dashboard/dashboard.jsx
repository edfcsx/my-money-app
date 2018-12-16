import React, { Component } from 'react'

import ContentHeader from '../commons/template/contentHeader'
import Content from '../commons/template/content'
import Row from '../commons/layout/row'
import ValueBox from '../commons/widget/valueBox'

class Dashboard extends Component {
    
    render(){
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0.0'/>
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value='R$ 10,00' text='Total de créditos'/>
                        <ValueBox cols='12 4' color='red' icon='credit-card' value='R$ 10,00' text='Total de débitos'/>
                        <ValueBox cols='12 4' color='blue' icon='money' value='R$ 0' text='Valor Consolidado'/>
                    </Row>
                </Content> 
            </div>
        )
    }

}

export default Dashboard