import React, {useState, useEffect, useRef} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    Animated,
    TouchableOpacity,
    Platform,
    StatusBar
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Feather} from '@expo/vector-icons';
import Loader from '../components/Loader';
import Backdrop from "../components/Backdrop";
import {getMovies} from '../popularApi';
import Genres from '../components/Genres';
import Rating from "../components/Rating";
import Search from '../screens/Search';

const {width, height} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const SPACING = 10;

export default ({navigation}) => {

    const [movies, setMovies] = useState([]);
    const scrollX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const fetchData = async () => {
            const movies = await getMovies();
            // Add empty items to create fake space
            // [empty_item, …movies, empty_item]
            setMovies([{ key: 'empty-left' }, ...movies, { key: 'empty-right' }]);
        };

        if (movies.length === 0) {
            fetchData(movies);

            console.log(movies);
        }
    }, [movies]);

    return (
        <View style={styles.container}>
            <Backdrop movies={movies} scrollX={scrollX}/>
            <StatusBar barStyle="dark-content"/>
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                <Feather
                    name="search"
                    size={23}
                    style={{
                        color: 'black',
                        marginLeft: 340,
                        marginTop: 25
                    }}
                />
            </TouchableOpacity>
            <Animated.FlatList
                showsHorizontalScrollIndicator={false}
                data={movies}
                keyExtractor={(item) => item.key}
                horizontal
                bounces={false}
                decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
                renderToHardwareTextureAndroid
                contentContainerStyle={{ alignItems: 'center' }}
                snapToInterval={ITEM_SIZE}
                snapToAlignment='start'
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
                renderItem={({ item, index }) => {
                    if (!item.poster) {
                        return <View style={{ width: EMPTY_ITEM_SIZE }} />;
                    }

                    const inputRange = [
                        (index - 2) * ITEM_SIZE,
                        (index - 1) * ITEM_SIZE,
                        index * ITEM_SIZE,
                    ];

                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange: [100, 50, 100],
                        extrapolate: 'clamp',
                    });

                    return (
                        <View style={{width: ITEM_SIZE}}>

                            <Animated.View
                                style={{
                                    marginHorizontal: SPACING,
                                    padding: SPACING * 2,
                                    alignItems: 'center',
                                    transform: [{translateY}],
                                    backgroundColor: 'white',
                                    borderRadius: 34
                                }}
                            >
                                <Image
                                    source={{uri: item.poster}}
                                    style={styles.posterImage}
                                />
                                <Text style={{fontSize: 24}} numberOfLines={1}>
                                    {item.title}
                                </Text>
                                <Rating rating={item.rating}/>
                                <Genres genres={item.genres}/>
                                <Text style={{fontSize: 12}} numberOfLines={2}>
                                    {item.description}
                                </Text>
                            </Animated.View>
                        </View>
                    )

                }}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    posterImage: {
        width: '100%',
        height: ITEM_SIZE * 1.2,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
        marginBottom: 10
    }
})
