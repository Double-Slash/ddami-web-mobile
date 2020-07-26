import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {unsplashAction, unsplashSelector} from "../utils/slice";
import {useInfinteScroll} from "../utils/hooks";
import Loader from "./Loader";
import ErrorView from "./ErrorView";
import styled from "styled-components";

const ItemComponent = styled.div`
width:40%;
height:40%;
margin: 5%;
display: inline-block;
text-align: center;
vertical-align: center;
overflow: none;
`;

const ImageItem = styled.img`
width: 100%;
height: 100px;
border-radius: 5px;
`;

const ItemDescription = styled.div`
text-align: left;
width: 100%;
`;

const ItemName = styled.p`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
max-height: 1.5rem;
max-width: 100%;
`;

function ImageGrid() {
    const dispatch = useDispatch();
    const [target, setTarget] = useState(null);

    const {
        isLoading,
        images,
        error
    } = useSelector(unsplashSelector.all);

    useInfinteScroll({
        target,
        onIntersect: ([{isIntersecting}]) => {
            if (isIntersecting) {
                dispatch(unsplashAction.loadMore());
            }
        }
    });

    useEffect(() => {
        dispatch(unsplashAction.load());
    }, []);

    if (isLoading) {
        return <Loader/>;
    }

    if (error) {
        return <ErrorView/>;
    }

    return (
        <div className="content">
            <section className="grid">
                {images.map(image => (
                    <ItemComponent
                        key={image.id}
                        className={`item item-${Math.ceil(
                            image.height / image.width,
                        )}`}
                    >
                        <ImageItem
                            src={image.urls.small}
                            alt={image.user.username}
                        />
                        <ItemDescription>
                            <ItemName>
                                작품명(한 줄 말줄임표는 들어감)
                            </ItemName>
                            <p>{image.user.username}</p>
                        </ItemDescription>
                    </ItemComponent>
                ))}
                <div
                    ref={setTarget}
                    className="last-item"
                >
                    <Loader size="s"/>
                </div>
            </section>
        </div>
    );
};

export default ImageGrid;