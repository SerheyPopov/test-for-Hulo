import { Slide } from './Main/Main';

export const processSlidesData = (respons: any): Slide[] => {
   return [
        {
            id: 1,
            value: "slide1",
            videoLink: respons.player_embed_url,
            title: respons.pictures.base_link,
        },
        {
            id: 2,
            value: "slide2",
            videoLink: respons.player_embed_url,
            title: respons.pictures.base_link,
        },
        {
            id: 3,
            value: "slide3",
            videoLink: respons.player_embed_url,
            title: respons.pictures.base_link,
        },
        {
            id: 4,
            value: "slide4",
            videoLink: respons.player_embed_url,
            title: respons.pictures.base_link,
        },
        {
            id: 5,
            value: "slide5",
            videoLink: respons.player_embed_url,
            title: respons.pictures.base_link,
        },
        {
            id: 6,
            value: "slide6",
            videoLink: respons.player_embed_url,
            title: respons.pictures.base_link,
        },
        {
            id: 7,
            value: "slide7",
            videoLink: respons.player_embed_url,
            title: respons.pictures.base_link,
        },
        {
            id: 8,
            value: "slide8",
            videoLink: respons.player_embed_url,
            title: respons.pictures.base_link,
        },
    ]
};