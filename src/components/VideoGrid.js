import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import * as React from "react";
import { useEffect, useState } from "react";

export default function VideoGrid() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=18&order=viewCount&topicId=music&key=AIzaSyBH6PYa32luSeYfRvI3hA4bgSm-S1bqj5A"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setIsLoading(false);
          setItems(data.items);
          // console.log(data);
        })
        .catch((error) => {
          console.log(error);
          setError(true);
          setIsLoading(false);
        });
    };
    fetchData();
  }, []);
  return (
    <>
      {error && <p>Error loading page. Try again</p>}
      {isLoading && <p>Loading...</p>}
      <Box
        sx={{
          backgroundColor: "primary.dark",
          width: "100%",
          height: "100vh",
        }}
      >
        <Grid container display="flex" justifyContent="center">
          <Grid item>
            <ImageList
              cols={3}
              sx={{
                width: 750,
                height: 600,
                borderRadius: 2,
                backgroundColor: "white",
              }}
            >
              {items.map((videos) => (
                <ImageListItem
                  key={videos.id}
                  sx={{
                    width: 200,
                    height: 100,
                  }}
                >
                  <img
                    src={`${videos.snippet.thumbnails.high.url}?w=248&fit=crop&auto=format`}
                    srcSet={`${videos.snippet.thumbnails.high.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={videos.snippet.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    sx={{ marginLeft: 1.5 }}
                    title={videos.snippet.title}
                    // subtitle={<span>by: {videos.snippet.title}</span>}
                    position="below"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

//const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//     title: "Breakfast",
//     author: "@bkristastucchio",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//     title: "Burger",
//     author: "@rollelflex_graphy726",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     title: "Camera",
//     author: "@helloimnik",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//     title: "Coffee",
//     author: "@nolanissac",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//     title: "Hats",
//     author: "@hjrc33",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//     title: "Honey",
//     author: "@arwinneil",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//     title: "Basketball",
//     author: "@tjdragotta",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//     title: "Fern",
//     author: "@katie_wasserman",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//     title: "Mushrooms",
//     author: "@silverdalex",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//     title: "Tomato basil",
//     author: "@shelleypauls",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
//     title: "Sea star",
//     author: "@peterlaster",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//     title: "Bike",
//     author: "@southside_customs",
//   },
// ];//
