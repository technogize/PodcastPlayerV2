import React from 'react';
import PodcastItem from '../PodcastItem';

const Podcasts = () => {
  return (
    <div className="Podcasts">
      <PodcastItem
        id={1}
        name="Last podcast on the left"
        imageUrl="http://static.libsyn.com/p/assets/7/b/0/3/7b03e748868ef23a/LPOTL_Poster_LPN.jpg"
      />
      <PodcastItem
        id={2}
        name="No Sleep podcast"
        imageUrl="https://content.production.cdn.art19.com/images/db/11/0f/ef/db110fef-6de8-46ec-b654-5b9579bdebad/94c86043b285dd04bfad3dbceba9956df37fa8baaa168ef6de45dfc05967f9195c3c2027bc558e361af1fb8f61d9ce76004b17355ed507f1870554ee0eebe084.jpeg"
      />
      <PodcastItem
        id={3}
        name="Midnight Marinara"
        imageUrl="https://images.squarespace-cdn.com/content/510094bde4b0d34aa0c31ea5/1384841769860-DXE5B1TQNJYONCP4H9ZN/MidnightManProgress.png"
      />
      <PodcastItem id={4} name="Last podcast on the left" />
      <PodcastItem
        id={5}
        name="No Sleep podcast"
        imageUrl="https://content.production.cdn.art19.com/images/db/11/0f/ef/db110fef-6de8-46ec-b654-5b9579bdebad/94c86043b285dd04bfad3dbceba9956df37fa8baaa168ef6de45dfc05967f9195c3c2027bc558e361af1fb8f61d9ce76004b17355ed507f1870554ee0eebe084.jpeg"
      />
      <PodcastItem
        id={6}
        name="Midnight Marinara"
        imageUrl="https://images.squarespace-cdn.com/content/510094bde4b0d34aa0c31ea5/1384841769860-DXE5B1TQNJYONCP4H9ZN/MidnightManProgress.png"
      />
    </div>
  );
};

export default Podcasts;
