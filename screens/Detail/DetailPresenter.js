import React, {useState} from 'react';
import styled from 'styled-components/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ScrollContainer from "../../components/ScrollContainer";
import {apiImage} from "../../api";
import {View, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import Poster from '../../components/Poster';
import Votes from '../../components/votes';
import HorizontalSlider from "../../components/HorizontalSlider";
import SimilarPoster from "../../components/Detail/SimilarPoster";
import {formDate} from '../../utils';
import Link from '../../components/Link';

import {theme} from '../../constants';
import {Text, Block} from '../../components';


const Similar = () => (
    <View style={[styles.container, {backgroundColor: "black"}]}>
        <Text style={{color: 'white'}}>성재민입니다.</Text>
    </View>
)

const Movie = () => (
    <View style={[styles.container, {backgroundColor: "black"}]}/>
)

const initialLayout = {width: Dimensions.get('window').width};

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{backgroundColor: "white"}}
        style={{backgroundColor: "black"}}
    />
)

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;


const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const Data = styled.View`
  margin-top: 30px;
  padding: 0 30px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

const DataName = styled.Text`
  margin-top: 30px;
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 13px;
  font-size: 17px;
`;


export default ({openBrowser, result, loading}) => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'first', title: 'Similar'},
        {key: 'second', title: 'Movie'}
    ]);

    const renderScene = SceneMap({
        first: Similar,
        second: Movie
    })

    return (
        <ScrollContainer
            loading={false}
            contentContainerStyle={{ paddingBottom: 80}}

        >
            <Header>
                <BG source={{uri: apiImage(result.backgroundImage, "-")}} />
                <Container>
                    <Poster url={result.poster} />
                    <Info>
                        <Title>{result.title}</Title>
                        {result.votes ? <Votes votes={result.votes} /> : null}
                    </Info>
                </Container>
            </Header>
            <Data>
                {result.overview  ? (
                    <>
                        <DataName>Overview</DataName>
                        <DataValue numberOfLines={3} ellipsSizeMode="middle">{result.overview}</DataValue>
                    </>
                ) : null}
                {loading ? (
                    <ActivityIndicator style={{marginTop: 30}} color={"white"} />
                ) : null }

                {result.spoken_languages ? (
                    <>
                        <DataName>Languages</DataName>
                        <DataValue>
                            {result.spoken_languages.map(l => `${l.name}`)}
                        </DataValue>
                    </>
                ) : null}

                {result.release_date ? (
                    <>
                        <DataName>ReleaseDate</DataName>
                        <DataValue>{formDate(result.release_date)}</DataValue>
                    </>
                ) : null }

                {result.status ? (
                    <>
                        <DataName>Status</DataName>
                        <DataValue>{result.status}</DataValue>
                    </>
                ) : null}

                {result.runtime ? (
                    <>
                        <DataName>Runtime</DataName>
                        <DataValue>{result.runtime} minutes</DataValue>
                    </>
                ) : null}

                {result.first_air_date ? (
                    <>
                        <DataName>First Air Date</DataName>
                        <DataValue>{result.first_air_date}</DataValue>
                    </>
                ) : null}

                {result.genres ? (
                    <>
                        <DataName>Genres</DataName>
                        <DataValue>
                            {result.genres.map((g, index) =>
                                index + 1 === result.genres.length ? g.name : `${g.name},`
                            )}
                        </DataValue>
                    </>
                ) : null}

                {result.number_of_episodes ? (
                    <>
                        <DataName>Seasons / Episodes</DataName>
                        <DataValue>
                            {result.number_of_seasons} / {result.number_of_episodes}
                        </DataValue>
                    </>
                ) : null}

                {result.imdb_id ? (

                    <>
                        <DataName>Links</DataName>
                        <Link
                            text={"IMDB Page"}
                            icon={"imdb"}
                            onPress={() =>
                                openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)
                            }
                        />
                    </>

                ) : null}

                {result.videos.results?.length > 0 ? (
                    <>
                        <DataName>Videos</DataName>
                        {result.videos.results.map(video => (
                            <Link
                                text={video.name}
                                key={video.id}
                                icon="youtube-play"
                                onPress={() =>
                                    openBrowser(`http://www.youtube.com/watch?v=${video.key}`)
                                }
                            />
                        ))}
                    </>
                ) : null}

                {result.keyword.length > 0 ? (
                    <>
                        <DataName>Keywords</DataName>
                        <View style={styles.keywords}>
                            {result.keyword.map(item => (
                                <View style={styles.keyword}>
                                    <Text style={styles.keywordText}>
                                        #{item.name}
                                    </Text>
                                </View>

                            ))}
                        </View>

                    </>
                ) : null}

                {result.similar.length > 0 ? (
                    <>
                        <DataName>Similar Movie</DataName>
                        <HorizontalSlider title="Similar">
                            {result.similar.map(video => (
                                <SimilarPoster
                                    key={video.id}
                                    id={video.id}
                                    poster={video.poster_path}

                                />
                            ))}
                        </HorizontalSlider>
                    </>
                ) : null}
            </Data>

            <TabView
                renderScene={renderScene}
                onIndexChange={setIndex}
                navigationState={{index, routes}}
                initialLayout={initialLayout}
                renderTabBar={renderTabBar}
            />
        </ScrollContainer>
    )

};
const styles = StyleSheet.create({
    container: {
        flex : 1
    },
    keywords: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-start',
        marginVertical: 4,
        color: "white",

    },
    keyword: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderWidth: 1,
        borderRadius: 14,
        borderColor: '#ccc',
        marginRight: 4,
        marginBottom: 4,
    },
    keywordText: {
        fontSize: 16,
        opacity: 0.8,
        color: "white"
    }
});
