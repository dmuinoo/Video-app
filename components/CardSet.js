import React from 'react';
import { ScrollView, Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';

const CardSet = ({ items }) => (
    <ScrollView>
    <View style={styles.container}>
    {
            //ES6 "funcion Map"
            // Item1, Item2, Item3
            Items.map(item =>  
                <View
                key={item.title}
                style={styles.cardStyle}>
                <Card 
                                       
                                        {...item} >
                                        </Card>
                </View>
                    )
        }
    </View>

    </ScrollView>
);

const styles = StyleSheet.create(
    {
        container: {
            padding: 20,
            backgroundColor: '#E1E2E1',
        }
    }
)
CardSet.prototype = {
    items: PropTypes.arrayOf(PropTypes.shape(
        { title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })).isRequired,
};

export default CardSet;