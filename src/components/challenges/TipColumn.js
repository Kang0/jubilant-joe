import React from 'react'
import { List } from 'semantic-ui-react'

const TipColumn = () => {
    return(
        <List divided verticalAlign="middle" size="big">
            <List.Item>
                Start Simple.
            </List.Item>
            <List.Item>
                Don't be too lofty or specific with your habit.
            </List.Item>
            <List.Item>
                The goal is to promise yourself this specific challenge will be completed daily.
            </List.Item>
            <List.Item>
                Examples: 
                <ul>
                    <li>1 Drop of Sweat Hits the Ground</li>
                    <li>Read One Page</li>
                    <li>Wrote Three Lines of Code</li>
                </ul>
            </List.Item>
        </List>
    )
}

export default TipColumn