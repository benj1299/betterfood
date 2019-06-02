import React from 'react'
import { LineChart, XAxis, Grid } from 'react-native-svg-charts'
import { View } from 'react-native'

class Graph extends React.PureComponent {
    render() {
        const data = alimentsData
        return (
            <View style={{ height: 80, padding: 20 }}>
                <LineChart
                    style={{ flex: 1 }}
                    data={ alimentsData }
                    gridMin={ 0 }
                    contentInset={{ top: 10, bottom: 10 }}
                    svg={{ stroke: 'green'   } }
                >
                <Grid/>
                </LineChart>
                <XAxis
                    style={{ marginHorizontal: -12 }}
                    data={ alimentsData }
                    formatLabel={ ((value.nutrition_score_fr_100g - 50), index) => index }
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 8, fill: 'black' }}
                />
            </View>
        )
    }
}
