import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {unsplashAction, unsplashSelector} from '../utils/slice';
import {useInfinteScroll} from '../utils/hooks';

import Loader from './Loader';
import ErrorView from './ErrorView';

const ImageGrid = () => {
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
        <div className='content'>
            <section className='grid'>
                {/* TODO: 컴포넌트화 */}
                {images.map(image => (
                    <div
                        key={image.id}
                        className={`item item-${Math.ceil(
                            image.height / image.width,
                        )}`}
                    >
                        <img
                            src={image.urls.small}
                            alt={image.user.username}
                        />
                    </div>
                ))}
                <div
                    ref={setTarget}
                    className='last-item'
                >
                    <Loader size='s'/>
                </div>
            </section>
        </div>
    );
};

export default ImageGrid;