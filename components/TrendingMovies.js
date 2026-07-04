import { View, Text, TouchableWithoutFeedback, Dimensions, Image, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { image500, fallbackMoviePoster } from '../api/moviedb';

var { width, height } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.62;
const SPACING = (width - ITEM_WIDTH) / 2;

export default function TrendingMovies({ data }) {
    const navigation = useNavigation();
    const handleClick = (item) => {
        navigation.navigate('Movie', item);
    }
    return (
        <View className="mb-8">
            <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={ITEM_WIDTH + 10}
                decelerationRate="fast"
                contentContainerStyle={{ paddingHorizontal: SPACING / 2 }}
            />
        </View>
    )
}

const MovieCard = ({ item, handleClick }) => {
    return (
        <TouchableWithoutFeedback onPress={() => handleClick(item)}>
            <Image
                source={{ uri: image500(item.poster_path) || fallbackMoviePoster }}
                style={{
                    width: ITEM_WIDTH,
                    height: height * 0.4,
                    marginHorizontal: 5,
                }}
                className="rounded-3xl"
            />
        </TouchableWithoutFeedback>
    )
}
