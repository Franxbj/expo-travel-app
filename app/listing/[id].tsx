import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const ListingDetails = () => {
    const {id} = useLocalSearchParams();

    return (
        <View>
        <Text>ListingDetails {id} </Text>
        </View>
    );
};

export default ListingDetails;