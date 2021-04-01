import React from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from "@material-ui/core";

import useStyles from "./styles";

const NewsCard = ({ article: {description, publishedAt, source, title, url, urlToImage}, i }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
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

export default NewsCard
