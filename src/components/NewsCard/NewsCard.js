import React, { useState, useEffect, createRef } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import classNames from "classnames";

import useStyles from "./styles";

const NewsCard = ({ article: {description, publishedAt, source, title, url, urlToImage}, i, activeArticle}) => {
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50)

    useEffect(()=> {
        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, [])

    useEffect(() => {
        if(i === activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle])
        }
    }, [i, activeArticle, elRefs])

    return (
        <Card ref={elRefs[i]} className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || "https://pixabay.com/get/g0303b544cf2a9e31a66e40767e334f3520526346a9516f382ab0cdd8dd45f3ba0cc094619c42d0f5f5ca7b7fa939d8ff_640.jpg"} />
                <div className={classes.details}>
                    <Typography variant="body2" color="text-secondary" component="h2">{(new Date(publishedAt)).toDateString}</Typography>
                    <Typography variant="body2" color="text-secondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} variant="h5" gutterBottom>{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="text-secondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="text-secondary">{i + 1}</Typography>
            </CardActions>
        </Card>
    )
    }

export default NewsCard;
