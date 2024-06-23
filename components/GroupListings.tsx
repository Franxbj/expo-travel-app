import { GroupType } from '@/types/groupType';
import React from 'react';
import { View, Text, FlatList, Image, ListRenderItem, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const GroupListings = ({listings}: {listings:GroupType[]}) => {
    const renderItem:ListRenderItem<GroupType> = ({item}) => {
        return(
            <View style = {styles.item}>
                <Image source={{uri:item.image}} style={styles.image}/>
                <View>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        <Ionicons name="star" size={20} color={Colors.primaryColor}/>
                        <Text style={styles.itemRating}>{item.rating}</Text>
                        <Text style={styles.itemReviews}>({item.reviews})</Text>
                    </View>
                </View>
            </View>
        );
    }

  return (
    <View style={{marginVertical:20}}>
      <Text style={styles.title}>Top Travel Groups</Text>
      <FlatList data={listings} renderItem={renderItem}  horizontal showHorizontalScrollIndicator={false}/>
    </View>
  );
};

export default GroupListings;

const styles = StyleSheet.create ({
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 10,
    },
    image: {
        width: 80,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    item: {
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemText: {
       fontSize: 14,
       fontWeight: '600',
       color: Colors.black,
       marginBottom: 8,
    },
    itemRating: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
        marginLeft: 5,
    },
    itemReviews: {
        fontSize: 14,
        color: '#999'
    },   
})