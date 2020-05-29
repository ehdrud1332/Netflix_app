import React from 'react';
import ScrollContainer from '../../components/ScrollContainer';
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";

const TvPresenter = ({loading, popular, topRated}) => (

    <ScrollContainer loading={loading}>
        <HorizontalSlider title={"Popular Show"}>
            {popular.map(tv => (
                <Vertical
                    key={tv.id}
                    votes={tv.vote_average}
                    poster={tv.poster_path}
                    id={tv.id}
                    title={tv.original_name}
                />
            ))}
        </HorizontalSlider>
    </ScrollContainer>


)

export default TvPresenter;
