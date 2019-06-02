import React from 'react'
import { BarChart, Grid } from 'react-native-svg-charts'
import { View } from 'react-native'

class BarChartExample extends React.PureComponent {
    render() {
        const fill = 'rgb(134, 65, 244)'
        const data   = [10]
        return (
          <View style={{flex:1}}>
            <BarChart
                style={{ height: 200 }}
                data={ data }
                svg={{ fill }}
                contentInset={{ top: 30, bottom: 30 }}
            >
                <Grid/>
            </BarChart>
            </View>
        )
    }
}

export default BarChartExample
